import TableLaporan from "@/components/dashboard/TableLaporan";

const Laporan = () => {
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <h1 className="font-bold text-[22px]">
        Semua <span className="text-primary">Laporan</span>
      </h1>
      <TableLaporan />
    </div>
  );
};

export default Laporan;
