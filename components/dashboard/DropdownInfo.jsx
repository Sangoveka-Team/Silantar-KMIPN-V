"use client";

import Image from "next/image";
import {useState} from "react";

const DropdownInfo = ({title, text, width}) => {
  const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div className="w-full relative">
  //     <div className="box-border absolute z-50 right-0">
  //       <div className="text-[0.625rem] font-bold bg-white px-[10px] py-[1px] rounded-xl border-2 border-primary h-auto">
  //         <button
  //           type="button"
  //           className={`w-[181px] text-start`}
  //           onClick={() => setIsOpen((prev) => !prev)}
  //         >
  //           {heading}
  //           <Image
  //             src="/icon/dropdown.svg"
  //             width={24}
  //             height={24}
  //             alt="dropdown icon"
  //             className={`inline -translate-y-[0.063rem] ${
  //               isOpen ? "rotate-180" : "rotate-0"
  //             }`}
  //           />
  //         </button>
  //         <p
  //           className={`${
  //             isOpen ? "flex" : "hidden"
  //           }  text-[#808080] font-normal`}
  //         >
  //           {text}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-full relative">
      <div
        style={{width: `${width}px`}}
        className={`collapse bg-white border-2 border-primary text-[0.625rem] ${
          isOpen ? "xs:h-auto h-auto" : "xs:h-7 h-7"
        } absolute right-0 z-50`}
      >
        <input
          type="checkbox"
          className="min-h-0 h-7"
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <div className="collapse-title font-medium py-0 px-3 min-h-0 h-7 w-full box-border">
          {title}
          <Image
            src="/icon/dropdown.svg"
            width={24}
            height={24}
            alt="dropdown icon"
            className={`inline -translate-y-[0.063rem] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div className="collapse-content font-normal pl-3 pr-[18px]">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownInfo;
