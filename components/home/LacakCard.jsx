"use client";
import Link from "next/link";
import {useState} from "react";

const LacakCard = ({id}) => {
  const [ticket, setTicket] = useState(id !== undefined ? id : "");
  return (
    <div className="form-control">
      <label className="input-group">
        <input
          type="text"
          placeholder="Masukkan tiket laporan..."
          className="input input-bordered w-[80%] input-md focus:outline-none text-primary"
          onChange={(e) => setTicket(e.target.value)}
          value={ticket}
        />
        <Link
          href={`/lacak/${ticket}`}
          className="btn btn-green btn-md h-full font-semibold text-[15px]"
        >
          Lacak
        </Link>
      </label>
    </div>
  );
};

export default LacakCard;
