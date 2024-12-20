"use client";
import { sectionsName } from "@/app/lib/data";
import { useRef } from "react";

const ImageHeader = ({ current, setCurrent, handleImageChange, display }) => {
  return (
    <div className="w-[95%] flex relative gap-[14px] xmd:gap-0 justify-between mb-7 overflow-x-scroll xsm:overflow-x-hidden mx-auto max-w-lg md:px-3  h-[3.6rem] p-2 ">
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
                current === section.name ? "2px #FFB800 solid" : "none",
              // height: current === section.name ? "100%" : "calc(100% + 2px)",
              color: "#F3F3F3",
            }}
            className="text-center select-none text-[16px] md:text-[18px] grid place-items-center cursor-pointer h-full"
          >
            {section.name}
          </div>
        );
      })}
    </div>
  );
};
export default ImageHeader;
