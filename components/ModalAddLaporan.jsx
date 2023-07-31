"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React from "react";

const ModalAddLaporan = ({showModal, setShowModal, ticket}) => {
  const route = useRouter();
  return (
    <>
      <input
        type="checkbox"
        id="my_modal_10"
        className="modal-toggle"
        checked={showModal ? true : false}
      />
      <div className="modal">
        <div className="modal-box w-auto mx-[42px] flex justify-center items-center flex-col">
          <label
            htmlFor="my_modal_10"
            onClick={() => setShowModal(false)}
            className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-medium text-base text-center">
            Laporan anda sudah{" "}
            <span className="text-primary block">dikirim!</span>
          </h3>
          <Image
            src="/lapor/image-modal.svg"
            width={108}
            height={116}
            alt="image modal lapor"
            className="mt-[14px] mb-[7px]"
          />
          <p className="text-[15px] font-normal">Tiket laporan anda:</p>
          <div className="form-control mt-[7px]">
            <label className="input-group">
              <input
                type="text"
                placeholder="0.01"
                className="input input-bordered input-sm focus:outline-none border-primary text-primary"
                value={ticket}
              />
              <button
                id="salin-button"
                className="btn btn-green btn-sm h-full font-medium text-[15px]"
              >
                Salin
              </button>
            </label>
          </div>
          <p className="text-[15px] font-medium text-center my-[9px]">
            Terima kasih telah melapor! Anda dapat memantau status laporan
            dengan tiket diatas, ke fitur{" "}
            <span className="font-bold">“Lacak laporan”</span> kami.{" "}
          </p>
          <label
            htmlFor="my_modal_10"
            className="btn btn-green btn-sm font-medium text-[15px] px-4"
            onClick={() => {
              setShowModal(false);
              route.push(`/lacak/${ticket}`);
            }}
          >
            Oke
          </label>
        </div>
      </div>
    </>
  );
};

export default ModalAddLaporan;
