"use client";
import { sectionsName } from "@/app/lib/data";
import { useRef } from "react";

const ImageHeader = ({ current, setCurrent, handleImageChange, display }) => {
  return (
    <div className="w-[95%] flex relative gap-[14px] xmd:gap-0 justify-between mb-12 overflow-x-scroll xsm:overflow-x-hidden mx-auto max-w-lg md:px-3  h-[3.6rem] p-2 ">
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
              borderBottom:
                current === section.name ? "2px #8B680E solid" : "none",
              // height: current === section.name ? "100%" : "calc(100% + 2px)",
              color: current === section.name ? "#292929" : "#A8A8A8",
            }}
            className="text-center select-none text-[16px] md:text-[18px] grid place-items-center cursor-pointer mix-blend-difference h-full"
          >
            {section.name}
          </div>
        );
      })}
    </div>
  );
};
export default ImageHeader;
