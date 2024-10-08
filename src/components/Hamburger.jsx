const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => {
        setIsOpen((prev) => !prev);
        console.log(isOpen);
      }}
      className="hamburger md:hidden relative w-6 h-8 flex flex-col justify-center items-center cursor-pointer"
    >
      <span
        className={`block bg-black my-2 h-[2px] w-full transition-transform duration-500 ease-in-out ${
          isOpen ? "rotate-45 translate-y-[7px]" : "translate-y-0"
        }`}
      ></span>
      <span
        className={`block my-1 bg-black h-[2px] w-full transition-transform duration-500 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : "opacity-100"
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
