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
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    // Lock body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > lastScrollPos) {
          // Scrolling down
          setIsScrollingUp(false);
        } else {
          // Scrolling up
          setIsScrollingUp(true);
        }
        setLastScrollPos(currentScrollPos);
      };
      console.log(isScrollingUp);

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollPos]);

  return (
    <nav
      style={{
        transition: "all 500ms ease",
        transform: !isScrollingUp ? "translateY(0)" : "translateY(-100%)",
      }}
      className="fixed nav-bar shadow-sm shadow-black/20 z-30 top-0 left-0 w-full right-0 bg-white h-[80px] flex justify-between"
    >
      <div
        style={{
          backgroundColor: isOpen ? "#F5F5F5F5" : "white",
          transition: "all 500ms ease",
          padding: isOpen ? "0 12px" : "",
        }}
        className="container relative rounded-t-md flex justify-between md:justify-center items-center mx-auto max-w-[1300px] w-[92%]"
      >
        <div className="logo relative md:absolute md:left-0 flex justify-between gap-2 items-center">
          {/* TODO: KAKS LOGO MUST BE HERE */}
          <div className="logo relative h-[40px] w-[40px]">
            <Image
              priority="true"
              layout="fill"
              src="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
            />
          </div>
          <div className="name">Kaks</div>
        </div>
        <Links />
        <div className="book-hamburger flex justify-between gap-5 items-center">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <div className="absolute opacity-65 bottom-[0px] bg-gray-600 mx-auto w-[96%] h-[1px] "></div>
        )}

        <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
