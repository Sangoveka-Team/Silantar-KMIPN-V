"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Maps from "../Maps";

const InputLocation = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [address, setAddress] = useState([]);
  const [addressChange, setAddressChange] = useState("");

  useEffect(() => {
    address.map((data) => setAddressChange(data.display_name));
  }, [address, setAddress]);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary font-medium text-[15px]">
        Alamat Lokasi
      </label>
      <div className="flex items-center">
        <Image
          src="/icon/map.svg"
          width={24}
          height={24}
          alt="user icon"
          className="pointer-events-none"
        />
        <label
          htmlFor="my_modal_8"
          className="w-full text-xs text-[#808080] cursor-pointer pl-1"
        >
          Masukkan/upload alamat lokasi...
        </label>
      </div>
      <hr className="w-full h-[2px] bg-primary" />

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_8"
        className="modal-toggle"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <div className="modal">
        <div className="modal-box w-full h-full rounded-none p-0 m-0 max-h-full max-w-full">
          <label
            htmlFor="my_modal_8"
            className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 z-[999] bg-[#DC3545] hover:bg-[#a0232f]"
          >
            ✕
          </label>
          <div className="z-[999] absolute w-full flex justify-center pointer-events-none">
            <div className="w-64">
              {isChecked && (
                <textarea
                  className="textarea textarea-bordered w-full max-w-md z-[999] mt-3  focus:outline-none shadow-md border-none pointer-events-auto h-24"
                  placeholder="Lokasi"
                  value={addressChange}
                  onChange={(e) => setAddressChange(e.target.value)}
                ></textarea>
              )}
            </div>
          </div>
          <Maps address={address} setAddress={setAddress} />
        </div>
      </div>
    </div>
  );
};

export default InputLocation;
