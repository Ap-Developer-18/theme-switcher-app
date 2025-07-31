import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "light" | "dark" | "colorfull");
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="border rounded px-2 py-1 light:bg-black colorfull:bg-gradient dark:bg-gray-800 dark:text-white"
    >
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="colorfull">colorfull</option>
    </select>
  );
};

export default ThemeDropdown;
