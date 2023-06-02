import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icon/logo.svg";
import NavUser from "@/public/icon/user.svg";

const Navbar = () => {
  return (
    <nav className="flex bg-primary items-center justify-between px-2 py-[7px] shadow-2xl fixed w-full">
      <Link href={"/"}>
        <Image
          src={Logo}
          width={0}
          height={0}
          className="w-[46px] h-[46px] ml-[15px] translate-y-[0.3125rem]"
          alt="logo silantar"
        />
      </Link>
      <div className="flex gap-[6px] lg:gap-2 items-center justify-between">
        <button className="px-3 py-[8px] btn-white lg:text-base">
          Tentang
        </button>
        <Link href="/profile" className="pt-1" as="/profile">
          <Image
            src={NavUser}
            width={0}
            height={0}
            className="w-[35px] lg:w-10 lg:h-10"
            alt="user image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
