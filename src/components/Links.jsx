import { links } from "@/app/lib/data";
import { twMerge } from "tailwind-merge";
import LinkItem from "./LinkItem";

const Links = ({ isOpen, setIsOpen, className }) => {
  return (
    <div
      className={twMerge("hidden md:flex gap-8 justify-between ", className)}
    >
      {links.map((link) => {
        return (
          <LinkItem
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            key={link.name}
            link={link.name}
          />
        );
      })}
    </div>
  );
};
export default Links;
