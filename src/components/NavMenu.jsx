import Links from "./Links";
import Book from "./Book";

const NavMenu = ({ setIsOpen, isOpen }) => {
  return (
    <div
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        height: isOpen ? "220px" : "0",
        transition: "all 500ms ease",
      }}
      className="hamburger-menu px-3 md:hidden overflow-hidden text-black absolute w-full rounded-b-md  bg-[#F5F5F5F5] h-[200px] top-[80px]"
    >
      <Links
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        className={"flex flex-col gap-3 text-[18px] pt-2"}
      />
      <Book
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        className={"justify-center mt-3 w-full"}
      />
    </div>
  );
};
export default NavMenu;
