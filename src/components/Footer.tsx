import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white pt-8 pb-4">
      {/* Empat Kolom */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Kolom 1: Tentang Muve Label */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Muve Label</h3>
          <p className="text-sm mb-4">
            Muve Label adalah agency/platform entertainment yang menghadirkan
            idol group, dance cover, dan event organizer bertema budaya Jepang
            dan Korea untuk para penggemar pop culture.
          </p>
          <Link
            to="/about-us"
            className="text-sm text-gray-400 hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/content/mochi-idol" className="hover:text-gray-400">
                Mochi Idol
              </Link>
            </li>
            <li>
              <Link to="/content/btod" className="hover:text-gray-400">
                BTOD
              </Link>
            </li>
            <li>
              <Link
                to="/content/event-organizer"
                className="hover:text-gray-400"
              >
                Event Organizer
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                Berita & Blog
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400">
                Hubungi Kami
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Ikuti Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Jangan lewatkan update terbaru dari kami!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              TikTok
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Kolom 4: Hubungi Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:email@muvelabel.com">email@muvelabel.com</a>
          </p>
          <p className="text-sm mb-4">
            WhatsApp:{" "}
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
            >
              +123456789
            </a>
          </p>
          <Link
            to="/contact-us"
            className="inline-block mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Kirim Pesan
          </Link>
        </div>
      </div>

      {/* Baris Bawah */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
        <p>© 2025 Muve Label. All Rights Reserved.</p>
        <p className="mt-2">Designed by Moch. Fauzi Dwi R.</p>
      </div>
    </footer>
  );
};

export default Footer;
