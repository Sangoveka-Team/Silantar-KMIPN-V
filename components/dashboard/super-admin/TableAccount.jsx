"use client";

import Image from "next/image";
import {useState} from "react";

const TableAccount = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-[21px] bg-white rounded-xl">
      <div className="py-8 px-[30px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[14px] items-center">
            <h2 className="font-bold text-[22px]">
              Akun <span className="text-primary">Pengguna</span>
            </h2>
            <button className="btn btn-green btn-xs py-[9px] px-3 h-auto rounded-xl gap-1">
              <Image
                src="/icon/add.svg"
                width={24}
                height={24}
                alt="add icon"
              />
              Tambah User
            </button>
          </div>
          <div className="flex gap-[17px]">
            <div>
              <select className="select select-bordered border-[#808080] text-[#808080] w-full max-w-xs rounded-2xl">
                <option disabled selected>
                  Level
                </option>
                <option>User</option>
                <option>Admin</option>
                <option>Pejabat Setempat</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari laporan....."
                className="input input-bordered w-full max-w-xs rounded-2xl border-[#808080] text-[#808080]"
                onChange={(e) => setSearch(e.target.value)}
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
                <tr>
                  <th className="flex gap-[15px] items-center">
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] rounded-lg">
                        <Image
                          src="/dashboard/3.jpg"
                          width={50}
                          height={50}
                          alt="avatar icon"
                        />
                      </div>
                    </div>
                    <span className="font-semibold text-sm">
                      Bhakti Ramadhani
                    </span>
                  </th>
                  <td>Super Admin</td>
                  <td>Developer SILANTAR</td>
                  <td>-</td>
                  <td>
                    <button className="btn btn-green btn-xs py-[9px] px-3 h-auto">
                      Selengkapnya
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableAccount;
