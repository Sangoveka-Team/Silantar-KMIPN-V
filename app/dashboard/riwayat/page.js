import DropdownLaporan from "@/components/dashboard/DropdownLaporan";
import DropdownStatus from "@/components/dashboard/DropdownStatus";
import Image from "next/image";
import Link from "next/link";

const Riwayat = () => {
  return (
    <div className="py-[0.375rem] px-2 relative sm:max-w-xl sm:mx-auto">
      <h1 className="text-[0.938rem] font-bold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[203px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-[10px] py-2 px-3 font-bold min-h-[33px] h-auto relative">
            Halaman riwayat laporan anda!
            <Image
              src="/icon/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown icon"
              className="absolute right-0 top-1"
            />
          </summary>
          <div className="collapse-content pt-0 pb-2 px-3">
            <p className="text-[8px] font-normal">
              Anda dapat melihat kembali laporan-laporan yang telah anda buat
              sebelumnya dan melihat detail-detailnya!
            </p>
          </div>
        </details>
      </div>
      <DropdownLaporan />
      <div className="mt-[75px] w-full flex gap-[0.375rem]">
        <h3 className="text-xs font-bold sm:text-base">Hari ini</h3>
        <DropdownStatus />
        <div className="ml-24 flex items-center w-[84px] text-[8px] py-[0.125rem] pl-[5px] pr-1 bg-white rounded-md border border-[#808080] sm:h-[18px] sm:mt-1">
          <input
            type="text"
            placeholder="Cari laporan"
            className="bg-transparent focus:border-none focus:outline-none w-full"
          />
          <Image
            src="/icon/search.svg"
            width={10}
            height={10}
            alt="search icon"
          />
        </div>
      </div>
      {/* laporan */}
      <div className="mt-2 flex py-[0.813rem] pl-[0.813rem] pr-[0.625rem] bg-white border-2 border-primary shadow-xl rounded-xl w-[18.375rem]">
        <div className="w-[5.063rem] h-[7.375rem] mr-[0.563rem]">
          <Image
            src="/dashboard/lapor-image.png"
            width={81}
            height={118}
            alt="Lapor image"
            className="w-full h-full object-cover"
          />
        </div>
        <hr className="w-[0.063rem] h-[7.375rem] bg-[#D9D9D9]" />
        <div className="ml-[0.563rem] text-[0.5rem]">
          <p className="line-clamp-1">
            Kategori Laporan
            <span className="pl-[0.313rem]">:</span>
            <span className="pl-[0.438rem] line-clamp-1 text-primary inline ">
              Pencemaran Lingkungan
            </span>
          </p>
          <p className="line-clamp-1">
            Alamat Lokasi
            <span className="pl-[0.938rem]">:</span>
            <span className="pl-[0.438rem]  text-primary w-[93px]">
              Komp. Gerilya Cermai Satu no 85
            </span>
          </p>
          <p className="line-clamp-1">
            Tanggal Laporan
            <span className="pl-[0.375rem]">:</span>
            <span className="pl-[0.438rem]  text-primary w-[93px]">
              06-05-2023
            </span>
          </p>
          <div className="flex">
            <p className="h-8">Deskripsi Laporan</p>
            <span className="pl-[0.125rem]">:</span>
            <span className="pl-[0.438rem]  text-primary w-[93px] line-clamp-3">
              Sampah menumpuk disungai, tidak adanya palang pemberitahuan bahwa
              adaa
            </span>
          </div>
          <div className="flex">
            <p className="font-bold">Status</p>
            <span className="pl-[2.625rem]">:</span>
            <span className="ml-[0.438rem] bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] text-[0.313rem] font-bold">
              Belum Diproses
            </span>
          </div>
          <div className="flex justify-end mt-3">
            <Link
              href="/dashboard/riwayat/SILT130505239493"
              className="btn btn-green btn-xs text-[0.5rem] rounded-[0.313rem] py-1 px-[6px] h-[19px] w-[66px]"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* laporan */}
      <div className="my-2">
        <h3 className="text-xs text-black font-bold sm:text-base">Kemarin</h3>
        <div className="mt-2 flex py-[0.813rem] pl-[0.813rem] pr-[0.625rem] bg-white border-2 border-primary shadow-xl rounded-xl w-[18.375rem]">
          <div className="w-[5.063rem] h-[7.375rem] mr-[0.563rem]">
            <Image
              src="/dashboard/lapor-image.png"
              width={81}
              height={118}
              alt="Lapor image"
              className="w-full h-full object-cover"
            />
          </div>
          <hr className="w-[0.063rem] h-[7.375rem] bg-[#D9D9D9]" />
          <div className="ml-[0.563rem] text-[0.5rem]">
            <p className="line-clamp-1">
              Kategori Laporan
              <span className="pl-[0.313rem]">:</span>
              <span className="pl-[0.438rem] line-clamp-1 text-primary inline ">
                Pencemaran Lingkungan
              </span>
            </p>
            <p className="line-clamp-1">
              Alamat Lokasi
              <span className="pl-[0.938rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px]">
                Komp. Gerilya Cermai Satu no 85
              </span>
            </p>
            <p className="line-clamp-1">
              Tanggal Laporan
              <span className="pl-[0.375rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px]">
                06-05-2023
              </span>
            </p>
            <div className="flex">
              <p className="h-8">Deskripsi Laporan</p>
              <span className="pl-[0.125rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px] line-clamp-3">
                Sampah menumpuk disungai, tidak adanya palang pemberitahuan
                bahwa adaa
              </span>
            </div>
            <div className="flex">
              <p className="font-bold">Status</p>
              <span className="pl-[2.625rem]">:</span>
              <span className="ml-[0.438rem] bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] text-[0.313rem] font-bold">
                Belum Diproses
              </span>
            </div>
            <div className="flex justify-end mt-3">
              <button className="btn btn-green btn-xs text-[0.5rem] rounded-[0.313rem] py-1 px-[6px] h-[19px] w-[66px]">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 flex py-[0.813rem] pl-[0.813rem] pr-[0.625rem] bg-white border-2 border-primary shadow-xl rounded-xl w-[18.375rem]">
          <div className="w-[5.063rem] h-[7.375rem] mr-[0.563rem]">
            <Image
              src="/dashboard/lapor-image.png"
              width={81}
              height={118}
              alt="Lapor image"
              className="w-full h-full object-cover"
            />
          </div>
          <hr className="w-[0.063rem] h-[7.375rem] bg-[#D9D9D9]" />
          <div className="ml-[0.563rem] text-[0.5rem]">
            <p className="line-clamp-1">
              Kategori Laporan
              <span className="pl-[0.313rem]">:</span>
              <span className="pl-[0.438rem] line-clamp-1 text-primary inline ">
                Pencemaran Lingkungan
              </span>
            </p>
            <p className="line-clamp-1">
              Alamat Lokasi
              <span className="pl-[0.938rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px]">
                Komp. Gerilya Cermai Satu no 85
              </span>
            </p>
            <p className="line-clamp-1">
              Tanggal Laporan
              <span className="pl-[0.375rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px]">
                06-05-2023
              </span>
            </p>
            <div className="flex">
              <p className="h-8">Deskripsi Laporan</p>
              <span className="pl-[0.125rem]">:</span>
              <span className="pl-[0.438rem]  text-primary w-[93px] line-clamp-3">
                Sampah menumpuk disungai, tidak adanya palang pemberitahuan
                bahwa adaa
              </span>
            </div>
            <div className="flex">
              <p className="font-bold">Status</p>
              <span className="pl-[2.625rem]">:</span>
              <span className="ml-[0.438rem] bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] text-[0.313rem] font-bold">
                Belum Diproses
              </span>
            </div>
            <div className="flex justify-end mt-3">
              <button className="btn btn-green btn-xs text-[0.5rem] rounded-[0.313rem] py-1 px-[6px] h-[19px] w-[66px]">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
