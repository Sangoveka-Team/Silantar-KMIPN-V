"use client";

import Image from "next/image";

const NavbarDashboard = () => {
  // return (
  //   <div className="flex w-full justify-between items-center py-[0.438rem] pr-[0.375rem] bg-white h-[39px] pl-1">
  //     <div className="flex gap-[0.188rem] items-center">
  //       <Image
  //         src="/icon/logo.svg"
  //         width={25}
  //         height={25}
  //         alt="logo silantar"
  //       />
  //       <h1 className="text-primary font-bold text-[0.938rem]">SILANTAR</h1>
  //     </div>
  //     <div className="flex gap-[0.188rem] items-center">
  //       <span className="font-bold text-[0.938rem]">Aryo Suryono</span>
  //       <Image
  //         src="/icon/user-green.svg"
  //         width={25}
  //         height={25}
  //         alt="user icon"
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <div className="navbar bg-base-100 min-h-[39px] h-[39px] p-[6px] box-border">
      <div className="flex-1">
        <div className="relative">
          <input
            type="checkbox"
            id="sidebar-checkbox"
            className="absolute w-full h-full opacity-0"
          />
          <Image
            src="/icon/align-left.svg"
            width={24}
            height={24}
            alt="align-left icon"
          />
        </div>
      </div>
      <div className="flex items-center gap-[5px]">
        <h1 className="text-xs font-medium">aryo suryono</h1>
        <Image
          src="/dashboard/fake-user.png"
          width={28}
          height={28}
          alt="user image"
          className="object-center mt-2"
        />
      </div>
    </div>
  );
};

export default NavbarDashboard;
