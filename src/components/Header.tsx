// src/components/Header.tsx
import React from "react";
import ThemeDropdown from "./ThemeDropdown";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 theme3:bg-black right-0 dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Theme App</h1>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
          <ThemeDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Header;
