import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroItem from "./HeroItem";

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
      duration: 90, // Adjust duration as needed
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

    return () => {
      columns.forEach((col) => observer.unobserve(col)); // Cleanup observer on unmount
    };
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
      style={{ height: "calc(100dvh - 80px)", overflow: "hidden" }}
      className="grid z-20 overflow-hidden relative px-3 bg-black grid-cols-3 md:grid-cols-4 gap-2 mt-[80px]" // 4 columns on mobile, 5 on larger screens
    >
      <HeroItem />
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (columnsRef.current[i] = el)}
          className={`flex flex-col gap-2 h-full`}
        >
          {getColumnImages(i).map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Image ${idx}`}
              className="w-full h-[150px] md:h-[300px] object-cover"
              loading="lazy"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// // Function to shuffle an array
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const ImageGrid = ({ images }) => {
//   const columns = 5; // Number of columns
//   const columnsRef = useRef([]); // Reference to columns

//   // Shuffle images for random order
//   const shuffledImages = shuffleArray([...images]);

//   // Function to create infinite scroll animation for a column
//   const createScrollAnimation = (column, direction) => {
//     const firstBounds = column.children[0].getBoundingClientRect();
//     const lastBounds =
//       column.children[column.children.length - 1].getBoundingClientRect();
//     const top = firstBounds.top - firstBounds.height;
//     const bottom = lastBounds.bottom;
//     const distance = bottom - top;
//     const duration = Math.abs(distance / 200); // speed can be adjusted

//     const stopPoint = direction === "up" ? -distance : distance;

//     gsap.set(column, { y: direction === "up" ? 0 : -distance });

//     gsap.to(column, {
//       y: stopPoint,
//       duration: duration,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         y: gsap.utils.unitize((value) => {
//           const newValue = parseFloat(value);
//           return newValue % distance; // Ensure seamless wrapping
//         }),
//       },
//     });
//   };

//   // Apply GSAP animation to each column when the component mounts
//   useEffect(() => {
//     const columns = columnsRef.current;
//     columns.forEach((col, i) => {
//       const direction = i % 2 === 0 ? "up" : "down"; // Even columns up, odd columns down
//       createScrollAnimation(col, direction);
//     });
//   }, []);

//   // Function to slice and duplicate images for seamless scrolling
//   const getColumnImages = (index) => {
//     const imagesPerColumn = Math.ceil(shuffledImages.length / columns);
//     const start = index * imagesPerColumn;
//     const columnImages = shuffledImages.slice(start, start + imagesPerColumn);

//     // Duplicate images to create a seamless loop
//     return [...columnImages, ...columnImages]; // Duplicate for seamless scrolling
//   };

//   return (
//     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-[100px] overflow-hidden h-[70vh]">
//       {Array.from({ length: columns }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => (columnsRef.current[i] = el)} // Attach ref to each column
//           className="flex flex-col h-full" // Ensure full height for each column
//         >
//           {getColumnImages(i).map((image, idx) => (
//             <img
//               key={idx}
//               src={image}
//               alt={`Image ${idx}`}
//               className="w-full h-auto" // Image responsive
//               loading="lazy" // Optional: for lazy loading
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGrid;

// workssssssss
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// // Function to shuffle an array
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const ImageGrid = ({ images }) => {
//   const columns = 5; // Number of columns
//   const columnsRef = useRef([]); // Reference to columns
//   const animations = useRef([]); // Store animations

//   // Shuffle images for random order
//   const shuffledImages = shuffleArray([...images]);

//   // Function to create infinite scroll animation for a column
//   const createScrollAnimation = (column, direction) => {
//     const scrollHeight = column.scrollHeight; // Full height for seamless loop
//     gsap.set(column, { y: direction === "up" ? 0 : -scrollHeight / 2 }); // Set initial position

//     const tl = gsap.to(column, {
//       y: direction === "up" ? -scrollHeight / 2 : 0, // Move column to the calculated stop point
//       duration: 60, // Duration for smooth infinite scroll
//       ease: "none", // Linear scroll without easing
//       repeat: -1, // Infinite loop
//       modifiers: {
//         y: gsap.utils.unitize((value) => {
//           return parseFloat(value) % (scrollHeight / 2);
//         }),
//       },
//     });

//     animations.current.push(tl); // Store the animation
//   };

//   // Function to handle visibility changes
//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       const index = Number(entry.target.dataset.index);
//       const animation = animations.current[index];

//       if (entry.isIntersecting) {
//         gsap.to(animation, { timeScale: 1 }); // Resume animation
//       } else {
//         gsap.to(animation, { timeScale: 0 }); // Pause animation
//       }
//     });
//   };

//   // Apply GSAP animation to each column when the component mounts
//   useEffect(() => {
//     const columns = columnsRef.current;
//     const observer = new IntersectionObserver(handleIntersection);

//     columns.forEach((col, i) => {
//       const direction = i % 2 === 0 ? "up" : "down"; // Even columns up, odd columns down
//       createScrollAnimation(col, direction);
//       col.dataset.index = i; // Store index for the observer
//       observer.observe(col); // Observe each column
//     });

//     return () => {
//       columns.forEach((col) => observer.unobserve(col)); // Cleanup observer on unmount
//     };
//   }, []);

//   // Function to slice and duplicate images for seamless scrolling
//   const getColumnImages = (index) => {
//     const imagesPerColumn = Math.ceil(shuffledImages.length / columns);
//     const start = index * imagesPerColumn;
//     const columnImages = shuffledImages.slice(start, start + imagesPerColumn);

//     // Duplicate images to create a seamless loop
//     return [...columnImages, ...columnImages]; // Duplicate for seamless scrolling
//   };

//   return (
//     <div
//       style={{ height: "80vh", overflow: "hidden" }}
//       className="grid grid-cols-3 bg-gray-600 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-[100px]" // Set gap to 0 to avoid spaces
//     >
//       {Array.from({ length: columns }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => (columnsRef.current[i] = el)} // Attach ref to each column
//           className={`flex flex-col gap-2 h-full`} // Ensure full height for each column
//         >
//           {getColumnImages(i).map((image, idx) => (
//             <img
//               key={idx}
//               src={image}
//               alt={`Image ${idx}`}
//               className="w-full h-auto object-cover" // Use object-cover to fill space without distortion
//               loading="lazy" // Optional: for lazy loading
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGrid;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// // Function to shuffle an array
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const ImageGrid = ({ images }) => {
//   const columns = 5; // Number of columns
//   const columnsRef = useRef([]); // Reference to columns
//   const animations = useRef([]); // Store animations

//   // Shuffle images for random order
//   const shuffledImages = shuffleArray([...images]);

//   // Function to create infinite scroll animation for a column
//   const createScrollAnimation = (column, direction) => {
//     const scrollHeight = column.scrollHeight; // Full height for seamless loop
//     gsap.set(column, { y: direction === "up" ? 0 : -scrollHeight / 2 }); // Set initial position

//     const tl = gsap.to(column, {
//       y: direction === "up" ? -scrollHeight / 2 : 0, // Move column to the calculated stop point
//       duration: 60, // Duration for smooth infinite scroll
//       ease: "none", // Linear scroll without easing
//       repeat: -1, // Infinite loop
//       modifiers: {
//         y: gsap.utils.unitize((value) => {
//           return parseFloat(value) % (scrollHeight / 2);
//         }),
//       },
//     });

//     animations.current.push(tl); // Store the animation
//   };

//   // Function to handle visibility changes
//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       const index = Number(entry.target.dataset.index);
//       const animation = animations.current[index];

//       if (entry.isIntersecting) {
//         gsap.to(animation, { timeScale: 1 }); // Resume animation
//       } else {
//         gsap.to(animation, { timeScale: 0 }); // Pause animation
//       }
//     });
//   };

//   // Apply GSAP animation to each column when the component mounts
//   useEffect(() => {
//     const columns = columnsRef.current;
//     const observer = new IntersectionObserver(handleIntersection);

//     columns.forEach((col, i) => {
//       const direction = i % 2 === 0 ? "up" : "down"; // Even columns up, odd columns down
//       createScrollAnimation(col, direction);
//       col.dataset.index = i; // Store index for the observer
//       observer.observe(col); // Observe each column
//     });

//     return () => {
//       columns.forEach((col) => observer.unobserve(col)); // Cleanup observer on unmount
//     };
//   }, []);

//   // Function to slice and duplicate images for seamless scrolling
//   const getColumnImages = (index) => {
//     const imagesPerColumn = Math.ceil(shuffledImages.length / columns);
//     const start = index * imagesPerColumn;
//     const columnImages = shuffledImages.slice(start, start + imagesPerColumn);

//     // Duplicate images to create a seamless loop
//     return [...columnImages, ...columnImages]; // Duplicate for seamless scrolling
//   };

//   return (
//     <div
//       style={{ height: "80vh" }}
//       className="grid grid-cols-3 -z-10 bg-gray-600 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-[100px] overflow-hidden"
//     >
//       {Array.from({ length: columns }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => (columnsRef.current[i] = el)} // Attach ref to each column
//           className={`masonry-column flex flex-col gap-2 h-full`} // Ensure full height for each column
//         >
//           {getColumnImages(i).map((image, idx) => (
//             <img
//               key={idx}
//               src={image}
//               alt={`Image ${idx}`}
//               className="w-full h-auto"
//               loading="lazy" // Optional: for lazy loading
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGrid;
