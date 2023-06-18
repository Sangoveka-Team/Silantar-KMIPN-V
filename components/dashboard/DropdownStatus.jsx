"use client";

import Image from "next/image";
import {useState} from "react";

const listStatus = [
  {
    title: "Semua",
    qty: 17,
    color: "[#808080]",
  },
  {
    title: "Tuntas",
    qty: 8,
    color: "primary",
  },
  {
    title: "Diproses",
    qty: 3,
    color: "[#DEAD00]",
  },
  {
    title: "Belum Diproses",
    qty: 4,
    color: "[#276EF1]",
  },
  {
    title: "Ditolak",
    qty: 2,
    color: "[#FF2222]",
  },
];

const DropdownStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Status");
  return (
    <div className="relative">
      <div className="box-border absolute left-2 z-10">
        <div className="text-[0.5rem] bg-white border border-[#808080] w-[5.375rem] rounded-md font-bold text-[#808080] ">
          <button
            className="w-full text-start py-[0.125rem] pl-2 pr-[5px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {text}
            <Image
              src="/icon/chevron-down-abu.svg"
              width={13}
              height={13}
              alt="chevron"
              className="inline absolute right-1 rotate-180"
            />
          </button>
          <ul className={`${isOpen ? "dropdown-active" : "hidden"}`}>
            {listStatus.map((data, index) => (
              <li
                className={`hover:bg-slate-100 pl-2 pr-[5px] text-${
                  data.color
                  // index 4 karna li yang terakhir bug rounded
                } ${index === 4 && "rounded-b-md"}`}
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
            {/* <li className="hover:bg-slate-100 pl-2 pr-[5px]">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setText("Semua");
                  setIsOpen(false);
                }}
              >
                <p>Semua</p>
                <p className="w-[9.6px] text-center">17</p>
              </button>
            </li>
            <li className="hover:bg-slate-100 pl-2 pr-[5px] text-primary">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setText("Semua");
                  setIsOpen(false);
                }}
              >
                <p>Tuntas</p>
                <p className="w-[9.6px] text-center">8</p>
              </button>
            </li>
            <li className="hover:bg-slate-100 pl-2 pr-[5px] text-[#DEAD00]">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setText("Semua");
                  setIsOpen(false);
                }}
              >
                <p>Diproses</p>
                <p className="w-[9.6px] text-center">3</p>
              </button>
            </li>
            <li className="hover:bg-slate-100 pl-2 pr-[5px] text-[#276EF1]">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setText("Semua");
                  setIsOpen(false);
                }}
              >
                <p>Belum Diproses</p>
                <p className="w-[9.6px] text-center">4</p>
              </button>
            </li>
            <li className="hover:bg-slate-100 pl-2 pr-[5px] text-[#FF2222]">
              <button
                className="flex justify-between w-full"
                onClick={() => {
                  setText("Semua");
                  setIsOpen(false);
                }}
              >
                <p>Ditolak</p>
                <p className="w-[9.6px] text-center">2</p>
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownStatus;
