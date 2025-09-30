"use client";
import React from "react";
import HeroCard from "./HeroCard";
import LeftArrowIcon from "./LeftIcon";

type CardProps = {
  title: string;
  description: string;
  isNew?: boolean;
  image: string;
};

const mainCard: CardProps[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram.",
    isNew: true,
    image: "/hero1.jpg",
  },
  {
    title: "Video",
    description: "Generate videos with Haliua, Pica, Runway, Luma and More.",
    isNew: false,
    image: "/hero2.jpg",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvass instant feedback loops.",
    isNew: false,
    image: "/hero3.jpg",
  },
  {
    title: "Enhancer",
    description: "Upscale and Enhance Images and videos up to 22K.",
    isNew: true,
    image: "/hero4.jpg",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    isNew: true,
    image: "/hero5.jpg",
  },
  {
    title: "Video Lipsync",
    description: "Lip Sync any video to any audio",
    isNew: true,
    image: "/hero6.jpg",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    isNew: true,
    image: "/hero7.jpg",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products or characters",
    isNew: false,
    image: "/hero8.jpg",
  },
];

export default function SecondaryHero() {
  return (
    <section className="lg:flex lg:w-full  lg:flex-row mt-5 md:mt-8  w-full px-2 md:w-auto mx-auto  space-x gap-x-10 md:px-3 lg:justify-center -10 py-5 ">
   {/* titles */}
      <div className="relative md:w-full  overflow-hidden  mb-5 md:mb-10 ">
        <div className="flex justify-between  items-center ">
          <h2 className=" font-bold  px-4 py-3 ">Generate</h2>
          <div className="flex space-x-1 justify-center items-center">
            <LeftArrowIcon className="rotate-270 hover:text-blue-500 text-blue-400 w-4"/>
            <p className="text-sm text-blue-400 hover:text-blue-500">Show All</p>
          </div>
        </div>

{/* cards rendered */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
          {mainCard.map((index, key) => (
            <HeroCard key={key} {...index} />
          ))}
        </div>
      </div>
    </section>
  );
}
