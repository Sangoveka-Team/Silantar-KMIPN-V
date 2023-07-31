const ColorStatus = ({title}) => {
  const dataColor = [
    {
      title: "Belum Diproses",
      color: "#276EF1",
      bg: "#C6DAFF",
    },
    {
      title: "Diproses",
      color: "#FFCE22",
      bg: "#FEFFCE",
    },
    {
      title: "Tuntas",
      color: "#3AA76D",
      bg: "#F0F9F4",
    },
    {
      title: "Ditolak",
      color: "#FF2222",
      bg: "#FFCECE",
    },
    {
      title: "Pending Dinas",
      bg: "#ffffff",
      color: "#757575",
    },
  ];
  return dataColor
    .filter((e) => title === e.title)
    .map((color, index) => (
      <span
        key={index}
        className={`bg-[${color.bg}] text-[${color.color}] rounded-xl px-[7px] py-[3px] text-xs font-semibold`}
      >
        {title}
      </span>
    ));
};

export default ColorStatus;
