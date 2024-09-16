import React from "react";

const FlowDiagram = ({ darkMode }) => {
  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Implementation Flow Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-green">
          Implementation Flow
        </h2>
        <div className="flex justify-center">
          <img
            src="financialAnalysisProject/flowchart.png"
            alt="Implementation Flowchart"
            className="w-full h-auto max-w-4xl"
          />
        </div>
      </section>
    </div>
  );
};

export default FlowDiagram;
