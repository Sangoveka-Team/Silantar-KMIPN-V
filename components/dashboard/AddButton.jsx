"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const AddButton = () => {
  const pathname = usePathname();
  return (
    <Link
      href="/dashboard/tambah-laporan"
      className={`${
        pathname === "/dashboard/tambah-laporan" ? "hidden" : "flex"
      } btn-green py-2 pl-[0.875rem] pr-[1.563rem] fixed bottom-[2.188rem] right-[0.438rem] rounded-3xl items-center font-medium text-[0.938rem] hover:bg-hoverPrimary hover:text-white shadow-xl z-50`}
    >
      <Image
        src="/icon/add.svg"
        width={24}
        height={24}
        alt="add icon"
        className="inline pr-[3px]"
      />
      Buat Laporan
    </Link>
  );
};

export default AddButton;
