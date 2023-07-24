"use client";
import ShowImage from "@/components/ShowImage";
import {dummyImage} from "@/data";
import Image from "next/image";
import Maps from "@/components/Maps";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useEffect, useState} from "react";
import {customIcon} from "@/components/Marker";
import Link from "next/link";

const RiwayatDetail = ({params}) => {
  const [showMap, setShowMap] = useState(false);
  const [address, setAddress] = useState([]);
  const gl = {
    lat: -3.332062,
    lng: 114.580431,
  };

  const getAddress = async () => {
    await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${gl.lat}&lon=${gl.lng}`
    )
      .then(async (res) => {
        const data = await res.json();
        setAddress([data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="py-[0.375rem] px-2 w-auto">
      <h1 className="text-[15px] font-semibold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <div className="flex items-center my-[7px] font-medium text-[15px]">
        <Link href="/dashboard/riwayat">
          <Image
            src="/icon/arrow-left.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </Link>
        <h2>Arus Lalu Lintas</h2>
      </div>

      <div className="bg-white py-[22px] px-[20px] rounded-[10px] min-w-[293px] max-w-sm h-auto flex flex-col border-[#808080] border">
        <label className="h-auto mx-auto cursor-pointer" htmlFor="my_modal_5">
          <Image
            src={dummyImage[0].img}
            width={0}
            height={0}
            alt="gambar image"
            className="w-[253px] h-[215px] object-contain mx-auto"
            unoptimized
          />
        </label>
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <h2 className="font-normal text-lg text-[#808080] mt-[17px]">
            Status
          </h2>
          <span className="bg-[#FFCECE] text-[#FF2222] rounded-xl px-[7px] py-[3px] text-xs font-semibold w-auto">
            Ditolak
          </span>
        </div>
        <div className="flex flex-col my-[6px] gap-[5px]">
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/barcode.svg"
              width={24}
              height={24}
              alt="barcode image"
            />
            <p id="ticket-id" className="text-[#808080]">
              2348748247623423
            </p>
            <button type="button" className="text-primary">
              Salin
            </button>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/alter-circle.svg"
              width={24}
              height={24}
              alt="alter circle image"
            />
            <p className="text-[#808080]">Catatan</p>
            <button type="button" className="text-primary">
              Lihat
            </button>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/calendar.svg"
              width={24}
              height={24}
              alt="calendar image"
            />
            <p className="text-[#808080]">17-07-2023</p>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/map-abu.svg"
              width={24}
              height={24}
              alt="maps image"
            />
            <p className="text-[#808080]">Jl. Kayutangi</p>
          </div>
        </div>
        <label
          htmlFor="my_modal_12"
          className="w-full h-[130px] cursor-pointer"
          onClick={() => setShowMap(true)}
        >
          {!showMap && (
            <MapContainer
              center={[gl.lat, gl.lng]}
              zoom={13}
              style={{height: "130px"}}
              zoomControl={false}
              dragging={false}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[gl.lat, gl.lng]} icon={customIcon}></Marker>
            </MapContainer>
          )}
        </label>
        <div className="mt-[7px]">
          <h2 className="text-primary font-medium text-lg">
            Deskripsi Laporan
          </h2>
          <p className="text-[15px] font-normal text-[#808080]">
            Kerusakan lampu lalu lintas didaerah kayutangi, alur pengendara jadi
            terganggu
          </p>
        </div>

        <input type="checkbox" id="my_modal_12" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-full h-full rounded-none p-0 m-0 max-h-full max-w-full">
            <label
              htmlFor="my_modal_12"
              onClick={() => setShowMap(false)}
              className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 z-[999] bg-[#DC3545] hover:bg-[#a0232f]"
            >
              ✕
            </label>
            {showMap && (
              <MapContainer
                center={[gl.lat, gl.lng]}
                zoom={13}
                style={{height: "100vh"}}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[gl.lat, gl.lng]} icon={customIcon}>
                  {address.map((data, index) => (
                    <Popup key={index}>{data.display_name}</Popup>
                  ))}
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>

      <ShowImage datas={dummyImage} />
    </div>
  );
};

export default RiwayatDetail;
