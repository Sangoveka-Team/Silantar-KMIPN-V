import DropdownInfo from "@/components/dashboard/DropdownInfo";
import FormProfil from "@/components/profil/FormProfil";

const Profil = () => {
  return (
    <div className="p-2 relative">
      <h1 className="font-bold text-[0.938rem]">
        Profil <span className="text-primary">Pengguna</span>
      </h1>
      <DropdownInfo
        title="Tiba dihalaman profil anda!"
        text="Dihalaman ini anda dapat menyunting informasi anda yang dibutuhkan untuk website ini."
        width={178}
      />
      <FormProfil />
    </div>
  );
};

export default Profil;
