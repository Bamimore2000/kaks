"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./AboutCarouselArrowButtons";
import ImageComponent from "./ImageComponent";

const AboutCarousel = (props) => {
  const [openLarge, setOpenLarge] = useState(false);
  useEffect(() => {
    if (openLarge && typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [openLarge]);
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;
      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <section
      onClick={() => {
        setOpenLarge(false);
      }}
      className={`about w-full ${!openLarge && "mt-8"}  mx-auto ${
        openLarge && "large"
      }`}
    >
      <PrevButton
        className="large-btn absolute left-4 embla__button embla__button--next flex bg-[#f5f5f5]"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="large-btn absolute  right-8 embla__button embla__button--next flex bg-[#f5f5f5]"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
      <div
        onClick={() => {
          setOpenLarge(false);
        }}
        className="cancel size-14 cursor-pointer text-white absolute top-1 left-1"
      >
        <FaTimes size={28} color="white" />
      </div>
      {/* manipulation */}

      {/* cancel button */}
      {/* <div
        onClick={() => {
          setOpenLarge(false);
        }}
        className="cancel size-14 cursor-pointer text-white absolute top-2 left-2 "
      >
        <FaTimes size={30} color="white" />
      </div> */}

      <div className="overflow-hidden about__viewport " ref={emblaRef}>
        <div className="flex -ml-4 about__container">
          {slides.map((index, index2) => (
            <div
              className={`about__slide flex-shrink-0 relative w-[65%] px-3 cursor-pointer ${
                !openLarge && "h-[16rem]"
              }`}
              key={index.key}
            >
              <ImageComponent
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenLarge(true);
                  if (emblaApi) {
                    emblaApi.scrollTo(index2); // Set clicked slide as active
                  }
                }}
                className="h-full about__carousel__number object-cover w-full"
                slide={index.url}
              />
              {/* <img
                src={index}
                className="h-full about__carousel__number object-cover w-full"
              ></img> */}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-row-reverse mt-7 mx-auto w-[92%] max-w-[1300px] about__controls">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="flex bg-[#f5f5f5] px-3  rounded-full h-[45px]">
          <button
            className=" text-white rounded-lg focus:outline-none "
            onClick={toggleAutoplay}
            type="button"
          >
            {isPlaying ? (
              <CiPause1 color="black" size={25} />
            ) : (
              <IoPlayOutline color="black" size={25} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
