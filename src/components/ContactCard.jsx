import Link from "next/link";

const ContactCard = ({ href, icon, text, target, rel }) => {
  return (
    <Link
      rel={rel ? rel : ""}
      target={target ? target : ""}
      className="flex justify-between bg-[#F2F1F1] px-4 py-4 rounded-md"
      href={href}
    >
      <span>{text}</span>
      <span className="text-[30px]">{icon}</span>
    </Link>
  );
};
export default ContactCard;
