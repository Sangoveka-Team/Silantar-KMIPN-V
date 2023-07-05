"use client";

import HeaderAuth from "@/components/HeaderAuth";
import {useUserContext} from "@/contexts/UserContext";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {useState} from "react";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const {session, setSession} = useUserContext();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="max-w-xl mx-auto w-full h-[640px]">
      <HeaderAuth />
      <div className="flex flex-col justify-center mt-3 max-w-[360px] mx-auto">
        <h1 className="text-[0.938rem] text-center font-bold">
          Daftar <span className="text-primary block -mt-1">SILANTAR</span>
        </h1>
        <form className="mx-[2.625rem] mt-[1.625rem] space-y-2 w-fulls">
          <div className="flex flex-col">
            <label className="text-primary font-bold text-sm">
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
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-primary font-bold text-sm">Akun Email</label>
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
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-primary font-bold text-sm">
              Nomor Ponsel
            </label>
            <div className="flex relative">
              <Image
                src="/icon/phone.svg"
                width={20}
                height={20}
                alt="phone icon"
                className="absolute left-0"
              />
              <input
                type="tel"
                required
                placeholder="Masukkan nomor ponsel anda..."
                className="input-lapor pl-[1.625rem]"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">Kata Sandi</label>
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
                    className="swap-on"
                  />
                  {/* password invisible*/}
                  <Image
                    src="/icon/invisible.svg"
                    width={24}
                    height={24}
                    alt="invisible icon"
                    className="swap-off"
                  />
                </label>
              </div>
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <button
            type="submit"
            className="btn btn-green btn-xs w-full text-xs h-9"
          >
            Daftar
          </button>
          <div className="flex gap-[51px] text-xs font-bold">
            <span>
              Sudah punya akun?{" "}
              <Link href="/sign-in" className="text-primary">
                Masuk
              </Link>
            </span>
          </div>
          <div className="flex items-center text-xs font-bold gap-1">
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
