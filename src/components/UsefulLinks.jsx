import { links } from "@/app/lib/data";

const UsefulLinks = () => {
  const handleClick = (event, link) => {
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
  };
  return (
    <article>
      <h4 className="text-white text-base md:text-lg md:font-semibold mb-3">
        Useful Links
      </h4>
      <div className="sections flex flex-col gap-2">
        {links.map((section) => {
          return (
            <a
              key={section.name}
              className="text-xs md:text-base text-[#A8A8A8] cursor-pointer font-thin"
              onClick={(e) => {
                handleClick(e, section.name);
              }}
            >
              {section.name}
            </a>
          );
        })}
      </div>
    </article>
  );
};
export default UsefulLinks;
