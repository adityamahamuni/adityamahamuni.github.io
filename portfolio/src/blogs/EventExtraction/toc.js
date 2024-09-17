import React, { useState } from "react";

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="my-8">
      <h2
        className="text-lg font-bold mb-2 text-black dark:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▾ Table of Contents" : "▸ Table of Contents"}
      </h2>
      {isOpen && (
        <ul className="list-disc list-inside space-y-1 pl-4 text-sm text-black dark:text-white">
          <li>
            <a
              href="#introduction"
              onClick={(e) => handleClick(e, "introduction")}
              className="hover:underline"
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#problem-statement"
              onClick={(e) => handleClick(e, "problem-statement")}
              className="hover:underline"
            >
              Problem Statement
            </a>
          </li>
          <li>
            <a
              href="#research-objectives"
              onClick={(e) => handleClick(e, "research-objectives")}
              className="hover:underline"
            >
              Research Objectives
            </a>
          </li>
          <li>
            <a
              href="#dataset-technologies"
              onClick={(e) => handleClick(e, "dataset-technologies")}
              className="hover:underline"
            >
              Dataset and Technologies
            </a>
          </li>
          <li>
            <a
              href="#prompt-engineering"
              onClick={(e) => handleClick(e, "prompt-engineering")}
              className="hover:underline"
            >
              Prompt Engineering
            </a>
          </li>
          <li>
            <a
              href="#fine-tuning-training"
              onClick={(e) => handleClick(e, "fine-tuning-training")}
              className="hover:underline"
            >
              Fine-Tuning and Model Training
            </a>
          </li>
          <li>
            <a
              href="#model-inference"
              onClick={(e) => handleClick(e, "model-inference")}
              className="hover:underline"
            >
              Model Inference
            </a>
          </li>
          <li>
            <a
              href="#results-analysis"
              onClick={(e) => handleClick(e, "results-analysis")}
              className="hover:underline"
            >
              Results and Analysis
            </a>
          </li>
          <li>
            <a
              href="#conclusion"
              onClick={(e) => handleClick(e, "conclusion")}
              className="hover:underline"
            >
              Conclusion
            </a>
          </li>
        </ul>
      )}
    </section>
  );
};

export default TableOfContents;
