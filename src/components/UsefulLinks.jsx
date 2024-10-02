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
      <h4 className="text-white tracking-wider text-xs md:text-sm md:font-semibold mb-[8px] md:mb-[12px]">
        Useful Links
      </h4>
      <div className="sections flex flex-col gap-3">
        {links.map((section) => {
          return (
            <a
              key={section.name}
              className="text-xs md:text-sm text-[#A8A8A8] cursor-pointer font-semi-bold"
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
