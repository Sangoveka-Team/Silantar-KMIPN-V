import Image from "next/image";
import Link from "next/link";

const HeaderAuth = () => {
  return (
    <div className="mx-auto max-w-xl bg-[url('/Ellipse.svg')] w-full h-[12.5rem] bg-no-repeat bg-top relative flex justify-center">
      <Link href="/" className="absolute bottom-2">
        <Image
          src="/logo-2.svg"
          width={117}
          height={100}
          alt="logo silantar"
          className="pointer-events-none"
        />
      </Link>
    </div>
  );
};

export default HeaderAuth;
