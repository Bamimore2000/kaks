"use client";

import { useState } from "react";
import ImageHeader from "./ImageHeader";
import { sectionImages } from "../app/lib/data";
import { sectionsName } from "@/app/lib/data";
import ShowCase from "./ShowCase";
import { imageData } from "@/app/lib/data";
import { useToggle } from "./contexts/toggleContexts";

const Portfolio = () => {
  const { current, setCurrent } = useToggle();
  const [display, setDisplay] = useState(sectionImages[current]);
  const handleImageChange = (section) => {
    setDisplay(sectionImages[section]);
  };

  // const [current, setCurrent] = useState(sectionsName[0].name);
  const OPTIONS = { loop: true };
  return (
    <section
      id="Portfolio"
      className="section-main py-8 bg-[#141414] text-white"
    >
      <p className="text-center mt-4 text-[#CECECE] text-[10px] font-mono">
        A collection of my best works
      </p>

      <h2 className="section-header py-3">Portfolio</h2>
      <ImageHeader
        display={display}
        handleImageChange={handleImageChange}
        current={current}
        setCurrent={setCurrent}
      />
      <ShowCase
        options={OPTIONS}
        slides={display}
        current={current}
        setCurrent={setCurrent}
      />
    </section>
  );
};
export default Portfolio;
