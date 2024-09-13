import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-6 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {" "}
      <div className="container mx-auto px-4 max-w-full lg:max-w-5xl flex justify-between items-center">
        {/* Copyright Section */}
        <p className="text-lg text-gray-400">
          © 2024 Aditya Mahamuni | All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/adityamahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl hover:text-gray-300"></i>
          </a>
          <a
            href="https://linkedin.com/in/adi-mahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl hover:text-gray-300"></i>
          </a>
          <a href="mailto:aditya.mahamuni157@gmail.com">
            <i className="fas fa-envelope text-2xl hover:text-gray-300"></i>
          </a>
          <a
            href="https://medium.com/@adimahamuni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium text-2xl hover:text-gray-300"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
