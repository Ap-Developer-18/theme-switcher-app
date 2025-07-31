// src/components/Card.tsx
import React from "react";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border rounded-xl shadow-md p-4 transition-all">
      <h3 className="text-xl font-semibold mb-2">Card Title {id}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        This is a sample card description to demonstrate theming and layout.
      </p>
    </div>
  );
};

export default Card;