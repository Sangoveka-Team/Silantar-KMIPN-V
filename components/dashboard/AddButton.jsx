import Image from "next/image";
import Link from "next/link";

const AddButton = () => {
  return (
    <Link
      href="/dashboard/tambah-laporan"
      className="btn-green py-2 pl-[0.875rem] pr-[1.563rem] fixed bottom-[2.188rem] right-[0.438rem] rounded-3xl flex items-center font-medium text-[0.938rem] hover:bg-hoverPrimary hover:text-white shadow-xl z-10"
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
