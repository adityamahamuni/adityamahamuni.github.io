import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import AboutMePage from "./components/AboutMePage";
import Certifications from "./components/Certifications";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to dark mode

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

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div
          className={`transition-colors duration-300 bg-white dark:bg-[#1A202C] dark:text-white text-black`}
        >
          <Header onThemeSwitch={handleThemeSwitch} darkMode={darkMode} />
          <div className="container mx-auto px-4 max-w-5xl">
            <Routes>
              {/* Home page route */}
              <Route
                path="/"
                element={
                  <>
                    <AboutMe darkMode={darkMode} />
                    <FeaturedProjects darkMode={darkMode} />
                    <Footer darkMode={darkMode} />
                  </>
                }
              />
              {/* About Me page route */}
              <Route
                path="/about"
                element={<AboutMePage darkMode={darkMode} />}
              />
              <Route
                path="/certifications"
                element={<Certifications darkMode={darkMode} />}
              />
              <Route
                path="/projects"
                element={<ProjectsPage darkMode={darkMode} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;