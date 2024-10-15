"use client";

import React, { useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner"; // Assuming you have a Spinner component
import { twMerge } from "tailwind-merge";

const ImageComponent = ({ slide, className, ...restprops }) => {
  const [loading, setLoading] = useState(true);

  return (
    // <>
    //   {loading && (
    //     <div className="absolute inset-0  flex items-center justify-center">
    //       <Spinner />
    //     </div>
    //   )}
    //   <img
    //     {...restprops}
    //     style={{
    //       display: loading ? "block" : "none",
    //     }}
    //     src={slide}
    //     onLoad={() => {
    //       console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    //       setLoading(false);
    //     }}
    //     onError={() => setLoading(false)}
    //     alt="Image slide"
    //     loading="lazy"
    //     className={`embla__slide__number w-full h-full object-cover`}
    //   />
    // </>

    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <Image
        {...restprops}
        height={500}
        width={500}
        src={slide}
        onLoad={() => {
          setLoading(false);
        }}
        onError={() => setLoading(false)} // Optional error handling
        loading="lazy"
        alt="Image slide" // Add a descriptive alt text
        className={twMerge(className)} // Hide the image until it's loaded
      />
    </>
  );
};

export default ImageComponent;
