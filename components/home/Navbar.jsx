"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icon/logo.svg";
import copy from "copy-to-clipboard";

const Navbar = () => {
  return (
    <nav className="flex bg-white items-center justify-between px-5 py-[10px] shadow-md fixed w-full z-20">
      <Link href={"/"} className="flex items-center gap-[5px]">
        <Image
          src={Logo}
          width={25}
          height={25}
          className=""
          alt="logo silantar"
        />
        <h1 className="font-semibold text-xl text-primary">SILANTAR</h1>
      </Link>
      <div className="flex gap-[14px] items-center justify-between">
        <div className="dropdown dropdown-bottom dropdown-end transition rounded-box p-1 hover:bg-[#f2f2f2]">
          <label tabIndex={0} className="cursor-pointer">
            <Image
              src="/icon/bell.svg"
              width={24}
              height={24}
              alt="notification icon"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-[5px] w-52 py-[14px] px-4 mt-3"
          >
            <h3 className="font-semibold text-[15px] text-primary">Riwayat</h3>
            <hr className="w-full h-[2px] bg-[#808080] mt-[11px] mb-[14px]" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[11px] ">
                  <div className="tooltip" data-tip="Salin Ticket">
                    <Image
                      src="/icon/clipboard.svg"
                      width={24}
                      height={24}
                      alt="clipboard image"
                      className="cursor-pointer"
                      onClick={() => {
                        copy(localStorage.getItem("ticket"));
                        alert("ticket tercopy");
                      }}
                    />
                  </div>
                  <p>{localStorage.getItem("tanggal-ticket")}</p>
                </div>
                <Link href={`/lacak/${localStorage.getItem("ticket")}`}>
                  <Image
                    src="/icon/download.svg"
                    width={24}
                    height={24}
                    alt="download image"
                  />
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <Link
          href="/sign-in"
          className="transition rounded-box p-1 hover:bg-[#f2f2f2]"
          as="/sign-in"
        >
          <Image
            src="/icon/user-green.svg"
            width={24}
            height={24}
            alt="user image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
