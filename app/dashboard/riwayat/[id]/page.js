"use client";
import ShowImage from "@/components/ShowImage";
import {dummyImage} from "@/data";
import Image from "next/image";
import Maps from "@/components/Maps";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useEffect, useState} from "react";
import {customIcon} from "@/components/Marker";
import Link from "next/link";
import CardDetailLaporan from "@/components/CardDetailLaporan";

const RiwayatDetail = ({params}) => {
  const dummyDataLaporan = {
    category: "Arus Lalu Lintas",
    gl: {
      lat: -3.334557,
      lng: 114.577838,
    },
    img: [
      "/dummy-images/traffic-lights.png",
      "/dummy-images/polluted-river.png",
      "/dummy-images/scattered-tree-branches.png",
    ],
    status: "Ditolak",
    ticket: "2348748247623423",
    catatan: "lorem Ipsum dolor sit amet, consectetur adipiscing el",
    date: "17-07-2023",
    address: "Jl. kayu tangi 2",
    deskripsi:
      "Kerusakan lampu lalu lintas didaerah kayutangi, alur pengendara jadi terganggujkadkjawdawdiub",
  };

  return (
    <div className="py-[0.375rem] px-2 w-auto">
      <h1 className="text-[15px] font-semibold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <CardDetailLaporan data={dummyDataLaporan} />
    </div>
  );
};

export default RiwayatDetail;
