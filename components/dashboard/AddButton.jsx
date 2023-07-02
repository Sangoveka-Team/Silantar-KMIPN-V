"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const AddButton = () => {
  const pathname = usePathname();
  return (
    // btn-green py-2 pl-[0.875rem] pr-[1.563rem] fixed bottom-[2.188rem] right-[0.438rem] rounded-3xl items-center font-medium text-[0.938rem] hover:bg-hoverPrimary hover:text-white shadow-xl z-50
    <Link
      href="/dashboard/tambah-laporan"
      className={`${
        pathname === "/dashboard/tambah-laporan" ? "hidden" : "flex"
      } btn btn-green btn-xs fixed bottom-[2.188rem] right-[0.438rem] rounded-3xl items-center font-medium text-[0.938rem] py-2 px-[0.875rem] h-[39px] gap-1 z-50`}
    >
      <Image
        src="/icon/add.svg"
        width={24}
        height={24}
        alt="add icon"
        className="inline"
      />
      Buat Laporan
    </Link>
  );
};

export default AddButton;
