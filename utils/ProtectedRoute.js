"use client";

import {useUserContext} from "@/contexts/UserContext";
import {redirect} from "next/navigation";
import {useEffect} from "react";

export default function ProtectedRoute({children}) {
  const {session, setSession} = useUserContext();
  if (!session.isAuth) {
    return redirect("/sign-in");
  }

  return <>{children}</>;
}
