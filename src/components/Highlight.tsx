import { Link } from "react-router-dom";

const HighlightContent = () => {
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
          {/* Mochi Idol Highlight */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Mochi Idol"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Mochi Idol
              </h3>
              <p className="text-gray-600 mt-3">
                A rising star in the idol world, Mochi Idol combines music and
                charisma to captivate audiences with every performance.
              </p>
              <Link
                to="/mochi-idol"
                className="inline-block mt-4 px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-yellow-300 transition-all"
              >
                Get to Know Mochi Idol
              </Link>
            </div>
          </div>

          {/* BTOD Highlight */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="BTOD Performance"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                BTOD - Dance Cover Agency
              </h3>
              <p className="text-gray-600 mt-3">
                Bringing iconic performances to life, BTOD is a talented dance
                cover group that celebrates K-pop and beyond. Known for their
                precision, energy, and passion, they inspire fans worldwide.
              </p>
              <Link
                to="/btod"
                className="inline-block mt-4 px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-yellow-300 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Events Highlight */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Upcoming Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Upcoming Events
              </h3>
              <p className="text-gray-600 mt-3">
                Join us at our upcoming events featuring spectacular
                performances, engaging activities, and unforgettable moments.
              </p>
              <Link
                to="/events"
                className="inline-block mt-4 px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-yellow-300 transition-all"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightContent;
