import React from "react";

const ResumeSection = ({ darkMode }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-green-400">Resume</h2>
      <p className="text-lg italic mb-4">"Check out my resume here."</p>
      <a
        href="/Resume_Aditya_Mahamuni.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-6 py-2 border transition-colors duration-300
    ${
      darkMode
        ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        : "border-black text-black hover:bg-black hover:text-white"
    }`}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeSection;
