import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/svg/logo-muve.svg";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref untuk dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Tutup dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Label */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Muve Label Logo"
            className="h-14 w-14 object-fill"
          />
          <div className="text-2xl font-bold ml-3">Muve Label</div>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-gray-400">
            About Us
          </Link>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-400 focus:outline-none"
            >
              Content
            </button>

            {/* Dropdown Items */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20 overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Mochi Idol
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                BTOD
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Event Organizer
              </Link>
            </div>
          </div>
          <Link to="#" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link to="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            About Us
          </Link>
          <button
            onClick={toggleDropdown}
            className="block w-full text-left hover:text-gray-400"
          >
            Content
          </button>
          {isDropdownOpen && (
            <div className="ml-4 space-y-2">
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Mochi Idol
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                BTOD
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Event Organizer
              </Link>
            </div>
          )}
          <Link to="#" className="block hover:text-gray-400">
            Organizational Structure
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
