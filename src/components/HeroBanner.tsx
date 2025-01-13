import { Link } from "react-router-dom";
import HeroImage from "../assets/img/hero-banner.webp";

const HeroBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto w-full md:h-1/2 lg:h-screen text-sans"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6 md:px-12 py-6 md:py-12">
        <h1 className="text-lg md:text-6xl font-extrabold tracking-wide leading-tight">
          Welcome to{" "}
          <span className="text-gray-400 text-lg md:text-6xl">Muve Label</span>
        </h1>
        <p className="mt-4 text-sm md:text-xl max-w-xl">
          Where Creativity Meets Entertainment. Explore our world of music,
          events, and talent management.
        </p>
        <div className="mt-4 md:mt-6 gap-4 flex items-center w-full max-w-48 md:max-w-lg">
          <Link
            to="#"
            className="px-2 md:px6 py-2 md:py-3 bg-gray-400 text-white font-semibold text-xs md:text-lg rounded-md shadow-lg hover:bg-gray-500 transition-all w-full text-center"
          >
            Learn More
          </Link>
          <Link
            to="/#"
            className="px-2 md:px-6 py-2 md:py-3 bg-white text-black font-semibold text-xs md:text-lg rounded-md shadow-lg hover:bg-gray-200 transition-all w-full text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
