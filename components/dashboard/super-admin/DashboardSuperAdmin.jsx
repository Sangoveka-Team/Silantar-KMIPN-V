"use client";
import {useEffect, useState} from "react";
import CardInfo from "./CardInfo";
import TableAccount from "./TableAccount";

const DashboardSuperAdmin = () => {
  const [data, setData] = useState(null);
  const getDataDashboard = async () => {
    await fetch("https://api.silantar.my.id/api/dashboard-superadmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      setData(data.payload);
    });
  };

  useEffect(() => {
    getDataDashboard();
  }, []);

  if (data === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <h1 className="font-bold text-[22px]">Dashboard</h1>
      <CardInfo data={data} />
      <TableAccount data={data.allUser} />
    </div>
  );
};

export default DashboardSuperAdmin;
