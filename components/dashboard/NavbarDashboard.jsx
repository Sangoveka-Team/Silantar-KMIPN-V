import Image from "next/image";
import React from "react";

const NavbarDashboard = () => {
  return (
    <div className="flex justify-between py-[0.438rem] px-[0.375rem] bg-white">
      <div className="flex gap-[0.188rem]">
        <Image
          src="/icon/logo.svg"
          width={25}
          height={25}
          alt="logo silantar"
        />
        <h1 className="text-primary font-bold text-[0.938rem]">SILANTAR</h1>
      </div>
      <div className="flex gap-[0.188rem]">
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
