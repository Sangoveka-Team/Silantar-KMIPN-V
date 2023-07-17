import Image from "next/image";
import React, {useEffect, useState} from "react";

const Dropdown = ({listDatas, input, setInput, placeholder}) => {
  const [dropdown, setDropdown] = useState(false);
  const [lists, setLists] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    let filteringLists = listDatas.filter((data) => {
      return data.value.toLowerCase().includes(input.toLowerCase());
    });
    setLists(filteringLists);
  }, [input]);

  return (
    // pl-[1.688rem]
    <div className="dropdown w-full relative pl-[1.688rem]">
      <input
        tabIndex={0}
        placeholder={placeholder}
        className="input-lapor"
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        onFocus={() => {
          setDropdown(true);
          setCheckbox(true);
        }}
        onBlur={() => setCheckbox(false)}
      />
      <ul
        tabIndex={0}
        className={`dropdown-content ${
          !dropdown ? "hidden" : "block"
        } z-[1] menu shadow bg-white w-full mt-2 p-0 max-h-40 overflow-y-scroll -ml-[1.688rem]`}
      >
        {lists.map((data, index) => (
          // datanya masih manual
          <li
            key={index}
            className="font-bold text-xs text-primary cursor-pointer"
            onClick={() => {
              setInput(data.value);
              setDropdown(false);
            }}
          >
            <a className="rounded-none py-[5px] active:bg-base-300 active:text-primary">
              {data.value}
            </a>
            <hr className="w-full h-0 p-0 text-[#D9D6D6]" />
          </li>
        ))}
      </ul>
      <label className="swap swap-rotate absolute right-0 top-0 z-0 pointer-events-none">
        <input type="checkbox" checked={checkbox ? true : false} />
        {/* arrow up */}
        <Image
          src="/icon/chevron-up.svg"
          width={24}
          height={24}
          alt="arrow icon"
          className="swap-on"
        />
        {/* arrow down*/}
        <Image
          src="/icon/chevron-down.svg"
          width={24}
          height={24}
          alt="arrow icon"
          className="swap-off"
        />
      </label>
    </div>
  );
};

export default Dropdown;
