import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcrumbs = ({ path }) => {
  return (
    <nav className="breadcrumb mb-6 text-gray-500 flex items-center">
      <Link
        to="/"
        className="hover:text-blue-500 transition-colors duration-300 flex items-center"
      >
        <FaHome className="inline-block mr-2" /> {/* Home Icon */}
        <span>Home</span>
      </Link>

      <FaChevronRight className="mx-2 text-gray-400" aria-hidden="true" />

      <span className="text-gray-700">{path}</span>
    </nav>
  );
};

export default Breadcrumbs;
