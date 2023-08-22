"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {customIcon} from "../Marker";
import "leaflet/dist/leaflet.css";
import ShowImage from "../ShowImage";
import {useRouter} from "next/navigation";

const getDataLaporanDetail = (level) => {
  const data = [
    {
      level: "Kelurahan",
      link: "show-laporan-lurah",
    },
    {
      level: "Dinas",
      link: "show-laporan-dinas",
    },
    {
      level: "Superadmin",
      link: "show-laporan-superadmin",
    },
  ];
  return data.filter((e) => e.level === level).map((e) => e.link);
};

const DetailLaporan = ({id}) => {
  const {push, refresh} = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [catatan, setCatatan] = useState("");
  const [catatanTambah, setCatatanTambah] = useState("");
  const [dinasTujuan, setDinasTujuan] = useState("");
  const getDataDetail = async (id) => {
    if (typeof window !== "undefined") {
      await fetch(
        `https://api.silantar.my.id/api/${getDataLaporanDetail(
          localStorage.getItem("userLevel")
        )}/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then(async (res) => {
        const data = await res.json();
        setData(data.payload);
        setStatus(data.payload.dataLaporan.status_lapor);
      });
    }
  };

  const handleKonfirmasi = async (id) => {
    if (typeof window !== "undefined") {
      await fetch(
        `https://api.silantar.my.id/api/${
          localStorage.getItem("userLevel") === "Dinas"
            ? "update-status-lapor"
            : "update-status"
        }/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            note: catatan,
            status_lapor: status,
          }),
        }
      )
        .then(async (res) => {
          const data = await res.json();
          setCatatan("");
          alert("data berhasil diubah");
          push("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleAjuan = async (id) => {
    if (typeof window !== "undefined") {
      await fetch(`https://api.silantar.my.id/api/ajuan-ke-dinas/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          note: catatan,
          dinas_ajuan: dinasTujuan,
          deskripsi_tambahan: catatanTambah,
        }),
      }).then(async (res) => {
        const data = await res.json();
        setCatatan("");
        setCatatanTambah("");
        alert("success");
      });
    }
  };

  useEffect(() => {
    getDataDetail(id);
  }, []);

  if (data === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }
  return (
    <div className="mt-4 bg-white rounded-md max-w-[1063px]">
      <div className="pt-[51px] px-[58px] pb-[46px] flex flex-col gap-6">
        <div className="flex gap-[33.5px]">
          <label
            className="w-[247] h-[308] cursor-pointer rounded-[5px]"
            htmlFor="my_modal_5"
          >
            <Image
              src={`https://api.silantar.my.id/${data.gambarLaporan[0].image_name}`}
              width={0}
              height={0}
              alt="gambar image"
              className="w-[300px] h-[215px] object-contain mx-auto"
              unoptimized
            />
          </label>

          <hr className="w-[0.063rem] h-[308px] bg-[#D9D9D9]" />
          <label
            htmlFor="my_modal_25"
            className="w-full h-[130px] cursor-pointer"
            onClick={() => setShowMap(true)}
          >
            {!showMap && (
              <MapContainer
                center={data.dataLaporan.maps.split(",")}
                zoom={13}
                style={{height: "305px", width: "632px"}}
                zoomControl={false}
                dragging={false}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={data.dataLaporan.maps.split(",")}
                  icon={customIcon}
                ></Marker>
              </MapContainer>
            )}
          </label>
        </div>
        <hr className="w-[946px] h-px bg-[#D9D9D9]" />
        <div>
          <div className="relative">
            <div className="border border-[#808080] py-[6px] pl-[10px] text-lg font-medium text-[#808080] rounded-[10px] absolute right-0 h-[38px] cursor-pointer">
              <label htmlFor="my_modal_catatan_2">
                <span>Catatan</span>
                <Image
                  src="/icon/alter-circle.svg"
                  width={24}
                  height={24}
                  alt="info icon"
                  className="inline ml-1 -mt-[2px] mr-2"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[170px]">ID Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">
                {data.dataLaporan.id_laporan}
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[138px]">Nama Pelapor</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary flex">
                {data.dataLaporan.nama}
                <button className="btn btn-green btn-xs ml-2 py-[9px] px-4 h-[31px] shadow-sm">
                  Lihat
                </button>
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[56px]">Nomor Ponsel Pelapor</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">
                {data.dataLaporan.nomor}
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[118.5px]">Alamat Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">
                {data.dataLaporan.alamat}
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[111.5px]">Tanggal Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">
                {data.dataLaporan.tanggal}
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[108px]">Kategori Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">
                {data.dataLaporan.kategori_lapor}
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[99.5px]">Deskripsi Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary max-w-[617px]">
                {data.dataLaporan.deskripsi}
              </span>
            </div>
            <div className="flex text-[22px] items-center">
              <div className="flex">
                <p className="font-normal mr-[214px]">Status</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <select
                className="select select-bordered border-primary max-w-xs rounded-2xl h-[42px] select-sm text-primary"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option disabled selected>
                  Set Status
                </option>
                <option>Tuntas</option>
                <option>Diproses</option>
                <option>Belum Diproses</option>
                <option>Ditolak</option>
                <option>Pending Dinas</option>
              </select>
            </div>
            <div className="space-x-[12px] w-full text-end -mt-7">
              {localStorage.getItem("userLevel") === "Kelurahan" && (
                <label
                  htmlFor="my_modal_26"
                  className="btn btn-green btn-md px-6 bg-[#DAB703] hover:bg-[#be9f04]"
                >
                  Serahkan ke..
                </label>
              )}
              <label
                htmlFor="my_modal_27"
                className="btn btn-green btn-md px-6"
              >
                Konfirmasi
              </label>
            </div>
          </div>
        </div>
        <input type="checkbox" id="my_modal_25" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-full h-full rounded-none p-0 m-0 max-h-full max-w-full">
            <label
              htmlFor="my_modal_25"
              onClick={() => setShowMap(false)}
              className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 z-[999] bg-[#DC3545] hover:bg-[#a0232f]"
            >
              ✕
            </label>
            {showMap && (
              <MapContainer
                center={data.dataLaporan.maps.split(",")}
                zoom={13}
                style={{height: "100vh"}}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={data.dataLaporan.maps.split(",")}
                  icon={customIcon}
                >
                  <Popup>{data.dataLaporan.alamat}</Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>

        {/* serahkan ke */}
        <input type="checkbox" id="my_modal_26" className="modal-toggle" />
        <div className="modal z-[9999]">
          <div className="modal-box py-[30px] px-11 space-y-2">
            <label
              htmlFor="my_modal_26"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="w-full">
              <h3 className="font-bold text-xl">
                Pilih tujuan <span className="text-primary">Laporan</span>
              </h3>
              <select
                className="select select-bordered w-full mt-2"
                onChange={(e) => setDinasTujuan(e.target.value)}
              >
                <option disabled selected>
                  Pilih dinas tujuan laporan...
                </option>
                <option>Dinas Lingkungan Hidup</option>
                {/* <option>Dinas Pekerjaan Umum dan Perumahan Rakyat</option>
                <option>Dinas Perhubungan</option>
                <option>Dinas Komunikasi dan Informasi</option> */}
              </select>
            </div>
            <div className="w-full">
              <h3 className="font-bold text-xl">
                Deskripsi <span className="text-primary">Tambahan</span>
              </h3>
              <textarea
                className="textarea textarea-bordered w-full h-[141px] mt-2"
                placeholder="Tuliskan deskripsi tambahan untuk dinas..."
                onChange={(e) => setCatatanTambah(e.target.value)}
                value={catatanTambah}
              ></textarea>
            </div>
            <div className="w-full">
              <h3 className="font-bold text-xl">
                Berikan <span className="text-primary">Catatan</span>
              </h3>
              <textarea
                className="textarea textarea-bordered w-full h-[141px] mt-2"
                placeholder="Catatan mengenai laporan..."
                onChange={(e) => setCatatan(e.target.value)}
                value={catatan}
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <label
                htmlFor="my_modal_26"
                className="btn btn-white border border-primary btn-md px-6"
                onClick={() => handleAjuan(id)}
              >
                Serahkan!
              </label>
            </div>
          </div>
        </div>

        {/* konfirmasi */}
        <input type="checkbox" id="my_modal_27" className="modal-toggle" />
        <div className="modal z-[9999]">
          <div className="modal-box py-[30px] px-11 space-y-2">
            <label
              htmlFor="my_modal_27"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>

            <div className="w-full">
              <h3 className="font-bold text-xl">
                Berikan <span className="text-primary">Catatan</span>
              </h3>
              <textarea
                className="textarea textarea-bordered w-full h-[141px] mt-2"
                placeholder="Catatan mengenai laporan..."
                onChange={(e) => setCatatan(e.target.value)}
                value={catatan}
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <label
                htmlFor="my_modal_27"
                className="btn btn-white border border-primary btn-md px-6"
                onClick={() => handleKonfirmasi(id)}
              >
                Konfirmasi
              </label>
            </div>
          </div>
        </div>

        <input
          type="checkbox"
          id="my_modal_catatan_2"
          className="modal-toggle"
        />
        <div className="modal z-[9999]">
          <div className="mx-10">
            <div className="modal-box py-[15px] px-[17px] w-[300px]">
              <label
                htmlFor="my_modal_catatan_2"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
              {/* {data.catatan.length !== 0 ? (
                data.catatan.map((catatan) => (
                  <div className="mb-[14px]">
                    <h3 className="font-bold text-lg">{catatan.penulis}</h3>
                    <p className="text-[15px] mt-[3px]">{catatan.note}</p>
                    <hr className="w-full h-[2px] bg-[#808080] mt-[14px]" />
                  </div>
                ))
              ) : (
                <p>Tidak ada catatan</p>
              )} */}
            </div>
          </div>
        </div>

        <ShowImage datas={data.gambarLaporan} />
      </div>
    </div>
  );
};

export default DetailLaporan;
