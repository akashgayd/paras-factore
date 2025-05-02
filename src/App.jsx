import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componant/Home/home";
import ContactForm from "./componant/pages/contact_us/contact";
import MainAbout from "./componant/pages/about/About";
import Services from "./componant/pages/servieces/servies";
import ScrollToTop from "./ScrollToTop"; // 👈 import the new component

const App = () => {
  return (
    <>
      <ScrollToTop /> {/* 👈 Add this */}
      <Routes>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
