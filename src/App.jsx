import "./index.css";
// import SparklesAnimation from "./components/SparklesAnimation";
// import ImageCarousel from "./components/ImageCarousel";
// import ThreeDSection from "./components/ThreeDSection";
// import ShowsCountries from "./components/ShowsCountries";
// import FadeInSection from "./components/FadeInSection";
// import HeroSection from "./components/HeroSection";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Corporate from "./pages/Corporate";
import Festivals from "./pages/Festivals";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/productions" element={<Contact />} />
            <Route path="/circusschool" element={<Corporate />} />
            <Route path="/ourstudio" element={<Festivals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
