"use client";
import ProfilAdminInstansi from "@/components/dashboard/admin-instansi/ProfilAdminInstansi";
import ProfilAdminPejabat from "@/components/dashboard/admin-pejabat/ProfilAdminPejabat";
import ProfilUser from "@/components/dashboard/ProfilUser";
import ProfilSuperAdmin from "@/components/dashboard/super-admin/ProfilSuperAdmin";
import {useUserContext} from "@/contexts/UserContext";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";

const Profil = () => {
  const [userLevel, setUserLevel] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token") === "") redirect("/sign-in");
    }
  }, []);

  useEffect(() => {
    setUserLevel(localStorage.getItem("userLevel"));
  }, []);

  if (userLevel === null)
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  return (
    <>
      {userLevel === "Pelapor" && <ProfilUser />}
      {userLevel === "Superadmin" && <ProfilSuperAdmin />}
      {userLevel === "Dinas" && <ProfilAdminInstansi />}
      {userLevel === "Kelurahan" && <ProfilAdminPejabat />}
    </>
  );
};

export default Profil;
