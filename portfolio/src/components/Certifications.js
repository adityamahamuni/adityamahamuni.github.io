import React from "react";
import { Link } from "react-router-dom";

const certifications = [
  {
    title: "Neural Networks and Deep Learning by DeepLearning.AI",
    provider: "Coursera (by Andrew Ng)",
    date: "Completed in Sept 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/ELCEW7V7JKG2",
  },
  {
    title:
      "Supervised Machine Learning: Regression and Classification by DeepLearning.AI",
    provider: "Coursera (by Stanford University)",
    date: "Completed in Dec 2022",
    link: "https://coursera.org/share/d68986b68dfcdbab9821e05c864864d4",
  },
  {
    title:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning by DeepLearning.AI",
    provider: "Coursera",
    date: "Completed in June 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/8EHN6CEZDSDE",
  },
  {
    title:
      "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization by DeepLearning.AI",
    provider: "Coursera",
    date: "Completed in Sept 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/P6BT6JHYBCXF",
  },
  {
    title: "Structuring Machine Learning Projects by DeepLearning.AI",
    provider: "Coursera",
    date: "Completed in Sept 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/57ZQRB4J2CLA",
  },
];

const Certifications = ({ darkMode }) => {
  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Breadcrumb */}
      <div className="text-lg mb-4">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300 underline"
        >
          Home
        </Link>
        <span className="mx-2">{">>"}</span>
        <span>Certifications</span>
      </div>

      <div className="container mx-auto px-4 md:px-0 max-w-full lg:max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-black dark:border-green-500 pb-4 mb-8">
          Certifications
        </h2>
        <ul className="list-none">
          {certifications.map((cert, index) => (
            <li key={index} className="mb-6">
              <h3 className="text-2xl font-semibold">{cert.title}</h3>
              <p className="text-lg">{cert.provider}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
