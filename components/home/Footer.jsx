import Image from "next/image";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="bg-[#cdebda]">
      <div className="pt-3 px-[64px] sm:px-[84px] pb-[15px] sm:flex sm:justify-center sm:pt-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/icon/logo.svg"
              width={35}
              height={36}
              alt="logo footer"
              className="w-[35px] h-[36px] -mb-[7px]"
            />
            <h1 className="text-shadow-primary shadow-black text-[32px] text-primary font-bold font-outline-2">
              SILANTAR
            </h1>
          </div>
          <h3 className="mt-[13px] mb-[26px] text-center text-primary font-bold text-[15px]">
            Hubungi Kami
          </h3>
        </div>

        <div className="pl-12 text-black sm:pt-5">
          <div className="flex items-center gap-1">
            <Image
              src="/icon/internet.svg"
              width={19}
              height={17}
              className="text-primary w-[19px] h-[17px]"
              alt="alamat icon"
            />
            <p className="text-[10px] font-bold">
              Kalimantan Selatan, Indonesia.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icon/mail.svg"
              width={19}
              height={17}
              className="w-[19px] h-[17px]"
              alt="email icon"
            />
            <p className="text-[10px] font-bold underline underline-offset-2">
              silantar@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icon/support.svg"
              width={19}
              height={17}
              className="w-[19px] h-[17px]"
              alt="telp icon"
            />
            <p className="text-[10px] font-bold">+62 8963228323</p>
          </div>
        </div>
      </div>
      <div className="bg-[#a6b7ad] px-10 py-[9px] box-border text-white flex gap-1 items-center w-full justify-center flex-wrap">
        <label className="font-bold text-[0.85rem] sm:text-[0.94rem]">
          Berikan Masukan:
        </label>
        <input
          type="text"
          className="input w-[101px] h-5 bg-white text-black text-xs"
        />
        <button className="btn btn-green btn-xs w-[48px] h-5 text-[0.625rem]">
          Kirim
        </button>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
