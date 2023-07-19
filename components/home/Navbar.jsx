import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icon/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex bg-white items-center justify-between px-5 py-[10px] shadow-xl fixed w-full z-20">
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
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-[5px] w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
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
