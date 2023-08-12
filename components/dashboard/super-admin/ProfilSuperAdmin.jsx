"use client";

import Dropdown from "@/components/lapor/Dropdown";
import {listRole} from "@/data";
import axios from "axios";
import Image from "next/image";
import {useEffect, useState} from "react";

const ProfilSuperAdmin = () => {
  const [img, setImg] = useState(null);
  const [dataProfil, setDataProfil] = useState(null);
  const [role, setRole] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleImage = (e) => {
    const data = e.target.files[0];
    setImg(URL.createObjectURL(data));
  };

  const getDataProfil = async () => {
    await axios
      .get("https://api.silantar.my.id/api/profile-superadmin", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.payload;
          setDataProfil(data);
          setNama(data.nama);
          setEmail(data.email);
          setJabatan(data.jabatan);
          setRole(data.level);
        }
      });
  };

  useEffect(() => {
    getDataProfil();
  }, []);
  return (
    <div className="my-[18px] ml-[25px] mr-[31px] max-w-[1059px]">
      <h1 className="font-bold text-[22px]">Profil</h1>
      <div className="mt-[19px]">
        <div className="pt-[109px] pr-[109px] pl-[113px] pb-[75px] bg-white rounded-[20px] flex gap-[42px] border border-primary">
          <div className="flex">
            <div className="avatar relative">
              <label className="absolute w-[228px] overflow-hidden z-50 h-[228px] rounded-full flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="opacity-0 hidden"
                  onChange={handleImage}
                />
              </label>
              <div className="w-[228px] h-[228px] border-2 border-primary rounded-full relative">
                <Image
                  src={img ? img : "/default-image.png"}
                  width={228}
                  height={228}
                  alt="user profile"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-12 right-2 border-2 border-primary rounded-full bg-white w-[51px] h-[51px]">
                <div className="w-[29px] h-[28px] mt-[10px] ml-2">
                  <Image
                    src="/icon/upload.svg"
                    width={29}
                    height={28}
                    alt="icon upload"
                  />
                </div>
              </div>
            </div>
          </div>
          <form className="w-full">
            <div className="flex flex-wrap gap-y-[11px]">
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Nama Lengkap
                </label>
                <div className="flex">
                  <input
                    type="text"
                    required
                    placeholder="nama lengkap..."
                    className="input-lapor pl-0 text-[15px]"
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Jabatan
                </label>
                <div className="flex">
                  <input
                    type="text"
                    required
                    className="input-lapor pl-0 text-[15px]"
                    value={jabatan}
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Akun Email
                </label>
                <div className="flex">
                  <input
                    type="email"
                    required
                    disabled
                    placeholder="email..."
                    className="input-lapor pl-0 text-[15px] input-disabled disabled:bg-transparent disabled:border-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Kata Sandi
                </label>
                <div className="flex relative">
                  <input
                    type={!isVisible ? "text" : "password"}
                    required
                    placeholder="password..."
                    className="input-lapor pl-0 text-[15px]"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <label className="swap absolute right-2 top-0 z-0">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        e.target.checked
                          ? setIsVisible(false)
                          : setIsVisible(true)
                      }
                    />
                    {/* password visible */}
                    <Image
                      src="/icon/visible.svg"
                      width={24}
                      height={24}
                      alt="visible icon"
                      className="swap-off"
                    />
                    {/* password invisible*/}
                    <Image
                      src="/icon/invisible.svg"
                      width={24}
                      height={24}
                      alt="invisible icon"
                      className="swap-on"
                    />
                  </label>
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-bold text-xl">Level</label>
                <div className="flex [&>.dropdown]:pl-0 [&>.dropdown_.dropdown-content]:ml-0 [&>.dropdown_.swap]:right-2">
                  <Dropdown
                    listDatas={listRole}
                    input={role}
                    setInput={setRole}
                    placeholder={"role..."}
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="w-full mt-[2px] text-end">
                <button
                  type="button"
                  className="btn btn-green btn-sm ml-[30px] py-[9px] px-[33px] h-[46px] shadow-sm rounded-[5px] text-xl font-medium"
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilSuperAdmin;
