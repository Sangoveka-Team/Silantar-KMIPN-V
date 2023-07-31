"use client";

import Image from "next/image";
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const FormSignIn = () => {
  const {push} = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [messageErr, setMessageErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("https://api.silantar.my.id/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.message === "Login Failed") {
          setMessageErr("Email atau Password anda salah");
        } else {
          setMessageErr("Berhasil login....");
          if (typeof window !== "undefined") {
            localStorage.setItem("token", data.payload.token);
            localStorage.setItem("userLevel", data.payload.userLevel);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Failed to fetch") {
          alert("maaf server sedang error");
        }
        if (err.message === "Login Failed") {
          setMessageErr("Email atau Password anda salah");
        }
      });
  };

  if (localStorage.getItem("token") !== "") redirect("/dashboard");

  return (
    <>
      <p className="text-center font-bold mt-2">{messageErr}</p>

      <form
        className="mx-[2.625rem] mt-[1.625rem] space-y-2 w-fulls"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col">
          <label
            className="text-primary font-medium text-[15px]"
            htmlFor="email"
          >
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
              id="email"
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
        <div className="flex flex-col gap-1">
          <label
            className="text-primary font-medium text-[15px]"
            htmlFor="password"
          >
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
            <div className="relative w-full pl-[1.688rem]">
              <input
                id="password"
                type={!isVisible ? "text" : "password"}
                required
                placeholder="Masukkan kata sandi anda..."
                className="input-lapor p-0"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="swap absolute right-0 top-0 z-0">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    e.target.checked ? setIsVisible(false) : setIsVisible(true)
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
          className="btn btn-xs btn-green w-full text-xs h-9 shadow-md"
        >
          Masuk
        </button>
        <div className="flex gap-10 text-xs">
          <span className="font-normal">
            Belum punya akun?{" "}
            <Link href="/sign-up" className="text-primary font-bold">
              Daftar
            </Link>
          </span>
          <Link href="/forgot-password" className="text-primary font-bold">
            Lupa sandi?
          </Link>
        </div>
        <div className="flex items-center text-xs font-normal gap-1">
          <Link
            href="/"
            className="btn btn-green btn-xs h-9 w-9 p-[6px] rounded-xs"
          >
            <Image
              src="/icon/chevron-left.svg"
              width={28}
              height={28}
              alt="back icon"
            />
          </Link>
          Kembali ke halaman utama
        </div>
      </form>
    </>
  );
};

export default FormSignIn;
