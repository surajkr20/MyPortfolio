// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from './pages/contact/Contactx'

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
