"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {customIcon} from "./Marker";
import ShowImage from "./ShowImage";

const CardDetailLaporan = ({data}) => {
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // lat: -3.332062,
  // lng: 114.580431,

  return (
    <>
      <div className="flex items-center my-[7px] font-medium text-[15px]">
        <Link href="/dashboard/riwayat">
          <Image
            src="/icon/arrow-left-black.svg"
            width={24}
            height={24}
            alt="arrow left"
            className="mr-2"
          />
        </Link>
        <h2>{data.category}</h2>
      </div>
      <div className="bg-white py-[22px] px-[20px] rounded-[10px] min-w-[293px] max-w-sm h-auto flex flex-col border-[#808080] border">
        <label className="h-auto mx-auto cursor-pointer" htmlFor="my_modal_5">
          <Image
            src={data.img[0]}
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
            {data.status}
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
              {data.ticket}
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
            <p className="text-[#808080]">{data.date}</p>
          </div>
          <div className="flex items-center font-medium text-[15px] gap-[7px]">
            <Image
              src="/icon/map-abu.svg"
              width={24}
              height={24}
              alt="maps image"
            />
            <p className="text-[#808080]">{data.address}</p>
          </div>
        </div>
        <label
          htmlFor="my_modal_12"
          className="w-full h-[130px] cursor-pointer"
          onClick={() => setShowMap(true)}
        >
          {!showMap && (
            <MapContainer
              center={[data.gl.lat, data.gl.lng]}
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
                position={[data.gl.lat, data.gl.lng]}
                icon={customIcon}
              ></Marker>
            </MapContainer>
          )}
        </label>
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
                center={[data.gl.lat, data.gl.lng]}
                zoom={13}
                style={{height: "100vh"}}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.gl.lat, data.gl.lng]} icon={customIcon}>
                  <Popup>{data.address}</Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>

      <ShowImage datas={data.img} />
    </>
  );
};

export default CardDetailLaporan;
