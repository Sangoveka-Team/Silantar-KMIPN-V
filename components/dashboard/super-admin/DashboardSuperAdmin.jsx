import CardInfo from "./CardInfo";
import TableAccount from "./TableAccount";

const DashboardSuperAdmin = () => {
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <h1 className="font-bold text-[22px]">Dashboard</h1>
      <CardInfo />
      <TableAccount />
    </div>
  );
};

export default DashboardSuperAdmin;
