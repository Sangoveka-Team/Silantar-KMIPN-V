"use client";

import {listDaerah} from "@/data";
import Image from "next/image";
import {useState} from "react";
import DropdownWhatsapp from "./DropdownWhatsapp";

const dataDinas = [
  {
    value: "Dinas Perhubungan",
    nomor: "085821791552",
  },
  {
    value: "Dinas Sosial",
    nomor: "081928309111",
  },
  {
    value: "Dinas Lingkungan Hidup",
    nomor: "085809218301",
  },
  {
    value: "Dinas Ketahanan Pangan",
    nomor: "085892183092",
  },
  {
    value: "Dinas KPS",
    nomor: "087216978919",
  },
];

const WhatsappBox = () => {
  const [dinas, setDinas] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [numberWhatsapp, setNumberWhatsapp] = useState("");
  // ?text=
  const mobileWA = "https://wa.me/";
  // &text=
  const notMobileWA = "https://web.whatsapp.com/send/?phone=+";

  const handleSend = (nomor) => {
    const send = navigator.userAgent.includes("Android")
      ? `${mobileWA}${nomor}?text=Halo%20saya%20ingin%20mengirim%20aduan`
      : `${notMobileWA}${nomor}&text=Halo%20saya%20ingin%20mengirim%20aduan`;
    return send;
  };
  return (
    <div className="relative z-[999]">
      <label
        htmlFor="my_modal_whatsapp"
        className="btn btn-green bg-[#25D366] btn-xs fixed bottom-[53px] right-7 w-10 h-10 rounded-full shadow-md"
      >
        <Image
          src="/icon/whatsapp-icon.svg"
          width={24}
          height={24}
          alt="whatsapp image"
          className="pointer-events-none"
        />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_whatsapp" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box box-border absolute bottom-[53px] right-7 w-[310px] h-[295px] py-4 px-[22px] flex flex-col">
          <div className="flex justify-between w-full">
            <div className="flex gap-[5px]">
              <div className="w-[27px] h-[27px] bg-[#25D366] rounded-full flex items-center justify-center">
                <Image
                  src="/icon/whatsapp-icon.svg"
                  width={14}
                  height={14}
                  alt="whatsapp icon"
                />
              </div>
              <p className="text-primary font-semibold text-lg">Hubungi Kami</p>
            </div>
            <label
              htmlFor="my_modal_whatsapp"
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </label>
          </div>
          <hr className="w-full h-[2px] bg-[#AAAAAA] mt-[11px] mb-[14px]" />
          <div className="mt-[14px] mb-3 mx-[22px] relative h-auto space-y-3">
            <DropdownWhatsapp
              data={dataDinas}
              title="Dinas"
              value={dinas}
              setValue={setDinas}
              numberWhatsapp={setNumberWhatsapp}
            />
            <DropdownWhatsapp
              data={listDaerah}
              title="Kelurahan"
              value={kelurahan}
              setValue={setKelurahan}
              numberWhatsapp={setNumberWhatsapp}
            />
            <p className="text-sm text-center">
              <span className="font-bold">note:</span> Pilih salah satu yang
              ingin dihubungi
            </p>

            <div className="flex justify-center">
              <a
                href={handleSend(numberWhatsapp)}
                className="w-[156px] h-[30px] btn btn-green btn-xs bg-[#25D366] text-sm font-semibold"
              >
                <Image
                  src="/icon/whatsapp-icon.svg"
                  width={18}
                  height={17}
                  alt="whatsapp icon"
                />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappBox;
