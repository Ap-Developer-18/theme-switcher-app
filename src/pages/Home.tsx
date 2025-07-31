// src/pages/Home.tsx
import React from "react";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Multi-Theme Switcher App
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          This app lets you explore different themes, layouts, and styles by
          switching themes in real-time.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">
          Explore Now
        </button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <Card key={id} id={id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
