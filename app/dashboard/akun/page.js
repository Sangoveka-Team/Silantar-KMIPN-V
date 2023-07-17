import TableAccount from "@/components/dashboard/super-admin/TableAccount";

const Akun = () => {
  return (
    <div className="my-[20px] ml-[25px] mr-[31px]">
      <h1 className="font-bold text-[22px]">
        Semua <span className="text-primary">Akun</span>
      </h1>
      <TableAccount />
    </div>
  );
};

export default Akun;
