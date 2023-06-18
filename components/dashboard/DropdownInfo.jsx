"use client";

import Image from "next/image";
import {useState} from "react";

const DropdownInfo = ({
  heading,
  title,
  titleWidth,
  headingWidth,
  headingGreen,
  headingGreenText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-border absolute right-2 z-30">
      <div className="py-[5px] pl-3 pr-1 bg-white rounded-xl border-2 border-primary text-[0.625rem] font-bold shadow-lg">
        <button
          className={headingWidth === undefined ? "" : `w-[${headingWidth}px]`}
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
        <span
          className={`${isOpen ? "block" : "hidden"} ${
            titleWidth === undefined ? "" : `w-[${titleWidth}px]`
          } text-start font-medium transition-all`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default DropdownInfo;
