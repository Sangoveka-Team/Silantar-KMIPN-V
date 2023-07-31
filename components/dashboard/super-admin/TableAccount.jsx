"use client";

import {listDaerah} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const TableAccount = ({data}) => {
  const {refresh} = useRouter();
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [level, setLevel] = useState("Pilih level pengguna");
  const [jabatan, setJabatan] = useState("");
  const [password, setPassword] = useState("");
  const [daerah, setDaerah] = useState("");
  const [nomor, setNomor] = useState("");

  const handleFilterLevel = (e) => {
    let filtering = dummyDataAkun.filter((filter) =>
      e.target.value.includes(filter.level)
    );
    setListAkun(filtering);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {}, []);

  const handleTambahAkun = async (e) => {
    e.preventDefault();
    await fetch("https://api.silantar.my.id/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nama: nama,
        email: email,
        daerah: daerah,
        jabatan: jabatan,
        level: level,
        password: password,
        nomor: nomor,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data?.payload.errorInfo[2].includes("Duplicate")) {
          alert("akun sudah ada!");
        } else {
          alert("berhasil membuat akun");
          refresh();
        }
      })
      .catch((err) => console.log(err));

    // setEmail("");
    // setNama("");
    // setLevel("Pilih level pengguna");
    // setJabatan("");
    // setPassword("");
    // const modal = document.querySelector(".modal-toggle");
    // modal.checked = false;
  };

  return (
    <div className="mt-[21px] bg-white rounded-xl">
      {/* modal */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box pt-8 pl-[40px] pr-[45px]">
          <label
            htmlFor="my_modal_6"
            className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="flex flex-col gap-2" onSubmit={handleTambahAkun}>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Akun <span className="text-primary">Email</span>
              </label>
              <input
                type="email"
                placeholder="Masukkan alamat email..."
                required
                className="input input-xs px-3 py-[7px] h-[42px] text-lg border-[#808080] placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-primary"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Nama <span className="text-primary">Lengkap</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap..."
                required
                className="input input-xs px-3 py-[7px] h-[42px] text-lg border-[#808080] placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-primary"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">Nomor</label>
              <input
                type="tel"
                placeholder="Masukkan nomor..."
                required
                className="input input-xs px-3 py-[7px] h-[42px] text-lg border-[#808080] placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-primary"
                onChange={(e) => setNomor(e.target.value)}
                value={nomor}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Akun <span className="text-primary">Level</span>
              </label>
              <select
                className="select select-xs select-bordered w-full px-3 py-[7px] h-[42px] text-lg border-[#808080] focus:outline-none focus:border-primary"
                onChange={(e) => setLevel(e.target.value)}
              >
                <option disabled selected>
                  Pilih level pengguna
                </option>
                <option>Pelapor</option>
                <option>Super Admin</option>
                <option>Admin Instansi</option>
                <option>Admin Pejabat</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Nama <span className="text-primary">Jabatan</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan nama jabatan..."
                required
                className="input input-xs px-3 py-[7px] h-[42px] text-lg border-[#808080] placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-primary"
                onChange={(e) => setJabatan(e.target.value)}
                value={jabatan}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Nama <span className="text-primary">Daerah</span>
              </label>
              <select
                className="select select-xs select-bordered w-full px-3 py-[7px] h-[42px] text-lg border-[#808080] focus:outline-none focus:border-primary"
                onChange={(e) => setDaerah(e.target.value)}
              >
                <option disabled selected>
                  Pilih daerah pengguna
                </option>
                {listDaerah.map((daerah) => (
                  <option key={daerah.id}>{daerah.value}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-black text-xl">
                Kata <span className="text-primary">Sandi</span>
              </label>
              <input
                type="password"
                required
                placeholder="Masukkan kata sandi..."
                className="input input-xs px-3 py-[7px] h-[42px] text-lg border-[#808080] placeholder:text-lg placeholder:font-medium focus:outline-none focus:border-primary"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mt-[29px] w-full text-end">
              <button
                type="submit"
                className="btn btn-white btn-sm ml-[30px] py-[9px] px-[33px] h-[46px] shadow-sm rounded-md text-xl font-medium border-primary border-2 hover:border-primary"
              >
                Buat
              </button>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
      {/* modal */}
      <div className="py-8 px-[30px]">
        <div className="flex md:flex-row flex-col justify-between items-center gap-5">
          <div className="flex md:flex-row flex-col gap-[14px] items-center">
            <h2 className="font-bold text-[22px]">
              Akun <span className="text-primary">Pengguna</span>
            </h2>
            <label
              htmlFor="my_modal_6"
              className="btn btn-green btn-xs py-[9px] px-3 h-auto rounded-xl gap-1"
            >
              <Image
                src="/icon/add.svg"
                width={24}
                height={24}
                alt="add icon"
              />
              Tambah User
            </label>
          </div>
          <div className="flex gap-[17px]">
            <div>
              <select
                className="select select-bordered border-[#808080] text-[#808080] rounded-2xl"
                onChange={handleFilterLevel}
              >
                <option disabled selected>
                  Level
                </option>
                <option>Pelapor</option>
                <option>Super Admin</option>
                <option>Admin Instansi</option>
                <option>Admin Pejabat</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari akun..."
                className="input input-bordered w-full max-w-xs rounded-2xl border-[#808080] text-[#808080]"
                onChange={handleSearch}
              />
              <Image
                src="/icon/search-normal.svg"
                width={25}
                height={25}
                alt="search icon"
                className={`absolute right-[20px] bottom-[11px] pointer-events-none ${
                  search.length > 0 ? "hidden" : "block"
                }`}
              />
            </div>
          </div>
        </div>
        {/* TABLE */}
        <div className="mt-[26px]">
          <div className="overflow-x-auto">
            <table className="table text-[#464E5F]">
              {/* head */}
              <thead>
                <tr className="bg-[#F3F6F9]">
                  <th className="rounded-l-md">Nama Pengguna</th>
                  <th>Level</th>
                  <th>Jabatan</th>
                  <th>Daerah</th>
                  <th className="rounded-r-md">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((data, index) => (
                  <tr key={index}>
                    <th className="flex gap-[15px] items-center">
                      <div className="avatar">
                        <div className="w-[50px] h-[50px] rounded-lg">
                          <Image
                            src={`https://api.silantar.my.id/${data.image}`}
                            width={50}
                            height={50}
                            alt="avatar icon"
                          />
                        </div>
                      </div>
                      <span className="font-semibold text-sm">{data.nama}</span>
                    </th>
                    <td>{data.level}</td>
                    <td>{data.jabatan}</td>
                    <td>{data.daerah}</td>
                    <td className="text-center">
                      <Link
                        href={`/dashboard/akun/${data.id}`}
                        className="btn btn-green btn-xs py-[9px] px-3 h-auto"
                      >
                        Selengkapnya
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableAccount;
