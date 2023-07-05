"use client";

import Image from "next/image";
import {useState} from "react";

const DropdownLaporan = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full mt-[2.688rem]">
      <div className="box-border absolute left-2 z-20">
        <div className="text-[0.625rem] sm:text-xs text-primary font-bold bg-white py-1 pl-1 rounded-md border border-[#808080]">
          <button
            type="button"
            className="w-[183px] sm:w-[210px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Anda telah membuat 17 laporan!
            <Image
              src="/icon/alter-circle.svg"
              width={13}
              height={12}
              alt="info icon"
              className="inline ml-1 sm:-mt-[2px]"
            />
          </button>
          <span
            className={`${
              isOpen ? "block" : "hidden"
            } w-[150px] sm:w-[177px] pl-[6px] mt-1 text-[#808080] font-normal`}
          >
            Setiap laporan yang anda buat akan diberikan poin, lihat
            selengkapnya di dashboard,
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropdownLaporan;
