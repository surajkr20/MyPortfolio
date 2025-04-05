// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contactx";
// import BackGroundPattern from './components/BackGroundPattern.jsx'

import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Project/Projectx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
