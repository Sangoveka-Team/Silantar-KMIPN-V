import Link from "next/link";
import ColorStatus from "../ColorStatus";

const LaporanTerbaruCard = ({datas}) => {
  return (
    <>
      {datas.map((data, index) => (
        <Link
          key={index}
          href={`/lacak/${data.id_laporan}`}
          className="pt-2 px-[13px] pb-[13px] border border-[#808080] rounded-[10px] w-[306px] space-y-[19px]"
        >
          <div className="space-y-[6px]">
            <h4 className="text-primary font-semibold text-[15px]">
              {data.kategori_lapor}
            </h4>
            <p className="font-normal text-xs">{data.deskripsi}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal">
              {data.tanggal} |{" "}
              <span className="text-primary font-bold">{data.nama}</span>
            </div>
            <ColorStatus title={data.status_lapor} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default LaporanTerbaruCard;
