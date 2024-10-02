"use client";
import { sectionsName } from "@/app/lib/data";
import { twMerge } from "tailwind-merge";
import { useToggle } from "./contexts/toggleContexts";

const OurServices = ({ className }) => {
  const { current, setCurrent } = useToggle();
  const handleClick = (event) => {
    event.preventDefault();

    const section = document.getElementById("Portfolio");
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
  };
  return (
    <div className={twMerge("flex flex-col text-white", className)}>
      <h4 className="text-white text-base md:text-lg mb-2 md:font-semibold">
        Our Services
      </h4>
      <div className="sections flex flex-col gap-2">
        {sectionsName.map((section) => {
          return (
            <a
              key={section.name}
              className="text-xs cursor-pointer text-[#A8A8A8] md:text-base font-thin"
              onClick={(e) => {
                // TODOs
                // scroll to the section for showcase
                // set the current
                setCurrent(section.name);

                handleClick(e);
              }}
            >
              {section.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default OurServices;
