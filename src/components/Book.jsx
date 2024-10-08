import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { useToggle } from "./contexts/toggleContexts";

const Book = ({ isOpen, setIsOpen, className, ...restProps }) => {
  const { openSheet, setOpenSheet } = useToggle();
  return (
    <button
      {...restProps}
      onClick={() => {
        setOpenSheet(true);
        if (isOpen && setIsOpen) {
          setIsOpen(false);
        }
      }}
      className={twMerge(
        "book text-white rounded-md flex gap-2 items-center bg-[#292929] p-2",
        className
      )}
    >
      Book an intro call <MdArrowOutward />
    </button>
  );
};
export default Book;
