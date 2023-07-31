"use client";

import {useUserContext} from "@/contexts/UserContext";
import {
  adminInstansiRole,
  adminPejabatRole,
  superAdminRole,
  userRole,
} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {redirect, usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const {push} = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState([]);

  const handleLogout = async () => {
    if (typeof window !== "undefined") {
      await fetch("https://api.silantar.my.id/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          localStorage.setItem("token", "");
          push("/sign-in");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    localStorage.getItem("userLevel") === "Pelapor" && setRole(userRole);
    localStorage.getItem("userLevel") === "Superadmin" &&
      setRole(superAdminRole);
    localStorage.getItem("userLevel") === "Dinas" && setRole(adminInstansiRole);
    localStorage.getItem("userLevel") === "Kelurahan" &&
      setRole(adminPejabatRole);
  }, []);

  return (
    <div
      className={`bg-primary pt-2 px-3 z-[999] ${
        isOpen ? "w-[13.438rem]" : "w-12"
      } h-full fixed`}
    >
      <Link href="/">
        <Image
          src="/logo-silantar.svg"
          width={25}
          height={25}
          alt="logo icon"
        />
      </Link>
      <ul className="flex flex-col gap-5 mt-2">
        {role.map((data, index) => (
          <li key={index}>
            <Link href={data.link} className="flex items-center gap-[0.313rem]">
              <Image
                src={`/icon/${
                  pathname === `${data.link}`
                    ? `${data.iconActive}`
                    : `${data.icon}`
                }.svg`}
                width={24}
                height={24}
                alt="dashboard icon"
              />
              <span
                className={`font-bold text-[0.938rem] ${
                  pathname === `${data.link}` ? "text-black" : "text-white"
                } ${isOpen ? "block" : "hidden"}`}
              >
                Dashboard
              </span>
            </Link>
          </li>
        ))}
        <li>
          <button
            className="flex items-center gap-[0.313rem]"
            onClick={handleLogout}
          >
            <Image
              src="/icon/fold.svg"
              width={24}
              height={24}
              alt="log-out icon"
            />
            <span
              className={`font-bold text-[0.938rem] text-white ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Log-Out
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
