"use client";

import HeaderAuth from "@/components/HeaderAuth";
import {useUserContext} from "@/contexts/UserContext";
import Image from "next/image";
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const SignIn = () => {
  const route = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const {session, setSession} = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (session.isAuth) {
    redirect("/dashboard");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (document.cookie.split("=")[2] === "") {
      await fetch("http://127.0.0.1:8000/api/login", {
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
          document.cookie = `token=${data.payload}`;
          route.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("anda sudah login");
    }
  };

  useEffect(() => {
    console.log(document.cookie.split("=")[2]);
  }, []);

  return (
    <div className="max-w-xl mx-auto w-full h-[640px]">
      <HeaderAuth />
      <div className="flex flex-col justify-center mt-3 max-w-[360px] mx-auto">
        <h1 className="text-[0.938rem] text-center font-bold">
          Masuk <span className="text-primary block -mt-1">SILANTAR</span>
        </h1>
        <form
          className="mx-[2.625rem] mt-[1.625rem] space-y-2 w-fulls"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col">
            <label className="text-primary font-bold text-sm" htmlFor="email">
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
              className="text-primary font-bold text-sm"
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
            // onClick={(e) => {
            //   e.preventDefault();
            //   setSession({
            //     isAuth: true,
            //     user: false,
            //     superAdmin: true,
            //   });
            // }}
            className="btn btn-xs btn-green w-full text-xs h-9"
          >
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
      </div>
    </div>
  );
};

export default SignIn;
