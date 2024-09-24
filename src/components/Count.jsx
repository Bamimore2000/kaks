"use client";
import React, { useEffect, useState, useRef } from "react";

const MultiCounter = () => {
  const counters = [
    { label: "Total Projects", target: 231 },
    { label: "Total Clients", target: 520 },
    { label: "Customer Support", target: "24/7" }, // Combined availability
    { label: "Success Rate", target: 99 }, // Display as a percentage
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const ref = useRef(null);
  const hasCounted = useRef(false); // Track if counting has occurred

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasCounted.current) {
        hasCounted.current = true; // Set the flag to true after first count
        startCounting();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the component is in view
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const startCounting = () => {
    const duration = 3000; // 3 seconds

    counters.forEach((counter, index) => {
      if (typeof counter.target === "number") {
        const totalCount = counter.target;
        const incrementTime = duration / totalCount;

        let currentCount = 0;
        const interval = setInterval(() => {
          if (currentCount <= totalCount) {
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = currentCount;
              return newCounts;
            });
            currentCount++;
          } else {
            clearInterval(interval);
          }
        }, incrementTime);
      } else {
        // For non-numeric targets, set directly
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = counter.target;
          return newCounts;
        });
      }
    });
  };

  return (
    <section ref={ref} className="multi-counter w-full section-main">
      <div className="wrapper grid grid-cols-2 gap-y-6 md:grid-cols-4 mx-auto w-[85%] max-w-[940px]">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="counter-item justify-center text-center flex flex-col gap-0"
          >
            <span className="number text-[25px]  md:text-[30px] font-bold text-[#141414]">
              {counts[index] || counter.target}
              {counter.label === "Success Rate" && "%"}
            </span>
            <span className="text-[15px] md:text-[18px] font-bold text-[#A8A8A8]">
              {counter.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultiCounter;
