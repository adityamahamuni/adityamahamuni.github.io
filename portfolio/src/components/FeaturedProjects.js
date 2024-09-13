import React from "react";

const FeaturedProjects = ({ darkMode }) => {
  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 md:px-0 max-w-full lg:max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold pb-4 mb-8 border-b-2 ${
            darkMode ? "border-green-500" : "border-black"
          }`}
        >
          Featured
        </h2>

        {/* First Project */}

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-green-400 hover:underline">
            <a
              href="https://github.com/adityamahamuni/Event-Extraction-from-Financial-Articles-Using-Natural-Language-Processing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Event Extraction from Financial Articles Using Natural Language
              Processing (MSc Dissertation)
            </a>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            Jan 2024 - Sept 2024
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This project focuses on the development of a robust system for the
            extraction and classification of financial events from unstructured
            textual data using advanced Natural Language Processing (NLP)
            techniques and Large Language Models (LLMs). The primary goal is to
            enhance the accuracy and timeliness of financial event detection,
            such as corporate announcements and significant market-moving news,
            which can be crucial for financial analysts, automated trading
            systems, and decision-makers.
          </p>
        </div>

        {/* Second Project */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-green-400 hover:underline">
            <a
              href="https://github.com/adityamahamuni/DataAnalytics/tree/main/NYSE_Stock_Analysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Clustering and Regression Analysis of Financial Health and Stock
              Performance
            </a>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            Dec 2023
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This project involved a comprehensive analysis of financial health
            metrics and stock performance of companies listed on the New York
            Stock Exchange (NYSE). The key objectives were to identify financial
            clusters of companies and predict stock prices based on historical
            data, aiding investors in making informed decisions.
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="border-b border-black dark:border-green-500"></div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
