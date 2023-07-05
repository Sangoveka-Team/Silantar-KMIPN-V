import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icon/logo.svg";
import NavUser from "@/public/icon/user.svg";

const Navbar = () => {
  return (
    <nav className="flex bg-primary items-center justify-between px-2 py-[7px] shadow-xl fixed w-full z-20">
      <Link href={"/"}>
        <Image
          src={Logo}
          width={35}
          height={35}
          className="ml-[15px] translate-y-[0.3125rem]"
          alt="logo silantar"
        />
      </Link>
      <div className="flex gap-[6px] lg:gap-2 items-center justify-between">
        <a
          href="#"
          className="btn btn-xs h-7 w-[61px] text-[0.625rem] btn-white"
        >
          Tentang
        </a>
        <Link href="/sign-in" className="pt-1" as="/sign-in">
          <Image
            src={NavUser}
            width={24}
            height={24}
            className="lg:w-10 lg:h-10 -mt-1"
            alt="user image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
