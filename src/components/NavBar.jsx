"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Links from "./Links";
import Image from "next/image";
import Book from "./Book";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  return (
    <nav
      style={{
        transition: "all 500ms ease",
      }}
      className="fixed z-30 top-0  left-0 w-full right-0 bg-white h-[80px] flex justify-between"
    >
      <div
        style={{
          backgroundColor: isOpen ? "#F5F5F5F5" : "white",
          transition: "all 500ms ease",
        }}
        className="container relative rounded-t-md px-2 flex justify-between items-center  mx-auto max-w-[1300px] w-[95%]  "
      >
        <div className="logo flex justify-between gap-2 items-center">
          {/* TODO: KAKS LOGO MUST BE HERE */}
          <div className="logo relative h-[50px] w-[50px]">
            <Image
              layout="fill"
              src="https://utfs.io/f/gzs3u2midcSLyFwNyJgSXFer2COT0bsJo8a5jt6Wn9fDGvpL"
            />
          </div>
          <div className="name">Kaks</div>
        </div>
        <Links />
        <div className="book-hamburger flex justify-between gap-5 items-center">
          {!isOpen && <Book className={"transition-all"} />}

          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <div className="absolute opacity-65 -bottom-[10px] bg-gray-600 mx-auto w-[96%] h-[1px] "></div>
        )}

        <NavMenu isOpen={isOpen} />
      </div>
    </nav>
  );
};
export default NavBar;