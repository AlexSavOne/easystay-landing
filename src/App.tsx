// src/App.tsx

import React from "react";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Destinations from "./sections/Destinations";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import "antd/dist/reset.css";
import "./styles/variables.less";
import "./styles/typography.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/backgrounds.css";

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
