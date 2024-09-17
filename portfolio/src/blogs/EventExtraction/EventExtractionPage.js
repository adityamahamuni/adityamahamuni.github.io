import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { SiPytorch, SiNumpy } from "react-icons/si";

const EventExtractionPage = ({ darkMode }) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [error, setError] = useState("");

  const handleInference = async () => {
    try {
      const response = await fetch(
        "https://api.adityamahamuni.me/api/event-extraction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(errorData.error || "Failed to extract events");
      }

      const data = await response.json();
      if (data.extracted_event) {
        setOutputText(data.extracted_event);
        setError("");
      } else {
        setError("No events found or invalid input.");
      }
    } catch (err) {
      setError("Error during extraction: " + err.message);
    }
  };

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Breadcrumbs */}
      <nav className="breadcrumb mb-6 text-gray-500">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </Link>
        <span className="mx-2">{">>"}</span>
        <Link
          to="/projects"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Projects
        </Link>
        <span className="mx-2">{">>"}</span>
        <span>Event Extraction from Financial Articles</span>
      </nav>

      {/* Introduction Section */}
      <section className="my-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-green-400">
          <a
            href="https://github.com/adityamahamuni/financial-event-extraction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Event Extraction from Financial Articles Using Natural Language
            Processing
          </a>
        </h1>
        <p className="text-lg">
          This project enhances financial decision-making by automatically
          extracting key financial events from news articles using NLP
          techniques and LLMs. Events like mergers, acquisitions, and dividend
          announcements significantly impact stock performance, and this system
          helps identify those events.
        </p>
      </section>

      {/* Problem Statement Section */}
      <section className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Problem Statement
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          Financial articles are filled with critical information that can
          influence stock markets. Extracting actionable events from large
          volumes of text data is a challenge. This project aims to extract
          events such as earnings reports, mergers, and acquisitions from
          financial news using advanced LLM techniques, helping investors make
          data-driven decisions.
        </p>

        <p className="text-lg text-black dark:text-white mb-4">
          Project can be accessed on{" "}
          <a
            href="https://github.com/adityamahamuni/financial-event-extraction"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 dark:bg-blue-300 text-black dark:text-white"
          >
            Github
          </a>
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Research Objectives
        </h3>
        <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
          <li>
            <strong>Zero-Shot Learning:</strong> Evaluating the performance of
            LLMs like FlanT5, GPT-2, and BART in event extraction without prior
            task-specific training.
          </li>
          <li>
            <strong>Few-Shot Learning:</strong> Improving model accuracy with
            minimal labeled data by using few-shot learning strategies to refine
            event extraction.
          </li>
          <li>
            <strong>Fine-Tuning LLMs:</strong> Training models on the provided
            dataset and assessing their performance using metrics such as F1
            score and Exact Match.
          </li>
          <li>
            <strong>Traditional Machine Learning Approaches:</strong> Exploring
            ML classifiers, including Long Short-Term Memory (LSTM)
            architecture, to evaluate classification performance.
          </li>
          <li>
            <strong>Evaluation Metrics:</strong> Using a comprehensive set of
            evaluation metrics such as Exact Match, F1 Score, and Token-Level F1
            to rigorously assess the models' performance.
          </li>
        </ul>
      </section>

      {/* Dataset and Technologies Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          Dataset and Technologies Used
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center text-lg text-black dark:text-white">
            <strong>Dataset:</strong>
            <a
              href="https://github.com/Zhihan1996/TradeTheEvent/tree/main/data"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-black dark:text-white rounded hover:bg-black hover:text-white"
            >
              EDT Dataset from Trade the Event Research Paper
            </a>
          </li>
          <li className="flex items-center text-lg text-black dark:text-white">
            <strong>Technologies:</strong> Python{" "}
            <FaPython className="mr-2 text-3xl" /> PyTorch{" "}
            <SiPytorch className="mr-2 text-3xl" />, Transformers , Numpy{" "}
            <SiNumpy className="mx-2 text-3xl" />
          </li>
        </ul>
      </section>

      {/* Prompt Engineering Section */}
      <section className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Prompt Engineering
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          Prompt engineering is employed to enhance the performance of models in
          both zero-shot and few-shot learning scenarios. Different prompting
          strategies are used to guide models like Flan-T5, GPT, and BART in
          extracting financial events from articles without task-specific
          training.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Zero-Shot Learning
        </h3>
        <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
          <li>
            <strong>Schema Prompting:</strong> Instructions with event types are
            provided to guide event extraction.
          </li>
          <li>
            <strong>Code Prompting:</strong> Instructions are formatted in a
            code-like style to enhance clarity.
          </li>
          <li>
            <strong>Explanation Prompting:</strong> Detailed explanations of
            each event type help the model understand context.
          </li>
          <li>
            <strong>Pipeline Prompting:</strong> Sequential prompting to focus
            on the event type extraction step-by-step.
          </li>
        </ul>
        <p className="text-lg text-black dark:text-white mb-4">
          These strategies improve the model's ability to identify financial
          events, even in scenarios where it hasn't been trained on similar
          examples.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Few-Shot Learning
        </h3>
        <p className="text-lg text-black dark:text-white mb-4">
          Few-shot learning enhances model performance by providing a small set
          of labeled examples. Different selection strategies such as random
          selection, SBERT-based, and BM25-based selection ensure relevance of
          examples for improved event extraction.
        </p>
        <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
          <li>
            <strong>Few-shot Selection:</strong> Few examples from the dataset
            are incorporated into prompts to guide predictions.
          </li>
          <li>
            <strong>Evaluation Metrics:</strong> Metrics such as Exact Match,
            Precision, Recall, and F1 Score are used to assess the effectiveness
            of few-shot learning.
          </li>
        </ul>
        <p className="text-lg text-black dark:text-white mb-4">
          The results from few-shot learning are compared to zero-shot learning
          to measure performance improvements. Extracted events and predictions
          are stored for further analysis.
        </p>
      </section>

      {/* Fine-Tuning and Model Training Section */}
      <section className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Fine-Tuning and Model Training
        </h2>
        <p className="text-lg text-black dark:text-white mb-4">
          To improve the performance and contextual understanding of the LLMs
          for financial event extraction, a rigorous fine-tuning and training
          process was applied. This helped the models adapt to the complexity of
          financial text data.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Hyperparameter Tuning
        </h3>
        <p className="text-lg text-black dark:text-white mb-4">
          Initial fine-tuning involved adjusting hyperparameters such as
          learning rate, batch size, and dropout rates. Overfitting issues were
          addressed by reducing the learning rate, increasing dropout rates, and
          implementing L2 regularization. This allowed the models to capture
          data complexity while improving generalization.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Model Training Process
        </h3>
        <p className="text-lg text-black dark:text-white mb-4">
          The training process utilized structured financial text datasets and
          custom training scripts (e.g.,{" "}
          <code>flanT5_eventClassification_train.py</code>). Models were
          evaluated on a validation set, with early stopping mechanisms employed
          to prevent overfitting. This ensured the models' robustness when
          dealing with unseen data.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Validation and Testing
        </h3>
        <p className="text-lg text-black dark:text-white mb-4">
          Post-training, the models were validated and tested on separate
          datasets to evaluate their ability to generalize. Metrics such as
          precision, recall, F1-score, and accuracy were used to assess
          performance. The final round of fine-tuning resulted in significant
          improvements in extracting and classifying financial events.
        </p>
      </section>

      {/* LLM Inference Section */}
      <section className="my-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Model Inference
        </h2>

        {/* Explanation about the input and events */}
        <p className="text-lg mb-4 text-black dark:text-white">
          Please enter a financial news article or a segment of text related to
          financial events. The model is trained to extract the following
          financial event types:
        </p>
        <ul className="list-disc list-inside mb-4 text-black dark:text-white">
          <li>Acquisition (A)</li>
          <li>Clinical Trial (CT)</li>
          <li>Regular Dividend (RD)</li>
          <li>Dividend Cut (DC)</li>
          <li>Dividend Increase (DI)</li>
          <li>Guidance Increase (GI)</li>
          <li>New Contract (NC)</li>
          <li>Reverse Stock Split (RSS)</li>
          <li>Special Dividend (SD)</li>
          <li>Stock Repurchase (SR)</li>
          <li>Stock Split (SS)</li>
          <li>Other/None (O)</li>
        </ul>
        <p className="text-lg mb-4 text-black dark:text-white">
          Input any financial text such as news about mergers, acquisitions,
          stock splits, dividend announcements, or other corporate events.
        </p>

        <textarea
          className="w-full p-4 mb-4 border rounded-lg"
          rows="5"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter financial article text..."
        />
        <button
          onClick={handleInference}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Extract Events
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Display outputText only if inputText is not empty */}
        {inputText && outputText && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Extracted Event:</h3>
            <p className="text-lg">{outputText}</p>
          </div>
        )}
      </section>

      {/* Results and Analysis Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Results and Analysis</h2>
        <p className="text-lg">
          The experiments were conducted using various models like GPT-2, BART,
          FlanT5, and GPT-4, with both zero-shot and few-shot learning
          strategies. The project demonstrated that fine-tuned models
          significantly outperformed zero-shot and few-shot learning.
          Fine-tuning allowed models to generalize better and handle complex
          financial text data more effectively.
        </p>

        {/* Zero-Shot Learning Results */}
        <h3 className="text-xl font-bold mb-4">Zero-Shot Learning</h3>
        <p className="text-lg">
          Zero-shot learning results varied depending on the model used. BART
          achieved high performance, with an Exact Match (EM) of 0.9239 and F1
          score of 0.9605, making it suitable for zero-shot tasks. On the other
          hand, GPT-2 struggled, achieving only an EM of 0.0063 and an F1 score
          of 0.0125. GPT-4 achieved a perfect score of 1.0000 in a limited test,
          highlighting its superior ability in zero-shot tasks.
        </p>

        {/* Few-Shot Learning Results */}
        <h3 className="text-xl font-bold mb-4">Few-Shot Learning</h3>
        <p className="text-lg">
          Few-shot learning, with selection strategies such as BM25 and SBERT,
          improved performance further. BM25 emerged as the most effective
          selection strategy, achieving an F1 score of 0.327, closely followed
          by SBERT at 0.319. Random selection, while simple, produced a lower F1
          score of 0.2998.
        </p>

        {/* Fine-Tuning Results */}
        <h3 className="text-xl font-bold mb-4">Fine-Tuning</h3>
        <p className="text-lg">
          Fine-tuned models performed best, with the Flan T5 model achieving an
          F1 score of 0.9701 during testing, while GPT-2 achieved an even higher
          score of 0.9752. This fine-tuning process enabled the models to
          generalize well and handle unseen financial articles effectively,
          identifying events like stock repurchases, dividend payments, and
          acquisitions with high accuracy.
        </p>

        {/* Real-World Validation */}
        <h3 className="text-xl font-bold mb-4">Real-World Validation</h3>
        <p className="text-lg">
          The models were tested on real-world financial articles, successfully
          identifying critical events such as stock repurchases (SR), special
          dividends (SD), and acquisitions (A). However, minor errors occurred,
          like confusing a dividend increase (DI) with a regular dividend (RD),
          underscoring the need for further refinement.
        </p>

        <p className="text-lg">
          Overall, fine-tuned LLMs outperformed zero-shot and few-shot learning
          strategies, demonstrating their strength in financial event extraction
          tasks. This performance, combined with the models' ability to
          generalize, makes fine-tuned LLMs highly effective for tasks where
          labeled data is available.
        </p>
      </section>

      {/* Conclusion Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          This project successfully demonstrated the potential of LLMs in
          financial event extraction by leveraging techniques like zero-shot,
          few-shot learning, and fine-tuning. While zero-shot models provided
          some insights, fine-tuned models like Flan T5 and GPT-2 achieved the
          best performance, highlighting the importance of task-specific
          training.
        </p>
        <p className="text-lg">
          Traditional machine learning methods, like XGBoost, were also
          competitive, especially when paired with feature engineering. Overall,
          the integration of LLMs and prompt engineering techniques has shown
          great promise in improving the accuracy of financial event detection,
          with the potential for significant real-world applications.
        </p>
      </section>
    </div>
  );
};

export default EventExtractionPage;
