"use client";

import Image from "next/image";

const ImageUpload = ({imgLocation, setImgLocation}) => {
  const handleUploadImage = (e) => {
    const listFiles = e.target.files;
    const listFilesArray = Array.from(listFiles);

    const URLImageArray = listFilesArray.map((file) =>
      URL.createObjectURL(file)
    );

    setImgLocation((prev) => prev.concat(URLImageArray));
  };

  const handleResetImage = () => {
    const input = document.getElementById("input-file-laporan");
    input.value = "";
    setImgLocation([]);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary font-medium text-[15px]">
        Foto Lokasi
      </label>
      <div className="flex items-center">
        <Image
          src="/icon/camera-2.svg"
          width={24}
          height={24}
          alt="user icon"
          className="pointer-events-none"
        />
        <label
          htmlFor="my_modal_7"
          className="w-full text-xs text-[#808080] cursor-pointer pl-1"
        >
          {imgLocation.length > 0 ? (
            <>
              Lihat foto klik
              <Image
                src="/icon/check.svg"
                width={24}
                height={24}
                alt="check icon"
                className="pointer-events-none inline"
              />
            </>
          ) : (
            "Upload foto lokasi"
          )}
        </label>
      </div>
      <hr id="file-line" className="w-full h-[2px] bg-primary" />

      {/* MODAL */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my_modal_7"
            className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-center">Upload Gambar</h3>
          <div className="mx-5 my-5">
            <div className="carousel w-full">
              {imgLocation &&
                imgLocation.map((image, index) => (
                  <div
                    key={image}
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                  >
                    <button
                      type="button"
                      className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 bg-[#DC3545] hover:bg-[#a0232f]"
                      onClick={() => {
                        setImgLocation(
                          imgLocation.filter((img) => img !== image)
                        );
                        document.getElementById("input-file-laporan").value =
                          "";
                      }}
                    >
                      ✕
                    </button>
                    <Image
                      src={image}
                      width={0}
                      height={0}
                      alt={`gambar ke ${index + 1}`}
                      className="w-full h-[350px] object-contain"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                      <a
                        href={
                          index === 0
                            ? `#slide${imgLocation.length - 1}`
                            : `#slide${index - 1}`
                        }
                        className="btn btn-sm btn-circle"
                      >
                        ❮
                      </a>
                      <a
                        href={
                          index === imgLocation.length - 1
                            ? `#slide0`
                            : `#slide${index + 1}`
                        }
                        className="btn btn-sm btn-circle"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="modal-action flex flex-col">
            <div className="flex items-center justify-center gap-4">
              <label className="w-[120px] btn btn-white btn-xs py-1 px-3 h-[40px] rounded-md bg-[#2B3440] text-[#ced3da] hover:bg-[#21272e] hover:text-[#ced3da]">
                <input
                  id="input-file-laporan"
                  type="file"
                  accept="image/*"
                  className="file-input w-full max-w-xs mx-auto border border-black hidden"
                  multiple={true}
                  onChange={handleUploadImage}
                />
                Upload Foto
              </label>
              <p className="inline font-bold">
                Jumlah Foto : {imgLocation.length}
              </p>
            </div>

            {imgLocation.length > 0 && (
              <div className="flex gap-2 w-full mt-2 justify-center items-center">
                <button
                  type="button"
                  className="btn btn-green btn-xs py-1 px-3 h-[40px] rounded-md bg-[#DC3545] hover:bg-[#a0232f]"
                  onClick={handleResetImage}
                >
                  Reset Foto
                </button>
                <label
                  htmlFor="my_modal_7"
                  className="btn btn-green btn-xs py-1 px-3 h-[40px] rounded-md"
                >
                  Simpan Foto
                </label>
              </div>
            )}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
