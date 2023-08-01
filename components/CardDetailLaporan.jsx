"use client";

import copy from "copy-to-clipboard";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import ColorStatus from "./ColorStatus";
import {customIcon} from "./Marker";
import ShowImage from "./ShowImage";

const CardDetailLaporan = ({data, images, backUrl}) => {
  // const fetchUrl = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&";
  const pathname = usePathname();
  const [showMap, setShowMap] = useState(false);
  // const [image, setImage] = useState(images[0]);
  // const [address, setAddress] = useState("");

  // const getAddress = async () => {
  //   await fetch(`${fetchUrl}lat=${data.gl.lat}&lon=${data.gl.lng}`)
  //     .then(async (res) => {
  //       const datas = await res.json();
  //       setAddress(datas.display_name);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getAddress();
  // }, []);

  // console.log(data);

  console.log(data);
  return (
    <>
      {/* Put this part before </body> tag */}
      {/* {pathname !== `/lacak/${data.id_laporan}` && (
        <>
          
        </>
      )} */}
      <input type="checkbox" id="my_modal_catatan" className="modal-toggle" />
      <div className="modal z-[9999]">
        <div className="mx-10">
          <div className="modal-box py-[15px] px-[17px] w-[300px]">
            <label
              htmlFor="my_modal_catatan"
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
      <div className="flex items-center my-[7px] font-medium text-[15px]">
        <Link href={backUrl}>
          <Image
            src="/icon/arrow-left-black.svg"
            width={24}
            height={24}
            alt="arrow left"
            className="mr-2"
          />
        </Link>
        <h2>{data.kategori_lapor}</h2>
      </div>
      <div className="bg-white py-[22px] px-[20px] rounded-[10px] min-w-[293px] max-w-sm h-auto flex flex-col border-[#808080] border">
        <label className="h-auto mx-auto cursor-pointer" htmlFor="my_modal_5">
          <Image
            src={`https://api.silantar.my.id/${images[0].image_name}`}
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
          <ColorStatus title={data.status_lapor} />
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
              {data.id_laporan}
            </p>
            <button
              onClick={() => copy(data.id_laporan)}
              type="button"
              className="text-primary"
            >
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
            <label
              htmlFor="my_modal_catatan"
              className="text-primary cursor-pointer"
            >
              Lihat
            </label>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/calendar.svg"
              width={24}
              height={24}
              alt="calendar image"
            />
            <p className="text-[#808080]">{data.tanggal}</p>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/map-abu.svg"
              width={24}
              height={24}
              alt="maps image"
            />
            <p className="text-[#808080]">{data.alamat}</p>
          </div>
        </div>
        <label
          htmlFor="my_modal_12"
          className="w-full h-[130px] cursor-pointer"
          onClick={() => setShowMap(true)}
        >
          {!showMap && (
            <MapContainer
              center={data.maps.split(",")}
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
              <Marker
                position={data.maps.split(",")}
                icon={customIcon}
              ></Marker>
            </MapContainer>
          )}
        </label>
        <div className="mt-[7px]">
          <h2 className="text-primary font-medium text-lg">Kelurahan</h2>
          <p className="text-[15px] font-normal text-[#808080]">
            {data.daerah_kelurahan}
          </p>
        </div>
        <div className="mt-[7px]">
          <h2 className="text-primary font-medium text-lg">Nama Pelapor</h2>
          <p className="text-[15px] font-normal text-[#808080]">
            {pathname.includes("/dashboard/riwayat") ? data.nama : "Anonim"}
          </p>
        </div>
        <div className="mt-[7px]">
          <h2 className="text-primary font-medium text-lg">
            Deskripsi Laporan
          </h2>
          <p className="text-[15px] font-normal text-[#808080]">
            {data.deskripsi}
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
                center={data.maps.split(",")}
                zoom={13}
                style={{height: "100vh"}}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={data.maps.split(",")} icon={customIcon}>
                  <Popup>{data.alamat}</Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>

      <ShowImage datas={images} />
    </>
  );
};

export default CardDetailLaporan;
