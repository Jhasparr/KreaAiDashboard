"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import LeftArrowIcon, {
  CallIcon,
  EditIcon,
  FileIcon,
  GalleryIcon,
  HomeIcon,
  LocationIcon,
  SparkIcon,
  VideoIcon,
  NotificationIcon,
  SunIcon,
  MoonIcon,
  CloseCircleIcon,
  MoreCircleIcon,
} from "./LeftIcon";
import NavIcons from "./NavIcons";
import useDarkMode from "./Darkmode";
import Link from "next/link";

type CardProps = {
  title: string;
  isNew?: boolean;
  image: string;
};

const subCard: CardProps[] = [
  {
    title: "Account",
    image: "/hero10.jpg",
  },
  {
    title: "Setttings",
    isNew: true,
    image: "/hero8.jpg",
  },
];
const mainCard: CardProps[] = [
  {
    title: "Image",
    isNew: true,
    image: "/hero1.jpg",
  },
  {
    title: "Video",
    isNew: true,

    image: "/hero2.jpg",
  },
  {
    title: "Realtime",
    isNew: true,
    image: "/hero3.jpg",
  },
  {
    title: "Enhancer",
    isNew: true,
    image: "/hero4.jpg",
  },
  {
    title: "Edit",
    isNew: true,
    image: "/hero5.jpg",
  },
  {
    title: "Video ",
    isNew: true,
    image: "/hero6.jpg",
  },
  {
    title: "Motion ",
    isNew: true,
    image: "/hero7.jpg",
  },
  {
    title: "Train",
    isNew: true,
    image: "/hero8.jpg",
  },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className="lg:flex lg:w-full max-w-full lg:flex-row   w-full px-2 md:w-auto mx-auto sticky top-2 z-50  lg:justify-center mt-2  ">
      <div className="relative lg:w-full lg:max-w-full min-w-0 lg:flex-shrink  mx-auto px-2 py-0 lg:flex items-center justify-between space-x-10  ">
        <div className="hidden lg:flex justify-between space-x-10 ">
          <div className="lg:flex  space-x-10 ">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="SureBloom"
                width={35}
                height={30}
                className="dark:invert"
              />
            </Link>
            <div className="flex justify-center space-x-4 ">
              <div className="hidden lg:flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 shadow-md rounded-full w-9 px-2 py-1 bg-gradient-to-r from-sky-300 via-pink-400  to-teal-400"></div>
              <div className="hidden xl:flex items-center justify-center font-medium dark:text-amber-300">
                youremail@gmail.com
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-1 z-50 bg-gray-100 shadow-md rounded-xl px-1 py-1 dark:bg-[#212121] mx-auto">
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373] hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <HomeIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <GalleryIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <VideoIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <SparkIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <EditIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <LocationIcon className="dark:text-white" />
            </Link>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-[#737373]  hover:shadow-md transition-all px-4 py-3 rounded-xl">
            <Link href="/">
              <FileIcon className="dark:text-white" />
            </Link>
          </div>
        </nav>
        <div className="hidden lg:flex justify-center space-x-4 ">
          <div className="hidden lg:flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 bg-gray-100 shadow-md rounded-xl px-2 py-1 dark:bg-[#212121] dark:hover:bg-[#737373]">
            <GalleryIcon />
            <div className="flex">Gallery</div>
          </div>
          <div className="hidden lg:flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 dark:bg-[#212121] bg-gray-100 shadow-md rounded-xl px-2 py-1 dark:hover:bg-[#737373]">
            <CallIcon />
            <div className="flex">Support</div>
          </div>
          <div className="hidden lg:flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 bg-gray-100 shadow-md rounded-xl px-2 py-1 dark:bg-[#212121] dark:hover:bg-[#737373]">
            <NotificationIcon />
          </div>
          <div
            className="flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 bg-gray-100 shadow-md rounded-xl px-2 py-1 dark:bg-[#212121] dark:hover:bg-[#737373]"
            onClick={() => setDark(!dark)}
          >
            {dark ?  <MoonIcon /> : <SunIcon />}
          </div>
          <div className="hidden lg:flex hover:bg-gray-50 hover:shadow-md transition-all space-x-1 z-50 shadow-md rounded-full w-8 px-2 py-1 bg-gradient-to-r from-sky-300 via-pink-400  to-teal-400 "></div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="flex w-full lg:hidden py-2 justify-between mt-0 mx-auto ">
        {/* Mobile Menu Conditionals */}

        <div className="">
          <button
            type="button"
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleNav();
              }
            }}
            tabIndex={0}
            className="block lg:hidden"
            aria-label="Toggle navigation"
          >
            <MoreCircleIcon className="dark:text-white" />
          </button>
          <div
            className={`fixed overflow-y-auto top-0 pt-[18px] left-0 w-[300px] md:w-1/2 h-full bg-white dark:bg-[linear-gradient(180deg,_#0a0a0a,_#1f1f1f,_#0a0a0a)] z-50 transition-transform duration-500 ${
              open ? "transform translate-x-0 " : "transform -translate-x-full "
            }`}
          >
            {/*Close Mobile Menu */}
            <div className="px-4 flex items-center justify-between">
             
              <button
                type="button"
                className="pr-2"
                onClick={toggleNav}
                aria-label="Close navigation"
              >
                <CloseCircleIcon className="dark:text-white" />
              </button>
            </div>
            {/* Mobile Button Slider */}
            <div className=" flex mt-10 flex-col font-bold max-w-64 justify-between ">
              <div className="px-6 py-2">
                <h3>Home</h3>
              </div>
              <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                <div className="w-64 ">
                  <div className="flex flex-row justify-between space-x-2 hover:bg-gray-50 dark:active:bg-[#212121]  dark:hover:bg-[#212121] px-4 py-3 rounded-2xl  ">
                    <div className="flex flex-row w-full  ">
                      <div className=" flex flex-row shadow-md gap-2 w-9 h-9 rounded-lg ">
                        
                        <Image
                          src={"/logo.png"}
                          alt={"Logo"}
                          width={35}
                height={30}
                          className="w-full h-full dark:invert object-cover rounded-lg"
                        />
                        <div className=" justify-center items-center flex ">
                          <h2 className="md:text-[18px] text-[15px] font-bold">
                            Home
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-2">
                <h3>Personal</h3>
              </div>
              <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                {subCard.map((index, key) => (
                  <NavIcons key={key} {...index} />
                ))}
              </div>

              <div className=" px-6 relative flex flex-row py-4 font-bold max-w-64 justify-between">
                <h3>Apps</h3>
                <LeftArrowIcon
                  className={`${navOpen ? "rotate-270" : "rotate-180"}`}
                  onClick={() => setNavOpen(!navOpen)}
                />
                {navOpen && (
                  <div className=" absolute top-12 left-0 py-2">
                    <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                      {mainCard.map((index, key) => (
                        <NavIcons key={key} {...index} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        <div
          className="flex transition-all space-x-1 z-50  sticky rounded-xl px-2 py-1 "
          onClick={() => setDark(!dark)}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </div>
      </div>
    </div>
  );
}
