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
      setIsWideScreen(window.innerWidth >= 540);
    }
  };

  useEffect(() => {
    updateMedia(); // Check initial width
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="mt-10 relative py-5">
      <h4 className="text-[#565FAD] text-lg mb-2 font-semi-bold">
        Testimonials
      </h4>
      <h5 className="text-3xl font-bold">
        Exceptional service & <br /> top-notch craftsmanship!
      </h5>

      {/* Masonry grid */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 540: 2, 768: 3 }}>
        <Masonry>
          {testimonials
            .slice(0, showMore || isWideScreen ? testimonials.length : 3)
            .map((testimony, index) => (
              <TestimonialCard key={index} {...testimony} />
            ))}
        </Masonry>
      </ResponsiveMasonry>

      {!isWideScreen && (
        <div className="button-wrapper backdrop-blur-xl bg-white/30  absolute bottom-7 h-9 w-full text-center">
          <button
            onClick={handleToggleShowMore}
            className="mt-4 text-blue-500 hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
