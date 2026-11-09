import React from "react";

const AboutMe = ({ darkMode }) => {
  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {" "}
      <div className="container mx-auto text-left px-4 md:px-0">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-600 dark:text-green-400 mb-4">Applied AI Engineer · London, UK</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Building reliable GenAI<br className="hidden md:block" /> and agentic systems.</h1>
        <p className="text-base md:text-lg mb-4">
          I'm Aditya Mahamuni, a Machine Learning Engineer at NatWest focused on applied AI,
          with a strong foundation in Python and software engineering.
        </p>
        <p className="text-base md:text-lg mb-6">
          My current focus is evaluating LLMs and AI agents. I build evaluation workflows and
          synthetic-data pipelines to assess outputs, retrieval, tool use, and failure modes.
          Using evaluation frameworks and observability tools, I investigate regressions and
          support adversarial testing to help teams iterate on reliable AI systems.
        </p>
        <p className="text-base md:text-lg mb-6">
          Previously at NVIDIA, I built autonomous vehicle simulation tools, automated testing frameworks,
          and CI/CD pipelines. I hold an MSc in Computer Science from the University of Warwick.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/about" className="inline-block px-5 py-3 bg-black text-white dark:bg-green-400 dark:text-black rounded-md font-semibold">Experience &amp; skills</a>
          <a href="/Resume_Aditya_Mahamuni.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-3 border border-current rounded-md font-semibold">Download resume</a>
        </div>
        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          <a
            aria-label="GitHub" href="https://github.com/adityamahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl dark:text-white text-black"></i>
          </a>
          <a
            aria-label="LinkedIn" href="https://linkedin.com/in/adi-mahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl dark:text-white text-black"></i>
          </a>
          <a aria-label="Email" href="mailto:aditya.mahamuni157@gmail.com">
            <i className="fas fa-envelope text-2xl dark:text-white text-black"></i>
          </a>
          <a
            aria-label="Medium" href="https://medium.com/@adimahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium text-2xl hover:text-gray-300"></i>
          </a>
        </div>

        {/* Horizontal line */}
        <div className="border-b border-black dark:border-green-500"></div>
      </div>
    </section>
  );
};

export default AboutMe;
