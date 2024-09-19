import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import AboutMePage from "./components/AboutMePage";
import Certifications from "./components/Certifications";
import ProjectsPage from "./components/ProjectsPage";
import BackToTop from "./components/BackToTop";
import { initializeAnalytics, logPageView } from './analytics'; // Import your analytics functions

import FinancialAnalysisPage from "./blogs/FinancialAnalysis/FinancialAnalysisPage";
import EventExtractionPage from "./blogs/EventExtraction/EventExtractionPage";


// Component to log page views on route change
const AnalyticsWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  // Toggle dark mode
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  };

  // Update the dark mode class on the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Initialize Google Analytics when the app is first loaded
  useEffect(() => {
    initializeAnalytics(); // Initialize analytics
  }, []);

  return (
    <Router>
      <AnalyticsWrapper />
      <div className={darkMode ? "dark" : ""}>
        <div
          className={`transition-colors duration-300 bg-white dark:bg-[#1A202C] dark:text-white text-black`}
        >
          <Header onThemeSwitch={handleThemeSwitch} darkMode={darkMode} />

          {/* Page content */}
          <div className="container mx-auto px-4 max-w-5xl min-h-screen">
            <Routes>
              {/* Home page route */}
              <Route
                path="/"
                element={
                  <>
                    <AboutMe darkMode={darkMode} />
                    <FeaturedProjects darkMode={darkMode} />
                  </>
                }
              />
              {/* About Me page route */}
              <Route
                path="/about"
                element={<AboutMePage darkMode={darkMode} />}
              />
              {/* Certifications page route */}
              <Route
                path="/certifications"
                element={<Certifications darkMode={darkMode} />}
              />
              {/* Projects page route */}
              <Route
                path="/projects"
                element={<ProjectsPage darkMode={darkMode} />}
              />
              <Route path="/financial-analysis" element={<FinancialAnalysisPage darkMode={darkMode} />} />
              <Route path="/event-extraction" element={<EventExtractionPage darkMode={darkMode} />} />

            </Routes>
          </div>
          <BackToTop />
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;
