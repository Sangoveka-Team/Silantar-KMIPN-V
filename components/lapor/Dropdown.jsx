import Image from "next/image";
import React, {useEffect, useState} from "react";

const Dropdown = ({listDatas, input, setInput, placeholder}) => {
  const [dropdown, setDropdown] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    let filteringLists = listDatas.filter((data) => {
      return data.value.toLowerCase().includes(input.toLowerCase());
    });
    setLists(filteringLists);
  }, [input]);

  return (
    <div className="w-full relative pl-[1.688rem]">
      <input
        type="text"
        required
        placeholder={placeholder}
        className="input-lapor"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onFocus={() => setDropdown(true)}
        onBlur={() => {
          setTimeout(() => setDropdown(false), 100);
        }}
      />
      <ul
        className={`dropdown-header ${
          !dropdown ? "hidden" : "block"
        } max-h-28 overflow-x-hidden overflow-y-scroll shadow-md rounded-b-md`}
      >
        {lists.map((data) => (
          // udah fix
          <div key={data.id}>
            <li className="dropdown-item" onClick={() => setInput(data.value)}>
              {data.value}
            </li>
            <hr className="w-full h-[0.063rem] text-[#D9D6D6]" />
          </div>
        ))}
      </ul>
      <Image
        src={`/icon/${!dropdown ? "chevron-down" : "chevron-up"}.svg`}
        width={28}
        height={28}
        alt="arrow down"
        className="absolute right-0 top-0 z-0 pointer-events-none "
      />
    </div>
  );
};

export default Dropdown;
