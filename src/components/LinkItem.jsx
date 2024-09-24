import Link from "next/link";

const LinkItem = ({ link }) => {
  return (
    <Link className="text-[#292929]" href="#">
      {link}
    </Link>
  );
};
export default LinkItem;
