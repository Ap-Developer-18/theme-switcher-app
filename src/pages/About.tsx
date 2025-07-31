// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This application demonstrates a multi-theme architecture using React,
          TypeScript, and Tailwind CSS. It's designed to showcase different
          layout and styling experiences through switchable themes.
        </p>
      </div>
    </section>
  );
};

export default About;
