"use client";

import Image from "next/image";
import {useState} from "react";

const DropdownInfo = ({
  heading,
  width,
  title,
  titleWidth,
  headingGreen,
  headingGreenText,
  left,
  right,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`box-border absolute ${left && "left-2"} ${
        right && "right-2"
      } w-[${width}px] z-30`}
    >
      <div
        className={`py-[5px] pl-3 pr-1 bg-white rounded-xl border-2 border-primary text-[0.625rem] font-bold shadow-lg w-full`}
      >
        <button
          className={"w-full text-start"}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {headingGreen ? (
            <>
              {headingGreenText.title}
              <span className="text-primary"> {headingGreenText.name}</span>!
            </>
          ) : (
            <>{heading}</>
          )}
          <Image
            src="/icon/dropdown.svg"
            width={24}
            height={24}
            alt="dropdown icon"
            className={`inline -translate-y-[0.063rem] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} ${
            titleWidth === undefined ? "" : `w-[${titleWidth}px]`
          } text-start font-medium transition-all`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default DropdownInfo;
