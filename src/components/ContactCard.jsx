import Link from "next/link";

const ContactCard = ({ href, icon, text, target, rel }) => {
  return (
    <Link
      rel={rel ? rel : ""}
      target={target ? target : ""}
      className="flex justify-between bg-[#F2F1F1] px-5 md:px-2 py-3 md:py-2 rounded-md"
      href={href}
    >
      <span className="md:text-xs">{text}</span>
      <span className="text-[25px] md:text-[20px]">{icon}</span>
    </Link>
  );
};
export default ContactCard;
