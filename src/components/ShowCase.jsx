"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
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

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  // A use effect to fecth slides based on the button clicked
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }), // Integrate Autoplay
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false); // State for autoplay

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

  const tweenScale = useCallback((emblaApi, eventName) => {
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
        const activeSlideScale = 1.2; // Scale for the active slide
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
  }, []);

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
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index, embla) => (
            <div className="embla__slide rounded-md cursor-pointer" key={embla}>
              <img
                src={index}
                loading="lazy"
                layout="fill"
                className="embla__slide__number h-full w-full object-cover bg-red-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls px-3">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Play/Pause Button */}
        <div className="buttons-paginations flex bg-[#e4e2e2] px-3  rounded-full h-[45px]">
          <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {isPlaying ? (
              <CiPause1 color="gray" size={30} />
            ) : (
              <IoPlayOutline color="gray" size={30} />
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
