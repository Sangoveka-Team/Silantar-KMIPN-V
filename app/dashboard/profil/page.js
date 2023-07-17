"use client";
import ProfilAdminInstansi from "@/components/dashboard/admin-instansi/ProfilAdminInstansi";
import ProfilAdminPejabat from "@/components/dashboard/admin-pejabat/ProfilAdminPejabat";
import ProfilUser from "@/components/dashboard/ProfilUser";
import ProfilSuperAdmin from "@/components/dashboard/super-admin/ProfilSuperAdmin";
import {useUserContext} from "@/contexts/UserContext";

const Profil = () => {
  const {session, setSession} = useUserContext();
  return (
    <>
      {session.user && <ProfilUser />}
      {session.superAdmin && <ProfilSuperAdmin />}
      {session.adminInstansi && <ProfilAdminInstansi />}
      {session.adminPejabat && <ProfilAdminPejabat />}
    </>
  );
};

export default Profil;
