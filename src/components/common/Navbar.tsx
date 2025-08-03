import LogoImg from "../../assets/images/svg/logo.svg";
import ThemeOption from "../ThemeOption";

const Navbar = () => {
  return (
    <>
      <header className="cursor-pointer max-w-[1140px] mx-auto sticky top-4 z-30 w-full bg-[rgba(255,255,255,0.20)] rounded-3xl border-white border p-4 backdrop-blur-md transition-all duration-200 ease-in-out">
        <div className="max-w-[1141px] w-full flex items-center justify-between lg:gap-[253px] mx-auto">
          <a className="font-redRose font-bold text-4xl text-primary" href="/">
            Hipster
          </a>
          <div className="sm:flex gap-3 sm:gap-4  md:gap-6 hidden">
            <button className="relative after:h-[4px] after:bg-primary after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:rounded-2xl after:absolute after:w-[70%] text-black font-normal sm:font-medium hover:text-primary cursor-pointer text-sm md:text-base duration-300 ease-in transition-all">
              Home
            </button>
            <button className="relative text-black font-normal sm:font-medium hover:text-primary cursor-pointer text-sm md:text-base duration-300 ease-in transition-all">
              About
            </button>
            <button className="relative text-black font-normal sm:font-medium hover:text-primary cursor-pointer text-sm md:text-base duration-300 ease-in transition-all">
              Our Mission
            </button>
            <button className="relative text-black font-normal sm:font-medium hover:text-primary cursor-pointer text-sm md:text-base duration-300 ease-in transition-all">
              Freelance
            </button>
          </div>

          <button className="sm:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="black"
                d="M2 4h20v2H2zM2 11h20v2H2zM2 18h20v2H2z"
              ></path>
            </svg>
          </button>
          <ThemeOption />
        </div>
      </header>
    </>
  );
};

export default Navbar;
