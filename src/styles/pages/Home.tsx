import HeroBanner from "../../components/HeroBanner"; // Pastikan path sesuai dengan lokasi HeroBanner
import HighlightContent from "../../components/Highlight";

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <HighlightContent />
    </>
  );
};

export default Home;
