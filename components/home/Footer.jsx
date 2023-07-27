import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col pt-[10px] px-[29px] pb-[15px]">
      <div className="flex flex-col text-white">
        <h3 className="font-semibold text-[15px] mb-[2px]">
          Terhubung dengan Kami
        </h3>
        <p className="font-medium italic text-[10px]">
          Bergabung bersama kami untuk membantu meningkatkan kualitas lingkungan
          sekitar kita!
        </p>
        <Link
          href="/sign-up"
          className="btn btn-white btn-xs h-[27px] w-[92px] text-xs font-semibold p-0 mt-[7px]"
        >
          Daftar Disini
        </Link>
      </div>
      <hr className="w-full bg-white h-[2px] mt-[13px] mb-[7px]" />
      <div className="text-white font-medium">
        <h3 className="text-[15px] font-semibold">Hubungi Kami</h3>
        <p className="italic text-[10px] mb-[6px]">Berikan kami masukan.</p>
        <div className="space-y-[2px]">
          <p className="text-[10px]">Call | +62 896-322-8323</p>
          <p className="text-[10px]">Email | silantar@gmail.com</p>
          <p className="text-[10px]">Kalimantan Selatan, Indonesia.</p>
        </div>
      </div>
      <hr className="w-full bg-white h-[2px] mt-[11px] mb-[13px]" />
      <p className="font-bold text-[8px] text-white">
        Copyright SILANTAR 2023-2023 © All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
