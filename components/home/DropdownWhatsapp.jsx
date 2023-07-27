"use client";
import Image from "next/image";
import {useEffect, useState} from "react";

const DropdownWhatsapp = ({data, title, value, setValue, numberWhatsapp}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const filtering = data.filter((filter) =>
      filter.value.toLowerCase().includes(value.toLowerCase())
    );
    setDataFilter(filtering);
  }, [value]);
  return (
    <div className="w-full border border-primary rounded-[10px] text-primary text-[15px] font-medium py-1 px-3 max-h-[167.5px] overflow-auto">
      <button
        className="flex justify-between w-full"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setValue("");
          numberWhatsapp("");
        }}
      >
        <span>{value === "" ? title : value}</span>
        <Image
          src="/icon/chevron-down.svg"
          width={24}
          height={24}
          alt="panah"
          className="inline"
        />
      </button>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <hr className="w-full h-[2px] bg-[#AAAAAA] mt-[7px] mb-[10px]" />
        <div className="input input-bordered w-full max-w-xs h-7 input-xs focus:outline-none rounded-[10px] flex justify-between">
          <input
            type="text"
            placeholder={`Cari ${title}...`}
            className="w-full h-full focus:outline-none text-black"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Image
            src="/icon/search-normal.svg"
            width={15}
            height={15}
            alt="search image"
          />
        </div>
        <ul className="mt-[5px] flex flex-col gap-[7px]">
          {dataFilter.map((data) => (
            <li
              key={data.value}
              onClick={() => {
                title === "Kelurahan" && setValue(`Kelurahan ${data.value}`);
                title === "Dinas" && setValue(data.value);
                setIsOpen(false);
                numberWhatsapp(data.nomor);
              }}
              className="cursor-pointer"
            >
              {title === "Kelurahan" && `Kelurahan ${data.value}`}
              {title === "Dinas" && data.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownWhatsapp;
