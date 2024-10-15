import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroItem from "./HeroItem";
import Image from "next/image";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ImageGrid = ({ images }) => {
  const columnsRef = useRef([]);
  const animations = useRef([]);
  const shuffledImages = shuffleArray([...images]);

  // Create infinite scroll animation for a column
  const createScrollAnimation = (column, direction) => {
    const scrollHeight = column.scrollHeight;
    gsap.set(column, { y: direction === "up" ? 0 : -scrollHeight / 2 });

    const tl = gsap.to(column, {
      y: direction === "up" ? -scrollHeight / 2 : 0,
      duration: 50, // Adjust duration as needed
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((value) => {
          return parseFloat(value) % (scrollHeight / 2);
        }),
      },
    });

    animations.current.push(tl);
  };

  // Handle visibility changes
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const index = Number(entry.target.dataset.index);
      const animation = animations.current[index];

      if (entry.isIntersecting) {
        gsap.to(animation, { timeScale: 1 }); // Resume animation
      } else {
        gsap.to(animation, { timeScale: 0 }); // Pause animation
      }
    });
  };

  // Apply GSAP animation to each column when the component mounts
  useEffect(() => {
    const columns = columnsRef.current;
    const observer = new IntersectionObserver(handleIntersection);

    columns.forEach((col, i) => {
      const direction = i % 2 === 0 ? "up" : "down";
      createScrollAnimation(col, direction);
      col.dataset.index = i;
      observer.observe(col);
    });

    // return () => {
    //   columns.forEach((col) => observer.unobserve(col)); // Cleanup observer on unmount
    // };
  }, []);

  // Function to slice and duplicate images for seamless scrolling
  const getColumnImages = (index) => {
    const imagesPerColumn = Math.ceil(shuffledImages.length / 4); // Base on 4 columns for mobile
    const start = index * imagesPerColumn;
    const columnImages = shuffledImages.slice(start, start + imagesPerColumn);

    return [...columnImages, ...columnImages]; // Duplicate for seamless scrolling
  };

  return (
    <div
      style={{ height: "calc(100svh - 80px)", overflow: "hidden" }}
      className="grid hero-page z-20 overflow-hidden relative px-3 bg-[#2E281E] grid-cols-3 md:grid-cols-4 gap-2 mt-[80px]" // 4 columns on mobile, 5 on larger screens
    >
      <HeroItem />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (columnsRef.current[i] = el)}
          className={`flex flex-col gap-2 h-full`}
        >
          {getColumnImages(i).map((image, idx) => (
            <div
              key={image.key}
              className="w-full relative h-[150px] md:h-[300px]"
            >
              {/* <img
                className="h-full w-full object-cover"
                src={image.url}
                alt={`Image ${idx}`}
                loading="lazy"
              /> */}
              <Image
                layout="fill"
                objectFit="cover"
                src={image.url}
                alt={`Image ${idx}`}
                priority
                quality={60}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
