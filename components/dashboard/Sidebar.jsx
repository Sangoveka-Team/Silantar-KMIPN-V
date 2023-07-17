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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState([]);
  const {session, setSession} = useUserContext();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    session.superAdmin && setRole(superAdminRole);
    session.user && setRole(userRole);
    session.adminInstansi && setRole(adminInstansiRole);
    session.adminPejabat && setRole(adminPejabatRole);
  }, []);

  if (!session.isAuth) {
    redirect("/sign-in");
  }

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
            onClick={() => {
              setSession({
                isAuth: false,
                user: false,
                superAdmin: false,
                adminInstansi: false,
              });
            }}
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
