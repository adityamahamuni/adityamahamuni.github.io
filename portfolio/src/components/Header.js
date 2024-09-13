import { Link, useLocation } from "react-router-dom";

const Header = ({ darkMode, onThemeSwitch }) => {
  const location = useLocation(); // Get current location
  const breadcrumbs = location.pathname === "/about" ? "Home >> About" : "";

  return (
    <header className="flex justify-between items-center py-4 px-4 max-w-5xl mx-auto border-b-2 border-black dark:border-green-500 mb-0">
      <h1 className="text-3xl font-bold">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Aditya Mahamuni
        </Link>
      </h1>

      <nav className="flex items-center space-x-6 text-lg font-bold">
        <Link
          to="/about"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          to="/certifications"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Certifications
        </Link>
        <button
          onClick={onThemeSwitch}
          className="p-2 rounded-md transition-colors duration-300 border-2 border-transparent hover:border-blue-500"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Breadcrumbs */}
      {/* {breadcrumbs && (
        <div className="mt-4">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <span> » About</span>
        </div>
      )} */}
    </header>
  );
};

export default Header;
