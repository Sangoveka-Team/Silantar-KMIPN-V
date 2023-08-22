"use client";
import HeaderAuth from "@/components/HeaderAuth";
import dynamic from "next/dynamic";
import {redirect} from "next/navigation";
import {useEffect} from "react";

const FormSignInDynamic = dynamic(
  () => import("../../components/sign-in/FormSignIn"),
  {ssr: false}
);

const SignIn = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token") !== "") redirect("/dashboard");
    }
  }, []);
  return (
    <div className="max-w-xl mx-auto w-full h-[640px]">
      <HeaderAuth />
      <div className="flex flex-col justify-center mt-3 max-w-[360px] mx-auto">
        <h1 className="text-lg text-center font-medium">
          Masuk <span className="text-primary block -mt-1">SILANTAR</span>
        </h1>
        <FormSignInDynamic />
      </div>
    </div>
  );
};

export default SignIn;
