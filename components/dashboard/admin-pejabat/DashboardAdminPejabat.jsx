import Image from "next/image";
import TableLaporan from "../TableLaporan";

const DashboardAdminPejabat = () => {
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <h1 className="font-bold text-[22px]">Dashboard</h1>
      <div className="flex gap-5 flex-wrap mt-[17px]">
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">7</div>
            <p className="text-sm mt-4">SEMUA LAPORAN</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">2</div>
            <p className="text-sm mt-4">LAPORAN TUNTAS</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">2</div>
            <p className="text-sm mt-4">LAPORAN DIPROSES</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">2</div>
            <p className="text-sm mt-4">BELUM DIPROSES</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">1</div>
            <p className="text-sm mt-4">LAPORAN DITOLAK</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
      </div>
      <TableLaporan />
    </div>
  );
};

export default DashboardAdminPejabat;
