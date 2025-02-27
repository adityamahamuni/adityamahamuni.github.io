import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title:
      "Event Extraction from Financial Articles Using Natural Language Processing",
    date: "Jan 2024 - Sept 2024",
    description:
      "Developed and implemented NLP techniques for event extraction from financial articles, leveraging zero-shot and few-shot learning using generative capabilities of different LLM models.",
    link: "/event-extraction",
  },
  {
    title:
      "A Clustering and Regression Analysis of Financial Health and Stock Performance",
    date: "Dec 2023",
    description:
      "Enhanced risk assessment and decision-making for financial analysis by developing a Python-based financial analysis tool, achieving 99% accuracy.",
    link: "/financial-analysis",
  },
  {
    title: "Prediction of Protein Expression",
    date: "Feb 2024 - Mar 2024",
    description:
      "Built a prediction model utilizing image analysis to predict protein expression levels in various biological tissues, achieving an RMSE score of 0.677.",
    link: "https://github.com/adityamahamuni/DataMining/blob/main/Protein%20Expression%20Prediction/DataMining2024_assignment_2.ipynb",
  },
  {
    title: "Sentiment Classifier for Twitter Data",
    date: "Feb 2024 - Mar 2024",
    description:
      "Developed a sentiment classifier for Twitter data using NLP techniques, providing real-time insights from social media.",
    link: "https://github.com/adityamahamuni/NLP/blob/main/Sentiment%20Classifier%20for%20Twitter%20Data%20/sentiment_analysis_twitter_data.ipynb",
  },
];

const ProjectsPage = ({ darkMode }) => {
  return (
    <section
      className={`my-2 ${
        darkMode ? "bg-[#1A202C] text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 md:px-0 max-w-full lg:max-w-5xl">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-6 flex items-center text-gray-500">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <FaHome className="inline-block mr-2" /> {/* Home Icon */}
            <span>Home</span>
          </Link>
          <FaChevronRight className="mx-2 text-gray-400" aria-hidden="true" />
          <span className="text-gray-700">Projects</span>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-b-2 border-gray-300 pb-4">
              <h3 className="text-2xl font-semibold text-black dark:text-green-400">
                <Link to={project.link} className="hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
