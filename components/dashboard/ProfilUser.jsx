import Image from "next/image";
import FormProfil from "../profil/FormProfil";

const ProfilUser = () => {
  return (
    <div className="p-2 relative sm:max-w-xl sm:mx-auto">
      <h1 className="font-bold text-[0.938rem] sm:text-2xl">
        Profil <span className="text-primary">Pengguna</span>
      </h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[181px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-[10px] py-2 px-3 font-bold min-h-[33px] h-auto relative">
            Tiba dihalaman profil anda!
            <Image
              src="/icon/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown icon"
              className="absolute right-0 top-1"
            />
          </summary>
          <div className="collapse-content pt-0 pb-2 px-3">
            <p className="text-[8px] font-normal">
              Dihalaman ini anda dapat menyunting informasi anda yang dibutuhkan
              untuk website ini.
            </p>
          </div>
        </details>
      </div>
      <FormProfil />
    </div>
  );
};

export default ProfilUser;
