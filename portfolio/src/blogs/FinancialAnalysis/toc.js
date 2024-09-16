import React, { useState } from "react";

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#introduction" className="hover:underline">
              Introduction
            </a>
          </li>
          <li>
            <a href="#problem-statement" className="hover:underline">
              Problem Statement
            </a>
          </li>
          <li>
            <a href="#dataset-technologies" className="hover:underline">
              Dataset and Technologies Used
            </a>
          </li>
          <li>
            <a href="#data-cleaning-eda" className="hover:underline">
              Data Cleaning and EDA
            </a>
          </li>
          <li>
            <a href="#clustering-analysis" className="hover:underline">
              Clustering Analysis
            </a>
          </li>
          <li>
            <a href="#regression-analysis" className="hover:underline">
              Regression Analysis
            </a>
          </li>
          <li>
            <a href="#combined-analysis" className="hover:underline">
              Combined Analysis
            </a>
          </li>
          <li>
            <a href="#resilience-analysis" className="hover:underline">
              Resilience Analysis
            </a>
          </li>
          <li>
            <a href="#conclusion-recommendations" className="hover:underline">
              Conclusion & Recommendations
            </a>
          </li>
          <li>
            <a
              href="#answers-to-research-questions"
              className="hover:underline"
            >
              Answers to Research Questions
            </a>
          </li>
        </ul>
      )}
    </section>
  );
};

export default TableOfContents;
