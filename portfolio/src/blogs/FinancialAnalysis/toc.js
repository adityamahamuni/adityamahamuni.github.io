import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Use Link from react-router-dom

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
            <RouterLink
              to="#introduction"
              onClick={(e) => handleClick(e, "introduction")}
              className="hover:underline"
            >
              Introduction
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#problem-statement"
              onClick={(e) => handleClick(e, "problem-statement")}
              className="hover:underline"
            >
              Problem Statement
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#dataset-technologies"
              onClick={(e) => handleClick(e, "dataset-technologies")}
              className="hover:underline"
            >
              Dataset and Technologies Used
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#data-cleaning-eda"
              onClick={(e) => handleClick(e, "data-cleaning-eda")}
              className="hover:underline"
            >
              Data Cleaning and EDA
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#clustering-analysis"
              onClick={(e) => handleClick(e, "clustering-analysis")}
              className="hover:underline"
            >
              Clustering Analysis
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#regression-analysis"
              onClick={(e) => handleClick(e, "regression-analysis")}
              className="hover:underline"
            >
              Regression Analysis
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#combined-analysis"
              onClick={(e) => handleClick(e, "combined-analysis")}
              className="hover:underline"
            >
              Combined Analysis
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#resilience-analysis"
              onClick={(e) => handleClick(e, "resilience-analysis")}
              className="hover:underline"
            >
              Resilience Analysis
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#conclusion-recommendations"
              onClick={(e) => handleClick(e, "conclusion-recommendations")}
              className="hover:underline"
            >
              Conclusion & Recommendations
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="#answers-to-research-questions"
              onClick={(e) => handleClick(e, "answers-to-research-questions")}
              className="hover:underline"
            >
              Answers to Research Questions
            </RouterLink>
          </li>
        </ul>
      )}
    </section>
  );
};

export default TableOfContents;
