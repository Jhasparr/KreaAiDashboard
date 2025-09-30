import React from "react";
import Image from "next/image";
type CardProps = {
  title: string;
  description: string;
  isNew?: boolean;
  image: string;
};

export default function HeroCard({
  title,
  description,
  isNew = false,
  image = "",
}: CardProps) {
  return (
    <div className="grid mb-6 grid-cols-6 gap-6 hover:bg-gray-50 dark:active:bg-[#212121]  active:bg-gray-50  dark:hover:bg-[#212121] p-2 rounded-2xl  ">
      <div className="shadow-md md:w-15 w-13 h-13 md:h-15 rounded-lg relative col-span-1 ">
        <Image
          src={image}
          alt={title}
          fill
          className="w-13 h-13 object-cover rounded-lg"
        />
      </div>
      <div className="col-span-4 md:ml-0 ml-2">
        <div className="flex flex-row space-x-2 items-center mb-0 ">
          <h2 className="md:text-[18px] text-normal font-bold">{title}</h2>
          {isNew && (
            <button className="w-6 h-3 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-md text-white shadow-sm drop-shadow-md px-1 py-0 font-bold text-[7px] ">
              New
            </button>
          )}
        </div>

        <p className="md:text-[14px] text-sm w-full md:w-50 lg:w-full text-gray-500">
          {" "}
          {description}
        </p>
      </div>
      <div className="col-span-1">
        <button className="mt-4 w-10 h-5 px-1 py-1 hover:bg-gray-300 bg-gray-100 shadow-lg  text-[9px] rounded-full transition-all  dark:bg-[#212121] dark:hover:bg-[#737373] ">
          Open
        </button>
      </div>
    </div>
  );
}
