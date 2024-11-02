"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import ImageComponent from "./ImageComponent";

const TWEEN_FACTOR_BASE = 0.3;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const [openLarge, setOpenLarge] = useState(false);
  // A use effect to fecth slides based on the button clicked
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 1500 }), // Integrate Autoplay
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [isPlaying, setIsPlaying] = useState(true); // State for autoplay

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  useEffect(() => {
    if (openLarge && typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [openLarge]);

  const tweenScale = useCallback(
    (emblaApi, eventName) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          const scale = 0.75; // Default scale for slides
          // TODO: set back to 1.2
          const activeSlideScale = openLarge ? 1 : 1.2; // Scale for the active slide
          const adjacentSlideScale = 0.85; // Scale for adjacent slides

          if (slideIndex === emblaApi.selectedScrollSnap()) {
            tweenNodes.current[
              slideIndex
            ].style.transform = `scale(${activeSlideScale})`;
          } else if (
            slideIndex === emblaApi.selectedScrollSnap() - 1 ||
            slideIndex === emblaApi.selectedScrollSnap() + 1
          ) {
            tweenNodes.current[
              slideIndex
            ].style.transform = `scale(${adjacentSlideScale})`;
          } else {
            tweenNodes.current[slideIndex].style.transform = `scale(${scale})`;
          }
        });
      });
    },
    [openLarge]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      setIsPlaying(autoplay.isPlaying());
      emblaApi
        .on("autoplay:play", () => setIsPlaying(true))
        .on("autoplay:stop", () => setIsPlaying(false));
    }
  }, [emblaApi, tweenScale, openLarge]);

  return (
    <div
      onClick={() => {
        setOpenLarge(false);
      }}
      className={`embla ${openLarge && "large"} `}
    >
      <PrevButton
        className="large-btn absolute left-4 embla__button embla__button--next flex bg-[#424242]"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="large-btn absolute  right-8 embla__button embla__button--next flex bg-[#424242]"
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
      <div className="embla__viewport mt-10" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide relative rounded-md cursor-pointer"
              key={slide.key}
            >
              <ImageComponent
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenLarge(true);
                  if (emblaApi) {
                    emblaApi.scrollTo(index); // Set clicked slide as active
                  }
                }}
                className="embla__slide__number object-cover h-full w-full"
                slide={slide.url}
              />
              {/* <img
                src={slide}
                onLoad={() => {}}
                loading="lazy"
                className="embla__slide__number h-full w-full object-cover "
              /> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mx-auto w-[92%] max-w-[1300px]">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Play/Pause Button */}
        <div className="buttons-paginations bg-[#424242] grid place-items-center  rounded-full w-[50px] h-[50px]">
          <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {isPlaying ? (
              <CiPause1 color="white" size={25} />
            ) : (
              <IoPlayOutline color="white" size={25} />
            )}
          </button>
        </div>

        {/* Dots Section (commented out for customization) */}
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
