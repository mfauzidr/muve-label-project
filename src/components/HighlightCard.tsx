import { useEffect, useState } from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  images: string[];
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  description,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Change image every 1 second

      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0); // Reset to the first image
  };

  return (
    <div
      className="text-center group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-md relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>

      {/* Description (hidden by default, shown on hover) */}
      <p className="p-2 rounded-xl text-gray-200 bg-gray-100 bg-opacity-10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  );
};

export default HighlightCard;
