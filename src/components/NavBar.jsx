"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import Links from "./Links";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    // Lock body scroll when the menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let debounceTimeout;

      const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        // Ignore small scroll movements to reduce sensitivity
        if (Math.abs(currentScrollPos - lastScrollPos) < 15) return;

        // Determine scrolling direction
        if (currentScrollPos > lastScrollPos) {
          setIsScrollingUp(false); // Scrolling down
        } else {
          setIsScrollingUp(true); // Scrolling up
        }

        // Update the last known scroll position after a short delay
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(
          () => setLastScrollPos(currentScrollPos),
          150
        );
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      return () => {
        // Cleanup event listener and debounce timeout
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(debounceTimeout);
      };
    }
  }, [lastScrollPos]);

  return (
    <nav
      style={{
        transition: "transform 500ms ease",
        transform: !isScrollingUp ? "translateY(0)" : "translateY(-100%)",
      }}
      className="fixed nav-bar shadow-sm shadow-black/20 z-30 top-0 left-0 w-full bg-white h-[80px] flex justify-between"
    >
      <div
        style={{
          backgroundColor: isOpen ? "#F5F5F5F5" : "white",
          transition: "background-color 500ms ease",
          padding: isOpen ? "0 12px" : "",
        }}
        className="container relative rounded-t-md flex justify-between md:justify-center items-center mx-auto max-w-[1300px] w-[92%]"
      >
        <div className="logo relative md:absolute md:left-0 flex justify-between gap-2 items-center">
          <div className="logo relative h-[40px] w-[40px]">
            <Image
              priority
              layout="fill"
              src="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
              alt="Kaks Logo"
            />
          </div>
          <div className="name">Kaks</div>
        </div>
        <Links />
        <div className="book-hamburger flex justify-between gap-5 items-center">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <div className="absolute opacity-65 bottom-0 bg-gray-600 mx-auto w-[96%] h-[1px]" />
        )}
        <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
