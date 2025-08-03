import HeroMobileImg from "../assets/images/webp/hero-img-mobile.webp";
import Navbar from "./common/Navbar";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden max-w-[1920px] mx-auto bg-lightblue">
        <Navbar />
        <div className="max-w-[1140px] mx-auto px-4 pt-2 pb-5 sm:pt-12 md:pt-16 xl:pt-28 xl:pb-20">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 sm:gap-5 md:gap-10 xl:gap-0">
            <div className="relative max-w-[650px] order-2 xl:order-1">
              <h1 className="relative text-center xl:text-start text-[52px] lg:text-[98.768px] font-redRose font-bold leading-[118%] uppercase text-secondary">
                <span className="relative z-10">welcome to hipster</span>
                <div className="size-[150px] bg-primary rounded-full hidden lg:block absolute -top-14 -left-10 z-1"></div>
              </h1>
              <p className="text-[19.028px] leading-[130%] md:leading-[156.25%] text-black font-prompt pt-2 text-center xl:text-start max-w-[450px] mx-auto xl:mx-0 w-full">
                Experience diversity, innovation, and excellence across our
                dynamic portfolio.
              </p>
              <div className="flex items-center justify-center  xl:justify-start gap-4 pt-5">
                <button className="px-4 sm:px-6 py-2.5 2xl:py-3 rounded-[14px] bg-primary text-nowrap  text-white font-bold font-prompt flex justify-center  items-center hover:bg-transparent border border-primary hover:text-primary duration-200 transition-all ease-in gap-3 text-base md:text-lg  group">
                  Get Started
                  <span>
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.90065 0.912938L7.29398 5.30626C7.45123 5.46319 7.57598 5.64959 7.6611 5.85479C7.74622 6.05999 7.79004 6.27997 7.79004 6.50213C7.79004 6.72428 7.74622 6.94426 7.6611 7.14946C7.57598 7.35466 7.45123 7.54106 7.29398 7.69799L2.90065 12.0913C1.83201 13.16 4.3869e-05 12.3966 4.3869e-05 10.887V2.10032C4.3869e-05 0.590647 1.83201 -0.155708 2.90065 0.912938Z"
                        fill="white "
                        className="group-hover:fill-primary duration-200 ease-in transition-all"
                      ></path>
                    </svg>
                  </span>
                </button>
                <button className="px-4 sm:px-6 py-2.5 2xl:py-3 rounded-[14px] border border-primary font-prompt text-primary text-base hover:bg-primary hover:text-white  duration-200 ease-in transition-all md:text-lg undefined">
                  View More
                </button>
              </div>
              <div className="pt-12 flex flex-col items-center xl:items-start ">
                {/* <img className="max-w-[198px] " src="/images/group-profile-img.png" alt=""> */}
                <p className="paragraph pt-3 text-center xl:text-start">
                  Choose Xinate for a world of possibilities.
                </p>
              </div>
            </div>
            <div className="max-w-[500px] w-full order-1 xl:order-2 block xl:hidden">
              <img src={HeroMobileImg} alt="hero image" className="" />
            </div>
            <div
              className="-right-[15%] max-2xl:-right-[30%] -top-16 max-2xl:-top-[142px] z-1 rounded-full hidden xl:block absolute h-[937px] w-[937px]"
              style={{ background: "var(--color-backgroundImage)" }}
            >
              {/* Right Content */}
              <h1 className="absolute text-[6rem] font-bold rotate-90 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-redRose outlined-text opacity-30">
                HIPSTER
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-3">
            <span className="cursor-pointer">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.379518"
                  y="0.379518"
                  width="23.241"
                  height="44.241"
                  rx="11.6205"
                  className="stroke-black"
                  stroke-width="0.759036"
                ></rect>
                <path
                  d="M12.5 11C12.5 10.7239 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.7239 11.5 11L12.5 11ZM11.6464 35.3536C11.8417 35.5488 12.1583 35.5488 12.3536 35.3536L15.5355 32.1716C15.7308 31.9763 15.7308 31.6597 15.5355 31.4645C15.3403 31.2692 15.0237 31.2692 14.8284 31.4645L12 34.2929L9.17157 31.4645C8.97631 31.2692 8.65973 31.2692 8.46447 31.4645C8.2692 31.6597 8.2692 31.9763 8.46447 32.1716L11.6464 35.3536ZM11.5 11L11.5 35L12.5 35L12.5 11L11.5 11Z"
                  className="fill-black"
                ></path>
              </svg>
            </span>
            <p className="text-[14px] text-secondary font-prompt leading-[156.25%] pt-2">
              Scroll Down
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
