import React from "react";
import Logo1 from "../assets/svg/logo-muve.svg";
import Logo2 from "../assets/svg/page-icon.svg";
import HighlightCard from "./HighlightCard";

interface Highlight {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const HighlightContent: React.FC = () => {
  const highlights: Highlight[] = [
    {
      id: 1,
      title: "Mochi Idol",
      description:
        "A rising star in the idol world, Mochi Idol combines music and charisma to captivate audiences with every performance.",
      images: [Logo1, Logo2, "https://via.placeholder.com/160/aaaaaa"],
    },
    {
      id: 2,
      title: "Born To Dance",
      description:
        "Born To Dance (BTOD) is a Dance Cover Agency. BTOD brings iconic performances to life, celebrating K-pop and beyond. Their precision and passion inspire fans worldwide.",
      images: [Logo1, Logo2, "https://via.placeholder.com/160/ccffcc"],
    },
    {
      id: 3,
      title: "Upcoming Events",
      description:
        "Join our events featuring spectacular performances, engaging activities, and unforgettable moments.",
      images: [Logo1, Logo2, "https://via.placeholder.com/160/ffccff"],
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-300">
          Discover Our Highlights
        </h2>
        <p className="text-lg text-center text-white mt-4">
          Explore the creativity and passion we bring to every performance and
          project.
        </p>

        {/* Content Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.id} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightContent;
