import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <>
      <div className="">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default App;
