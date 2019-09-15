import React from "react";
import Navbar from "../../components/Navbar";
import BottomCta from "../../components/BottomCta";
import Hero from "./Hero";
import SectionsContainer from "./SectionsContainer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <BottomCta />
        <Hero />
        <SectionsContainer />
      </Router>
    </div>
  );
};

export default App;
