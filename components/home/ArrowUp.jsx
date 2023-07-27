"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

const ArrowUp = () => {
  const [position, setPosition] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPosition(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="relative">
      <button
        className={`btn btn-green btn-xs ${
          position > 100 ? "fixed" : "hidden"
        } bottom-[105px] right-7 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:-translate-y-2 p-0 animate-bounce hover:bg-[#cacaca]`}
        onClick={handleScrollToTop}
      >
        <Image
          src="/icon/chevrons-up-green.svg"
          width={24}
          height={24}
          alt="chevrons image"
          className="pointer-events-none"
        />
      </button>
    </div>
  );
};

export default ArrowUp;
