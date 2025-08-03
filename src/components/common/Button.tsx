interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => {
  return (
    <>
      <button className="px-4 sm:px-6 py-2.5 2xl:py-3 rounded-[14px] bg-primary text-nowrap  text-white font-bold font-prompt flex justify-center  items-center hover:bg-transparent border border-primary hover:text-primary duration-200 transition-all ease-in gap-3 text-base md:text-lg  group">
        {content}
      </button>
    </>
  );
};

export default Button;
