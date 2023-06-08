"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="max-w-xl mx-auto w-full h-[640px]">
      <div className="mx-auto max-w-xl bg-[url('/Ellipse.svg')] w-full h-[12.5rem] bg-no-repeat bg-top relative flex justify-center">
        <Image
          src="/logo-2.svg"
          width={117}
          height={100}
          className="absolute bottom-2"
        />
      </div>
      <div className="flex flex-col justify-center mt-3 max-w-[360px] mx-auto">
        <h1 className="text-[0.938rem] text-center font-bold">
          Masuk <span className="text-primary block -mt-1">SILANTAR</span>
        </h1>
        <form className="mx-[2.625rem] mt-[1.625rem] space-y-2 w-fulls">
          <div className="flex flex-col">
            <label className="text-primary font-bold text-sm">Akun Email</label>
            <div className="flex">
              <Image
                src="/icon/mail.svg"
                width={28}
                height={28}
                alt="mail icon"
              />
              <input
                type="email"
                required
                placeholder="Masukkan email anda..."
                className="input-lapor"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">Kata Sandi</label>
            <div className="flex">
              <Image
                src="/icon/lock-close.svg"
                width={28}
                height={28}
                alt="password icon"
              />
              <div className="relative w-full">
                <input
                  type={!isVisible ? "text" : "password"}
                  required
                  placeholder="Masukkan kata sandi anda..."
                  className="input-lapor"
                />
                <button
                  className="absolute right-0 top-0 z-0"
                  type="button"
                  onClick={() => setIsVisible((prev) => !prev)}
                >
                  <Image
                    src="/icon/visible.svg"
                    width={28}
                    height={28}
                    alt="visible icon"
                    className={!isVisible ? "opacity-50" : ""}
                  />
                </button>
              </div>
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <button type="submit" className="btn-green py-3 w-full">
            Masuk
          </button>
          <div className="flex gap-[51px] text-xs font-bold">
            <span>
              Belum punya akun?{" "}
              <Link href="/sign-up" className="text-primary">
                Daftar
              </Link>
            </span>
            <Link href="/forgot-password" className="text-primary">
              Lupa sandi?
            </Link>
          </div>
          <div className="flex items-center text-xs font-bold gap-1">
            <Link
              href="/"
              className="btn-green p-[6px] rounded-xs hover:bg-primary"
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

export default SignIn;
