"use client";
import Link from "next/link";

const LinkItem = ({ setIsOpen, isOpen, link }) => {
  const handleClick = (event) => {
    event.preventDefault();

    const section = document.getElementById(link);
    if (section) {
      const navbarHeight = 80; // Adjust this if your navbar height changes
      const offsetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      if (typeof window !== "undefined") {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    if (setIsOpen && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Link onClick={handleClick} className="text-[#292929]" href={`#${link}`}>
      {link}
    </Link>
  );
};

export default LinkItem;
