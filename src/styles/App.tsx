import { RouterProvider } from "react-router-dom";
import router from "./router"; // Impor router yang telah Anda buat

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Menyediakan router ke aplikasi */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
