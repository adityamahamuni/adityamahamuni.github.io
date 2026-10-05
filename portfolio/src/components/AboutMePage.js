import React from "react";
import profile from "../data/profile.json";
import ResumeSection from "./ResumeSection";
import Breadcrumbs from "./BreadcrumbsSection";

const AboutMePage = ({ darkMode }) => {
  return (
    <section className="my-2">
      <div className="container mx-auto px-4 max-w-full lg:max-w-5xl">
        <Breadcrumbs path="About" />
        <h2 className="text-3xl font-bold">About Me</h2>
        <ResumeSection darkMode={darkMode} />
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">Professional experience</h3>
          <p className="mt-4">{profile.summary}</p>
          {profile.roles.map(role => (
            <article key={role.company} className="mt-8">
              <h4 className="text-xl font-semibold">{role.title} · {role.company}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{role.location} | {role.dates}</p>
              <ul className="list-disc mt-4 pl-6 space-y-2">{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black dark:text-green-400">Technical skills</h3>
          <dl className="mt-4 space-y-4">{Object.entries(profile.skills).map(([name, skills]) => (
            <div key={name}><dt className="font-semibold">{name}</dt><dd className="mt-1 text-gray-700 dark:text-gray-300">{skills}</dd></div>
          ))}</dl>
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
