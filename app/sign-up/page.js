"use client";

import HeaderAuth from "@/components/HeaderAuth";
import {useUserContext} from "@/contexts/UserContext";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

const SignUp = () => {
  const route = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nomor, setNomor] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await fetch("https://api.silantar.my.id/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: nama,
        email: email,
        password: password,
        nomor: nomor,
      }),
    }).then(async (res) => {
      const data = await res.json();
      if (data.message === "register berhasil") {
        alert("silahkan cek email anda untuk verifikasi");
        route.push("/sign-in");
      } else {
        alert("email anda sudah terdaftar");
      }
    });
  };

  return (
    <div className="max-w-xl mx-auto w-full h-[640px]">
      <HeaderAuth />
      <div className="flex flex-col justify-center mt-3 max-w-[360px] mx-auto">
        <h1 className="text-lg text-center font-medium">
          Daftar <span className="text-primary block -mt-1">SILANTAR</span>
        </h1>
        <form
          className="mx-[2.625rem] mt-[1.625rem] space-y-2 w-fulls"
          onSubmit={handleSignUp}
        >
          <div className="flex flex-col">
            <label className="text-primary font-medium text-[15px]">
              Nama Lengkap
            </label>
            <div className="flex relative">
              <Image
                src="/icon/user-green.svg"
                width={24}
                height={24}
                alt="user icon"
                className="absolute left-0"
              />
              <input
                type="text"
                required
                placeholder="Masukkan nama lengkap anda..."
                className="input-lapor pl-[1.688rem]"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-primary font-medium text-[15px]">
              Akun Email
            </label>
            <div className="flex relative">
              <Image
                src="/icon/mail.svg"
                width={24}
                height={24}
                alt="mail icon"
                className="absolute left-0"
              />
              <input
                type="email"
                required
                placeholder="Masukkan email anda..."
                className="input-lapor pl-[1.688rem]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-primary font-medium text-[15px]">
              Nomor Ponsel
            </label>
            <div className="flex relative items-center">
              <span className="text-primary text-xs font-bold">+62</span>
              <input
                type="tel"
                required
                placeholder="Masukkan nomor ponsel anda..."
                className="input-lapor"
                onChange={(e) => setNomor(e.target.value)}
                value={nomor}
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-medium text-[15px]">
              Kata Sandi
            </label>
            <div className="flex relative">
              <Image
                src="/icon/lock-close.svg"
                width={24}
                height={24}
                alt="password icon"
                className="absolute left-0"
              />
              <div className="relative w-full  pl-6">
                <input
                  type={!isVisible ? "text" : "password"}
                  required
                  placeholder="Masukkan kata sandi anda..."
                  className="input-lapor"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label className="swap absolute right-0 top-0 z-0">
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
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <button
            type="submit"
            className="btn btn-green btn-xs w-full text-xs h-9 shadow-md"
          >
            Daftar
          </button>
          <div className="flex text-xs font-bold">
            <span className="font-normal">
              Sudah punya akun?{" "}
              <Link href="/sign-in" className="text-primary">
                Masuk
              </Link>
            </span>
          </div>
          <div className="flex items-center text-xs font-normal gap-1">
            <Link
              href="/"
              className="btn btn-green btn-xs h-9 w-9 p-[6px] rounded-xs"
            >
              <Image src="/icon/chevron-left.svg" width={28} height={28} />
            </Link>
            Kembali ke halaman utama
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
