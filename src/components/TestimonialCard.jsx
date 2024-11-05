"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const TestimonialCard = ({ name, role, comment }) => {
  const [needsMargin, setNeedsMargin] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      if (element.current && typeof window !== undefined) {
        const elementRect = element.current.getBoundingClientRect();
        const gapToLeftEdge = elementRect.left;
        const gapToRightEdge = window.innerWidth - elementRect.right;

        if (
          window.innerWidth < 1400 &&
          gapToLeftEdge > 50 &&
          gapToRightEdge > 50
        ) {
          setNeedsMargin(true);
        } else if (
          window.innerWidth > 1400 &&
          gapToLeftEdge > 200 &&
          gapToRightEdge > 200
        ) {
          console.log({ gapToLeftEdge, gapToRightEdge, name, needsMargin });
          setNeedsMargin(true);
        } else {
          setNeedsMargin(false);
        }
      }
    };

    checkPosition();

    if (typeof window !== undefined) {
      window.addEventListener("resize", checkPosition);
    }

    return () => {
      window.removeEventListener("resize", checkPosition);
    };
  }, []);
  return (
    <article
      ref={element}
      className={twMerge(
        `cursor-pointer bg-[#141414] testimonial-card p-6 md:p-8 break-inside-avoid my-2 xmd:my-3 ${
          needsMargin && "xmd:mx-6"
        } `
      )}
    >
      <h5 className="font-semibold text-[#fdfdfd]">{name}</h5>
      <span className=" text-xs block mb-3 text-[#e0e0e0]">{role}</span>

      <p className="text-[#eeeeee]">{comment}</p>
    </article>
  );
};
export default TestimonialCard;
