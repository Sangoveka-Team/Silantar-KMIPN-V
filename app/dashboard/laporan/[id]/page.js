"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const DetailLaporanDynamic = dynamic(
  () => import("../../../../components/dashboard/DetailLaporan"),
  {ssr: false}
);

const LaporanDetail = ({params}) => {
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <div className="inline-block">
        <div className="font-bold text-[22px] border border-primary bg-white rounded-2xl w-auto px-[23px] py-[3px]">
          <Link
            href={
              localStorage.getItem("userLevel") === "Superadmin"
                ? "/dashboard/laporan"
                : "/dashboard"
            }
            className="hover:underline underline-offset-2"
          >
            <Image
              src="/icon/arrow-left.svg"
              width={30}
              height={28}
              alt="arrow left"
              className="inline -mt-1 mr-2"
            />
            <span>
              {localStorage.getItem("userLevel") !== "Superadmin" ? (
                "Dashboard"
              ) : (
                <>
                  Semua <span className="text-primary">Laporan</span>
                </>
              )}
            </span>
          </Link>
          <span className="ml-[6px]">
            / Detail Laporan - <span className="text-primary">{params.id}</span>
          </span>
        </div>
      </div>

      <DetailLaporanDynamic id={params.id} />
    </div>
  );
};

export default LaporanDetail;
