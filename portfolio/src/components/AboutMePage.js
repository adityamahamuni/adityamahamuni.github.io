import React from "react";
import { Link } from "react-router-dom";
import ResumeSection from "./ResumeSection";
import Breadcrumbs from "./BreadcrumbsSection";

const AboutMePage = ({ darkMode }) => {
  return (
    <section className="my-2">
      <div className="container mx-auto px-4 max-w-full lg:max-w-5xl">
        <Breadcrumbs path="About" />
        <h2 className="text-3xl font-bold">About Me</h2>
        <ResumeSection />
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">
            🌟 Professional Work Experience Overview{" "}
          </h3>
          <p className="mt-4">
            Hello and welcome! I'm <strong>Aditya Mahamuni</strong>, a Machine
            Learning Engineer at <strong>NatWest Group</strong>, specializing in Machine Learning, Natural Language
            Processing, and Software Engineering. Over the past 4+ years, my
            professional journey has taken me across various domains and
            industries, from developing scalable frameworks at{" "}
            <strong>Nvidia Corporation</strong> to pursuing a{" "}
            <strong>MSc in Computer Science</strong> from the University of
            Warwick and currently working at NatWest.
          </p>

          <ul className="list-disc mt-4 pl-8">
            <li>
              <strong>
                Machine Learning Engineer at NatWest Group (Dec 2024 – Current)
              </strong>
            </li>
          </ul>

          <ul className="list-disc mt-4 pl-8">
            <li>
              <strong>
                Software Developer at Nvidia Corporation (July 2019 – Aug 2023):
              </strong>
              <ul className="list-disc mt-2 pl-8">
                <li>Designed a scalable Python framework for AV simulation.</li>
                <li>
                  Optimized CI/CD pipelines with Python, Docker, and Gitlab CI.
                </li>
                <li>
                  Developed ML tools and pipelines using PyTorch/TensorFlow.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">
            🎓 Academic Background
          </h3>
          <ul className="list-disc mt-4 pl-8">
            <li>
              MSc in Computer Science from the{" "}
              <a href="https://warwick.ac.uk/" className="underline">
                <strong> University of Warwick </strong>
              </a>
              (Sept 2023 – Sept 2024)
            </li>
            <li>
              Bachelor of Engineering in Information Technology from{" "}
              <strong>Government College of Engineering, Aurangabad </strong>{" "}
              (July 2015 – May 2019)
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">
            {" "}
            Beyond the Workspace
          </h3>
          <ul className="list-disc mt-4 pl-8">
            <li>
              <strong>Blogger at Medium (2020 – Current):</strong> Sharing
              insights on AI, ML, and NLP.
            </li>
            <li>
              <strong>Travel Enthusiast:</strong> Documenting my journeys on{" "}
              <a
                href="https://www.instagram.com/explore.beyondborders?igsh=ajMxcjB4bmFrbXk1&utm_source=qr"
                className="underline"
              >
                Instagram.
              </a>
            </li>
            <li>
              <strong>Language Learner:</strong> Currently learning German to
              expand my linguistic horizons.
            </li>
            <li>
              <strong>Avid Reader:</strong> Passionate about exploring new
              worlds through books.
            </li>
            <li>
              <strong>Formula 1 Fanatic:</strong> Always up for chatting about
              F1 and would always keep up with the races. Huge fan of Lewis
              Hamilton and Ferrari.
            </li>
            <li>
              <strong>Aspiring Photographer:</strong> Learning photography to
              capture moments and tell stories through images.
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">
            {" "}
            Let’s Connect!
          </h3>
          <p className="mt-4">
            Feel free to connect with me on{" "}
            <a
              href="https://linkedin.com/in/adi-mahamuni"
              className="underline"
            >
              LinkedIn
            </a>{" "}
            or email me at{" "}
            <a href="mailto:aditya.mahamuni157@gmail.com" className="underline">
              aditya.mahamuni157@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
