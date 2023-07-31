const listKategori = [
  {
    id: 1,
    value: "Pencemaran Lingkungan",
  },
  {
    id: 2,
    value: "Bencana",
  },
  {
    id: 3,
    value: "Fasilitas Umum",
  },
  {
    id: 4,
    value: "Arus Lalu Lintas",
  },
  {id: 5, value: "Lainnya"},
];

// datanya masih manual
const listDaerah = [
  {
    id: 1,
    value: "Basirih",
  },
  {
    id: 2,
    value: "Belitung Selatan",
  },
  {
    id: 3,
    value: "Belitung Utara",
  },
  {
    id: 4,
    value: "Kuin Cerucuk",
  },
  {
    id: 5,
    value: "Kuin Selatan",
  },
  {
    id: 6,
    value: "Pelambuan",
  },
  {
    id: 7,
    value: "Telaga Biru",
  },
  {
    id: 8,
    value: "Telawang",
  },
  {
    id: 9,
    value: "Teluk Tiram",
  },
  {
    id: 10,
    value: "Basirih Selatan",
  },
  {
    id: 11,
    value: "Kelayan Barat",
  },
  {
    id: 12,
    value: "Kelayan Dalam",
  },
  {
    id: 13,
    value: "Kelayan Selatan",
  },
  {
    id: 14,
    value: "Kelayan Tengah",
  },
  {
    id: 15,
    value: "Kelayan Timur",
  },
  {
    id: 16,
    value: "Mantuil",
  },
  {
    id: 17,
    value: "Murung Raya",
  },
  {
    id: 18,
    value: "Pekauman",
  },
  {
    id: 19,
    value: "Pemurus Baru",
  },
  {
    id: 20,
    value: "Pemurus Dalam",
  },
  {
    id: 21,
    value: "Tanjung Pagar",
  },
  {
    id: 22,
    value: "Antasan Besar",
  },
  {
    id: 23,
    value: "Gadang",
  },
  {
    id: 24,
    value: "Kelayan Luar",
  },
  {
    id: 25,
    value: "Kertak Baru Ilir",
  },
  {
    id: 26,
    value: "Kertak Baru Ulu",
  },
  {
    id: 27,
    value: "Mawar",
  },
  {
    id: 28,
    value: "Melayu",
  },
  {
    id: 29,
    value: "Pasar Lama",
  },
  {
    id: 30,
    value: "Pekapuran Laut",
  },
  {
    id: 31,
    value: "Seberang Mesjid",
  },
  {
    id: 32,
    value: "Sungai Baru",
  },
  {
    id: 33,
    value: "Teluk Dalam",
  },
  {
    id: 34,
    value: "Banua Anyar",
  },
  {
    id: 35,
    value: "Karang Mekar",
  },
  {
    id: 36,
    value: "Kebun Bunga",
  },
  {
    id: 37,
    value: "Kuripan",
  },
  {
    id: 38,
    value: "Pekapuran Raya",
  },
  {
    id: 39,
    value: "Pemurus Luar",
  },
  {
    id: 40,
    value: "Pengambangan",
  },
  {
    id: 41,
    value: "Sungai Bilu",
  },
  {
    id: 42,
    value: "Sungai Lulut",
  },
  {
    id: 43,
    value: "Alalak Selatan",
  },
  {
    id: 44,
    value: "Alalak Tengah",
  },
  {
    id: 45,
    value: "Alalak Utara",
  },
  {
    id: 46,
    value: "Antasan Kecil Timur",
  },
  {
    id: 47,
    value: "Kuin Utara",
  },
  {
    id: 48,
    value: "Pangeran",
  },
  {
    id: 49,
    value: "Sungai Andai",
  },
  {
    id: 50,
    value: "Sungai Jingah",
  },
  {
    id: 51,
    value: "Sungai Miai",
  },
  {
    id: 52,
    value: "Surgi Mufti",
  },
];

const listRole = [
  {
    id: 1,
    value: "User",
  },
  {
    id: 2,
    value: "Super Admin",
  },
  {
    id: 3,
    value: "Admin Instansi",
  },
  {
    id: 4,
    value: "Admin Pejabat",
  },
];

const userRole = [
  {
    access: "dashboard",
    link: "/dashboard",
    icon: "home",
    iconActive: "home-black",
  },
  {
    access: "tambah-laporan",
    link: "/dashboard/tambah-laporan",
    icon: "add",
    iconActive: "add-black",
  },
  {
    access: "riwayat",
    link: "/dashboard/riwayat",
    icon: "clock",
    iconActive: "clock-black",
  },
  {
    access: "profil",
    link: "/dashboard/profil",
    icon: "user",
    iconActive: "user-black",
  },
];

const superAdminRole = [
  {
    access: "dashboard",
    link: "/dashboard",
    icon: "home",
    iconActive: "home-black",
  },
  {
    access: "Semua Laporan",
    link: "/dashboard/laporan",
    icon: "bar-chart-2-white",
    iconActive: "bar-chart-2-black",
  },

  {
    access: "Profil",
    link: "/dashboard/profil",
    icon: "user",
    iconActive: "user-black",
  },
];

const adminInstansiRole = [
  {
    access: "dashboard",
    link: "/dashboard",
    icon: "home",
    iconActive: "home-black",
  },

  {
    access: "Profil",
    link: "/dashboard/profil",
    icon: "user",
    iconActive: "user-black",
  },
];
const adminPejabatRole = [
  {
    access: "dashboard",
    link: "/dashboard",
    icon: "home",
    iconActive: "home-black",
  },
  {
    access: "Profil",
    link: "/dashboard/profil",
    icon: "user",
    iconActive: "user-black",
  },
];

const dummyImage = [
  {
    img: "/dummy-images/traffic-lights.png",
  },
  {
    img: "/dummy-images/polluted-river.png",
  },
  {
    img: "/dummy-images/scattered-tree-branches.png",
  },
];

export {
  listKategori,
  listDaerah,
  userRole,
  superAdminRole,
  listRole,
  adminInstansiRole,
  adminPejabatRole,
  dummyImage,
};
