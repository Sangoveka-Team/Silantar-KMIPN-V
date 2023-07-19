import Image from "next/image";

const InputLocation = () => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary font-bold text-sm">Alamat Lokasi</label>
      <div className="flex">
        <Image
          src="/icon/map.svg"
          width={24}
          height={24}
          alt="user icon"
          className="pointer-events-none"
        />
        <input
          type="text"
          required
          placeholder="Masukkan/upload alamat lokasi..."
          className="input-lapor"
        />
      </div>
      <hr className="w-full h-[2px] bg-primary" />
    </div>
  );
};

export default InputLocation;
