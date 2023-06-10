import Image from "next/image";
import React from "react";

const NavbarDashboard = () => {
  return (
    <div className="flex w-full justify-between items-center py-[0.438rem] pr-[0.375rem] bg-white h-[39px] absolute pl-[54px]">
      <div className="flex gap-[0.188rem] items-center">
        <Image
          src="/icon/logo.svg"
          width={25}
          height={25}
          alt="logo silantar"
        />
        <h1 className="text-primary font-bold text-[0.938rem]">SILANTAR</h1>
      </div>
      <div className="flex gap-[0.188rem] items-center">
        <span className="font-bold text-[0.938rem]">Aryo Suryono</span>
        <Image
          src="/icon/user-green.svg"
          width={25}
          height={25}
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default NavbarDashboard;
