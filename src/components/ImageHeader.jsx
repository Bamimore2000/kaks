"use client";
import { sectionsName } from "@/app/lib/data";
import { useRef } from "react";

const ImageHeader = ({ current, setCurrent, handleImageChange, display }) => {
  return (
    <div className="w-[95%] flex relative justify-between mb-12 mx-auto max-w-lg md:px-3 shadow-custom-shadow rounded-md h-[3.4rem] p-2 ">
      {sectionsName.map((section, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setCurrent(section.name);
              handleImageChange(section.name);
              console.log({ display });
            }}
            style={{
              backgroundColor: current === section.name ? "black" : "white",
              color: current === section.name ? "white" : "black",
            }}
            className="text-center select-none bg-black/80 text-[14px] md:text-[16px] grid place-items-center cursor-pointer mix-blend-difference p-2 text-black rounded-sm"
          >
            {section.name}
          </div>
        );
      })}
    </div>
  );
};
export default ImageHeader;
