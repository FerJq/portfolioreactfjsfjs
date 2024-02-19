import React from "react";
//Components
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Pages from "./components/Pages.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
//Utilities
import { Routes, Route } from "react-router-dom";

//Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
