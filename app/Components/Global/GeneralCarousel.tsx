"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftArrowIcon, { RightArrowIcon } from "./LeftIcon";

type GeneralCarouselProps = {
  settings?: Settings;
  data: React.ReactNode[];
};

const GeneralCarousel: React.FC<GeneralCarouselProps> = ({ settings = {}, data }) => {
  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute md:-bottom-16 -bottom-10 md:-translate-y-1/2 md:right-0 right-5  flex items-center justify-center md:h-12 h-10 md:w-12 w-10 cursor-pointer transition-colors duration-200 z-10 "
      aria-label="Next slide"
    >
      <RightArrowIcon  />
    </div>
  );

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute md:-bottom-16 -bottom-10 md:-translate-y-1/2 md:right-8 right-12 p-2 flex items-center justify-center md:h-12 h-10 md:w-12 w-10 cursor-pointer transition-colors duration-200 z-10 "
      aria-label="Previous slide"
    >
      <LeftArrowIcon  />
    </div>
  );

  const sliderSettings: Settings = {
    

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    ...settings,
  };

  if (!data || data.length === 0) {
    return (
      <div className="slider-container flex items-center justify-center h-64 text-gray-500">
        No slides to display
      </div>
    );
  }

  return (
    <div className="slider-container relative">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="outline-none px-4">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GeneralCarousel;
