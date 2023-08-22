import Image from "next/image";

const ShowImage = ({datas}) => {
  return (
    <>
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal z-[9999]">
        <div className="modal-box">
          <label
            htmlFor="my_modal_5"
            className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-center">Gambar Laporan</h3>
          <div className="mx-5 my-5">
            <div className="carousel w-full">
              {datas.map((data, index) => (
                <div
                  key={index}
                  id={`slide${index}`}
                  className="carousel-item relative w-full"
                >
                  <Image
                    src={`https://api.silantar.my.id/${data.image_name}`}
                    width={0}
                    height={0}
                    alt={`gambar ke ${index + 1}`}
                    className="w-full h-[400px] object-contain"
                    unoptimized
                  />

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a
                      href={
                        index === 0
                          ? `#slide${datas.length - 1}`
                          : `#slide${index - 1}`
                      }
                      className="btn btn-sm btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={
                        index === datas.length - 1
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
        </div>
      </div>
    </>
  );
};

export default ShowImage;
