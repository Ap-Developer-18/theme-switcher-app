import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/common/Footer";
import OurMissions from "./components/OurMissions";

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <OurMissions />
      <Footer />
    </div>
  );
};

export default App;
