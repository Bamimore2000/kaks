import { testimonials } from "@/app/lib/data";
import TestimonialCard from "./TestimonialCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true); // Default to true

  const handleToggleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle between show more and show less
  };

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth >= 768);
    }
  };

  useEffect(() => {
    updateMedia(); // Check initial width
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div
      id="Testimonials"
      className="relative mt-10 py-5 w-[92%] max-w-[1300px] mx-auto"
    >
      <h4 className="text-[#565FAD] text-lg mb-2 font-semi-bold">
        Testimonials
      </h4>
      <h5 className="text-[26px] font-bold text-[#FDFDFD]">
        Exceptional service & <br /> top-notch craftsmanship!
      </h5>

      {/* Masonry grid */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 768: 3 }}>
        <Masonry>
          {testimonials
            .slice(0, showMore || isWideScreen ? testimonials.length : 3)
            .map((testimony, index) => (
              <TestimonialCard key={index} {...testimony} />
            ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Blurred clouding effect with gradient */}
      {!isWideScreen && (
        <div className="relative mt-4">
          <div
            className={`blurred-overlay bg-gradient-to-b from-transparent via-[#141414]/90 to-[#141414]/100 absolute inset-x-0 bottom-0 h-[150px] transition-all duration-300 ease-in-out ${
              showMore ? "opacity-0 h-0" : "opacity-100 h-[150px]"
            }`}
          />
          <button
            onClick={handleToggleShowMore}
            className="relative z-10 underline block mx-auto mt-3 text-[#FFA000] hover:underline"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
