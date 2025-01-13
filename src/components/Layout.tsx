import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradientStart to-gradientEnd text-white">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
