import Image from "next/image";

const CardInfo = ({data}) => {
  return (
    <div className="flex gap-5 flex-wrap mt-[17px]">
      <div className="bg-primary w-[250px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
        <div className="text-white font-bold">
          <div className="text-[32px]">{data.jumlahUser}</div>
          <p className="text-sm">SEMUA AKUN</p>
        </div>
        <div className="absolute right-4">
          <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
        </div>
      </div>
      <div className="bg-primary w-[250px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
        <div className="text-white font-bold">
          <div className="text-[32px]">{data.jumlahAkunDinas}</div>
          <p className="text-sm">AKUN ADMIN DINAS</p>
        </div>
        <div className="absolute right-4">
          <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
        </div>
      </div>
      <div className="bg-primary w-[250px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
        <div className="text-white font-bold">
          <div className="text-[32px]">{data.jumlahAkunKelurahan}</div>
          <p className="text-sm">AKUN PEJABAT SETEMPAT</p>
        </div>
        <div className="absolute right-4">
          <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
        </div>
      </div>
      <div className="bg-primary w-[250px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
        <div className="text-white font-bold">
          <div className="text-[32px]">{data.jumlahAkunPelapor}</div>
          <p className="text-sm">AKUN PENGGUNA</p>
        </div>
        <div className="absolute right-4">
          <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
