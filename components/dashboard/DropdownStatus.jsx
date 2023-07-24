"use client";

import Image from "next/image";
import {useState} from "react";

const listStatus = [
  {
    title: "Semua",
    qty: 17,
  },
  {
    title: "Tuntas",
    qty: 8,
  },
  {
    title: "Diproses",
    qty: 3,
  },
  {
    title: "Belum Diproses",
    qty: 4,
  },
  {
    title: "Ditolak",
    qty: 2,
  },
];

const DropdownStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Status");
  return (
    <div className="relative">
      <div className="box-border absolute left-0 z-10">
        <div className="text-xs bg-white border border-[#808080] w-[134px] rounded-xl font-normal text-[#808080] divide-y-2">
          <button
            className="w-full text-start py-2 px-3"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {text}
            <Image
              src="/icon/chevron-down-abu.svg"
              width={13}
              height={13}
              alt="chevron"
              className="inline absolute right-2 top-[10px] rotate-180"
            />
          </button>
          <ul
            className={`${
              isOpen ? "dropdown-active" : "hidden"
            } flex flex-col py-1`}
          >
            {listStatus.map((data, index) => (
              <li
                className={`hover:bg-slate-100 ${
                  index === 4 && "rounded-b-md"
                } px-3 py-[6px]`}
                key={index}
              >
                <button
                  className="flex justify-between w-full "
                  onClick={() => {
                    setText(data.title);
                    setIsOpen(false);
                  }}
                >
                  <p>{data.title}</p>
                  <p className="w-[9.6px] text-center">{data.qty}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownStatus;
