from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from enum import Enum

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EventType(Enum):
    I_A = "Acquisition (A)"
    I_CT = "Clinical Trial (CT)"
    I_RD = "Regular Dividend (RD)"
    I_DC = "Dividend Cut (DC)"
    I_DI = "Dividend Increase (DI)"
    I_GI = "Guidance Increase (GI)"
    I_NC = "New Contract (NC)"
    I_RSS = "Reverse Stock Split (RSS)"
    I_SD = "Special Dividend (SD)"
    I_SR = "Stock Repurchase (SR)"
    I_SS = "Stock Split (SS)"
    O = "Other/None (O)"


class ModelPredictor:
    def __init__(self, model_dir, label_mapping, use_cpu=False):
        self.model_dir = model_dir
        self.label_mapping = label_mapping
        self.use_cpu = use_cpu

        device = torch.device(
            "cuda" if torch.cuda.is_available() and not self.use_cpu else "cpu")

        # Load the tokenizer and model
        self.tokenizer = AutoTokenizer.from_pretrained(model_dir)
        self.model = AutoModelForSequenceClassification.from_pretrained(
            model_dir).to(device)
        print(self.model)
        self.device = device

        # Reverse label mapping to convert the integer label back to event label
        self.reverse_label_mapping = {v: k for k, v in label_mapping.items()}

    def predict(self, text):
        print(f"Text: {text}")

        # Tokenize the input text
        inputs = self.tokenizer(text, return_tensors="pt",
                                padding=True, truncation=True).to(self.device)
        print(f"Tokenizer Input: {inputs}")

        with torch.no_grad():
            outputs = self.model(**inputs)

        logits = outputs.logits
        preds = torch.argmax(logits, dim=-1).cpu().numpy()

        # Get the label string from the prediction
        predicted_label = self.reverse_label_mapping[preds[0]]

        # Map the label to the EventType enum
        event = EventType[predicted_label.replace('-', '_')].value

        return event


# Model directory and label mapping
model_dir = "./final_model"
use_cpu = True
label_mapping = {
    'I-A': 0, 'I-CT': 1, 'I-DC': 2, 'I-DI': 3, 'I-GC': 4,
    'I-NC': 5, 'I-RD': 6, 'I-RSS': 7, 'I-SD': 8, 'I-SR': 9, 'I-SS': 10, 'O': 11
}

# Initialize the predictor
predictor = ModelPredictor(
    model_dir=model_dir, label_mapping=label_mapping, use_cpu=use_cpu)


@app.post("/api/event-extraction")
async def event_extraction(request: Request):
    request_data = await request.json()
    input_text = request_data.get('text', '')

    if input_text:
        predicted_event = predictor.predict(input_text)
        return {"extracted_event": predicted_event}
    else:
        return {"error": "No input text provided"}
