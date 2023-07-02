"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={`bg-primary pt-2 px-3 z-[999] ${
        isOpen ? "w-[13.438rem]" : "w-12"
      } h-full fixed`}
    >
      <Link href="/">
        <Image
          src="/logo-silantar.svg"
          width={25}
          height={25}
          alt="logo icon"
        />
      </Link>
      <ul className="flex flex-col gap-5 mt-2">
        <li>
          <Link href="/dashboard" className="flex items-center gap-[0.313rem]">
            <Image
              src={`/icon/${
                pathname === "/dashboard" ? "home-black" : "home"
              }.svg`}
              width={24}
              height={24}
              alt="dashboard icon"
            />
            <span
              className={`font-bold text-[0.938rem] ${
                pathname === "/dashboard" ? "text-black" : "text-white"
              } ${isOpen ? "block" : "hidden"}`}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/tambah-laporan"
            className="flex items-center gap-[0.313rem]"
          >
            <Image
              src={`/icon/${
                pathname === "/dashboard/tambah-laporan" ? "add-black" : "add"
              }.svg`}
              width={24}
              height={24}
              alt="tambah-laporan icon"
            />
            <span
              className={`font-bold text-[0.938rem] ${
                pathname === "/dashboard/tambah-laporan"
                  ? "text-black"
                  : "text-white"
              } ${isOpen ? "block" : "hidden"}`}
            >
              Tambah Laporan
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/riwayat"
            className="flex items-center gap-[0.313rem]"
          >
            <Image
              src={`/icon/${
                pathname === "/dashboard/riwayat" ? "clock-black" : "clock"
              }.svg`}
              width={24}
              height={24}
              alt="riwayat icon"
            />
            <span
              className={`font-bold text-[0.938rem] ${
                pathname === "/dashboard/riwayat" ? "text-black" : "text-white"
              } ${isOpen ? "block" : "hidden"}`}
            >
              Riwayat Laporan
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profil"
            className="flex items-center gap-[0.313rem]"
          >
            <Image
              src={`/icon/${
                pathname === "/dashboard/profil" ? "user-black" : "user"
              }.svg`}
              width={24}
              height={24}
              alt="profil icon"
            />
            <span
              className={`font-bold text-[0.938rem] ${
                pathname === "/dashboard/profil" ? "text-black" : "text-white"
              } ${isOpen ? "block" : "hidden"}`}
            >
              Profil Pengguna
            </span>
          </Link>
        </li>
        <li>
          <button
            className="flex items-center gap-[0.313rem]"
            onClick={() => router.push("/sign-in")}
          >
            <Image
              src="/icon/fold.svg"
              width={24}
              height={24}
              alt="log-out icon"
            />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Log-Out
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
