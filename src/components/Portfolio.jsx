"use client";

import { useState } from "react";
import ImageHeader from "./ImageHeader";
import { sectionsName } from "@/app/lib/data";
import ShowCase from "./ShowCase";
import { imageData } from "@/app/lib/data";
import { useToggle } from "./contexts/toggleContexts";

const Portfolio = () => {
  const { current, setCurrent } = useToggle();
  // const [current, setCurrent] = useState(sectionsName[0].name);
  const OPTIONS = { loop: true };
  return (
    <section id="Portfolio" className="section-main py-8">
      <p className="text-center mt-4 text-gray-400 text-[10px] font-mono">
        A collection of my best works
      </p>

      <h2 className="section-header py-3">Portfolio</h2>
      <ImageHeader current={current} setCurrent={setCurrent} />
      <ShowCase
        options={OPTIONS}
        slides={imageData}
        current={current}
        setCurrent={setCurrent}
      />
    </section>
  );
};
export default Portfolio;
