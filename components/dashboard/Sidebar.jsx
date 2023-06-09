"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // w-[13.438rem]
  return (
    <div
      className={`bg-primary pt-2 px-3  ${
        isOpen ? "w-[13.438rem]" : "w-12"
      } h-screen`}
    >
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <Image src="/icon/align-left.svg" width={24} height={24} />
      </button>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image src="/icon/home-black.svg" width={24} height={24} />
            <span
              className={`font-bold text-[0.938rem] text-black ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image src="/icon/add.svg" width={24} height={24} />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Buat Laporan
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image src="/icon/clock.svg" width={24} height={24} />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Riwayat Laporan
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image src="/icon/user.svg" width={24} height={24} />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Profil Pengguna
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image src="/icon/fold.svg" width={24} height={24} />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Log-Out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
