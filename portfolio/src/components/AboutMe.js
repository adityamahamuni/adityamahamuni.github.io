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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hello! <span className="inline-block">👋</span>
        </h1>
        <p className="text-base md:text-lg mb-4">
          I'm Aditya Mahamuni, an aspiring Machine Learning Engineer with over
          four years of Python experience, specializing in Machine Learning,
          Natural Language Processing, and Software Engineering.
        </p>
        <p className="text-base md:text-lg mb-6">
          My journey has taken me from developing innovative frameworks at
          NVIDIA to pursuing an MSc in Computer Science at the University of
          Warwick, where I delve into Data Mining, NLP, Machine Learning and
          High-Performance Computing. At the heart of my work lies a passion for
          bridging the gap between human intelligence and artificial ingenuity.
          Discover my projects and insights on my portfolio, or dive into my
          professional story through my resume.
        </p>
        <p className="text-base md:text-lg mb-8">
          When I'm not coding, you can find me exploring the latest tech trends,
          reading up on the latest research in AI, enjoying a good book,
          travelling or learning languages.
        </p>
        <p className="text-base md:text-lg mb-8">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me on LinkedIn or via email. <span>🚀</span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com/adityamahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl dark:text-white text-black"></i>
          </a>
          <a
            href="https://linkedin.com/in/adi-mahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl dark:text-white text-black"></i>
          </a>
          <a href="mailto:aditya.mahamuni157@gmail.com">
            <i className="fas fa-envelope text-2xl dark:text-white text-black"></i>
          </a>
          <a
            href="https://medium.com/@adimahamuni"
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
