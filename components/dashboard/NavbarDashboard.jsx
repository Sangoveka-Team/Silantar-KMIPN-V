"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

const getUserLevel = (level) => {
  const data = [
    {
      level: "Pelapor",
      link: "profile-pelapor",
    },
    {
      level: "Kelurahan",
      link: "profile-lurah",
    },
    {
      level: "Dinas",
      link: "profile-dinas",
    },
    {
      level: "Superadmin",
      link: "profile-superadmin",
    },
  ];
  return data.filter((e) => e.level === level).map((e) => e.link);
};

const NavbarDashboard = () => {
  const [nama, setNama] = useState("");
  const [img, setImg] = useState(null);
  const getDataProfil = async () => {
    if (typeof window !== "undefined") {
      await fetch(
        `https://api.silantar.my.id/api/${getUserLevel(
          localStorage.getItem("userLevel")
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then(async (res) => {
        const data = await res.json();
        setImg(data.payload.image);
        setNama(data.payload.nama);
      });
    }
  };

  useEffect(() => {
    getDataProfil();
  }, []);

  return (
    <div className="navbar bg-base-100 min-h-[39px] h-[39px] p-[6px] box-border">
      <div className="flex-1">
        <div className="relative">
          <input
            type="checkbox"
            id="sidebar-checkbox"
            className="absolute w-full h-full opacity-0"
          />
          <Image
            src="/icon/align-left.svg"
            width={24}
            height={24}
            alt="align-left icon"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-xs font-medium sm:text-base">{nama}</h1>
        <div className="avatar">
          <div className="w-7 rounded-full">
            <Image
              src={`${
                img === null
                  ? "/default-image.png"
                  : `https://media.istockphoto.com/id/1298747290/id/foto/penanaman-pohon-dan-penanaman-pohon-termasuk-penanaman-pohon-oleh-petani-dengan-tangan-ide.jpg?s=1024x1024&w=is&k=20&c=HyKeysUTLWwMIOTp2KTdDWCDD8OGdsXbCXtuqlfZwR0=`
              }`}
              width={28}
              height={28}
              alt="user image"
              className="object-center mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
