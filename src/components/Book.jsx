import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { useToggle } from "./contexts/toggleContexts";

const Book = ({ className }) => {
  const { openSheet, setOpenSheet } = useToggle();
  return (
    <Link
      onClick={() => {
        setOpenSheet(true);
      }}
      href="#"
      className={twMerge(
        "book text-white rounded-md flex gap-2 items-center bg-[#292929] p-2",
        className
      )}
    >
      Book an intro call <MdArrowOutward />
    </Link>
  );
};
export default Book;
