"use client";
import ShowImageRiwayat from "@/components/riwayat/ShowImageRiwayat";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const RiwayatDetail = ({params}) => {
  const router = useRouter();
  return (
    <div className="py-[0.375rem] px-2 w-auto">
      <h1 className="text-[0.938rem] font-bold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <div className="bg-white border-[1.5px] border-primary rounded-2xl py-[2px] px-[6px] inline-block mt-[6px]">
        <div className="flex items-center gap-[3px]">
          <Link
            href="/dashboard/riwayat"
            className="hover:bg-[#f2f2f2] rounded-box"
          >
            <Image
              src="/icon/arrow-left.svg"
              width={15}
              height={15}
              alt="arrow-left icon"
            />
          </Link>
          <div className="text-[10px] font-medium">
            LAPORAN<span className="text-primary ml-[2px]">{params.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-[11px] py-[13px] pl-[13px] pr-[10px] bg-white border-2 border-primary rounded-xl shadow-xl box-border max-w-[296px] xs:max-w-xs">
        <div className="flex">
          <div className="flex flex-col gap-[6px]">
            <ShowImageRiwayat/>
            <div className="w-[81px] h-[112px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.454222876064!2d114.57940964671243!3d-3.3221074504762287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423db2e78adeb%3A0x1bdceb2be507897d!2sTaman%20Kamboja!5e0!3m2!1sid!2sid!4v1688647620789!5m2!1sid!2sid"
                className="border-0 rounded-[5px]"
                width="81"
                height="112"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <hr className="w-[0.063rem] h-[236px] bg-[#D9D9D9] ml-[9px]" />
          <div className="ml-[9px] h-full flex flex-col gap-1">
            <div className="flex font-normal text-[8px]">
              <div className="flex">
                <p className="mr-[29px]">ID Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <span className="text-primary">{params.id}</span>
            </div>
            <div className="flex font-normal text-[8px]">
              <div className="flex">
                <p className="mr-[17.5px]">Nama Pelapor</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <span className="text-primary">Aryo Suryono</span>
            </div>
            <div className="flex font-normal text-[8px]">
              <div className="flex">
                <p className="mr-[11.5px] max-w-[57px]">Nomor Ponsel Pelapor</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <span className="text-primary">09862324954837</span>
            </div>
            <div className="flex font-normal text-[8px] ">
              <div className="flex">
                <p className="mr-[11.5px]">Alamat Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <p className="text-primary max-w-[96px]">
                Komp. Gerilya Cermai Sari sdawda asdawda sdawdasd
              </p>
            </div>
            <div className="flex font-normal text-[8px] ">
              <div className="flex">
                <p className="mr-[8.5px]">Tanggal Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <p className="text-primary max-w-[96px]">06-05-2023</p>
            </div>
            <div className="flex font-normal text-[8px] ">
              <div className="flex">
                <p className="mr-[7.5px]">Kategori Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <p className="text-primary max-w-[96px]">Pencemaran Lingkungan</p>
            </div>
            <div className="flex font-normal text-[8px] ">
              <div className="flex">
                <p className="mr-[4.5px]">Deskripsi Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <p className="text-primary max-w-[96px]">
                Sampah menumpuk disungai, tidak adanya palang pemberitahuan
                dilarang membuang sampah agar warga sadar
              </p>
            </div>
            <div className="flex font-normal text-[8px] ">
              <div className="flex">
                <p className="mr-[7px]">Kategori Laporan</p>
                <p className="text-primary mr-[3px]">:</p>
              </div>
              <span className="bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] text-[0.313rem] font-bold">
                Belum Diproses
              </span>
            </div>
            <div className="flex justify-end">
              <div className="border border-primary px-[6px] py-1 w-auto text-[8px] font-normal rounded-[5px] text-primary">
                Poin: 15
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatDetail;
