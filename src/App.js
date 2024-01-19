import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//Components
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Pages from "./components/Pages.js";
import Footer from "./components/Footer.js";

//Styles
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location}>
        <Route path="/" exact element={<Profile />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/pages" exact element={<Pages />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
