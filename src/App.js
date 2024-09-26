import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import HomePage from "./Page/HomePage";
import ServicesPage from "./Page/ServicesPage";
import ContactPage from "./Page/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full bg-gradient-to-r from-[#121212] to-[#10204d] overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/company" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
