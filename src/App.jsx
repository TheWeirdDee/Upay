import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Howitworks from "./Pages/Howitworks/Howitworks";
// import Services from "./Pages/OurServices/Services";
// import Contact from "./Pages/Contact/Contact";
// import Error from "./Pages/Error/Error";
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="howitworks" element={<Howitworks />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
