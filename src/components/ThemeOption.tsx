import { Sun, Moon, Palette } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeOption = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "colorfull">("light");
  const [open, setOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as
      | "light"
      | "dark"
      | "colorfull"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  const applyTheme = (selectedTheme: "light" | "dark" | "colorfull") => {
    document.body.setAttribute("data-theme", selectedTheme);
    setTheme(selectedTheme);
    localStorage.setItem("app-theme", selectedTheme);
    setOpen(false);
  };

  const getIcon = (t: typeof theme) => {
    switch (t) {
      case "light":
        return <Sun className="w-5 h-5 text-primary" />;
      case "dark":
        return <Moon className="w-5 h-5 text-primary" />;
      case "colorfull":
        return <Palette className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button onClick={() => setOpen((prev) => !prev)}>
        <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
          <div className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-md active:scale-[0.98] transition-all">
            <div className="bg-gradient-to-b from-stone-200/40 to-white/65 rounded-[8px] px-2 py-2">
              <div className="flex gap-2 items-center">
                <span className="font-semibold">{getIcon(theme)}</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${
          open ? "opacity-100 z-50" : "opacity-0 -z-10"
        } absolute top-14 right-0 bg-primary rounded-xl p-3 flex gap-3 justify-around items-center transition-all duration-300 shadow-2xl`}
      >
        {(["light", "dark", "colorfull"] as const).map((option) => (
          <button
            key={option}
            onClick={() => applyTheme(option)}
            className={`p-2 rounded-full hover:bg-gray-200 transition-all ${
              theme === option
                ? "bg-white"
                : "w-full bg-[rgba(255,255,255,0.20)] rounded-3xl p-2  hover:-translate-y-1.5 cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md"
            }`}
          >
            {getIcon(option)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeOption;
