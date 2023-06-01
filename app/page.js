import ArrowUp from "@/components/home/ArrowUp";
import CardLapor from "@/components/home/CardLapor";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";

const dataIcons = [
  {
    id: 1,
    img: "icon-1.svg",
    text: "Anda mendaftar ke laman kami dan membuat laporan.",
    line: "flex",
  },
  {
    id: 2,
    img: "icon-2.svg",
    text: "Anda dapat terus memantau status laporan anda.",
    line: "flex",
  },
  {
    id: 3,
    img: "icon-3.svg",
    text: "Anda dapat mengakses fitur menarik dari kami.",
    line: "hidden",
  },
];

export default function Home() {
  return (
    <div>
      {/* arrow up */}
      <ArrowUp />
      {/* arrow up end*/}
      {/* HERO */}
      <section id="hero">
        <div
          className="hero h-full lg:bg-cover"
          style={{
            backgroundImage: `url("/home/hero-bg.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-10 bg-[rgba(255,255,255,0.35)]"></div>
          <div className="w-full mt-11 h-[350px] lg:h-[450px] pt-10 lg:pt-20 pl-8 pb-[46px] pr-7 flex flex-col gap-7">
            <div className="max-w-[220px] lg:max-w-lg lg:text-center lg:w-full lg:mx-auto">
              <h1 className="text-[32px] text-primary font-bold font-outline-2 lg:text-7xl">
                SILANTAR
              </h1>
              <h2 className="text-lg text-white  inline-block -mt-1 font-bold">
                Sistem Informasi Laporan Lingkungan Sekitar
              </h2>
              <p className="text-[15px] text-black font-bold">
                Laporan yang anda buat mengenai segala sesuatu masalah didekat
                anda dengan mudah dilayani disini!
              </p>
            </div>
            <div className="self-end lg:self-center flex gap-[10px]">
              <a
                href="#cara-lapor"
                className="self-center btn-white px-[9px] py-2 text-xl"
              >
                Cara melapor?
              </a>
              <Link href="/lapor" className="btn-green px-[18px] py-2 text-xl">
                Lapor!
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* HERO END */}
      {/* SILANTAR Section */}
      <section id="about">
        <div className="w-full h-full bg-white">
          <div className="w-[53%] bg-primary lg:w-1/3">
            <h2 className="text-end pt-[18px] pl-8 pr-2 pb-05 font-bold text-black text-base lg:text-xl">
              Apasih <span className="text-white">SILANTAR</span> itu?
            </h2>
          </div>
          <div className="flex flex-col pt-3 pb-[14px] px-8 sm:px-20 lg:flex lg:flex-row lg:gap-3 lg:pb-5 lg:items-center">
            <Image
              src="/home/image-silantar.svg"
              width={100}
              height={100}
              className="w-full lg:w-1/2 sm:w-[90%] self-center"
              alt="silantar image"
            />
            <p className="mt-2 text-black text-xs lg:w-1/2 sm:text-base lg:text-lg">
              <span className="text-primary font-bold">SILANTAR</span>, platform
              berupa website sistem informasi yang dibutuhkan masyarakat untuk
              melaporkan masalah lingkungan sekitar ke pemerintahan yang
              bersangkutan. Dengan alur masyarakat-petinggi setempat-dinas, kami
              berusaha membuat website ini dapat membantu komunikasi dua arah
              antar masyarakat dan pemerintah.
            </p>
          </div>
          <div className="w-[76%] bg-primary lg:w-1/2 sm:w-2/3 sm:text-end">
            <h2 className="inline-block pl-8 py-1 pr-2 font-bold text-black text-[15px] sm:text-base lg:text-xl">
              Kami menjamin <span className="text-white">keamanan</span> data
              anda
            </h2>
          </div>
          <div className="px-8 sm:pt-4 sm:text-center">
            <p className="mt-2 text-black text-xs sm:text-sm lg:text-base">
              Data anda yang diperlukan untuk membuat laporan tidak untuk
              disalahgunakan dalam bentuk apapun.
            </p>
            <div className="w-full flex mt-2 pb-8 justify-center items-center">
              {dataIcons.map((value) => (
                <>
                  <div
                    key={value.id}
                    className="w1/3 flex flex-col justify-center items-center gap-1 pt-3"
                  >
                    <Image
                      src={`/icon/${value.img}`}
                      width={0}
                      height={0}
                      className="self-center w-[85px] h-[61px] sm:w-32 lg:w-44"
                      alt={value.img}
                    />
                    <p className="text-black text-xs w-[88px] pt-2 lg:w-36 lg:text-base">
                      {value.text}
                    </p>
                  </div>
                  <hr
                    className={`self-start mt-12 sm:mt-[75px] lg:mt-[100px] w-16 max-w-[80px] h-0.5 mx-2 sm:mx-4 lg:mx-6 bg-primary ${value.line}`}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SILANTAR Section END */}

      {/* lapor Section */}
      <CardLapor />
      {/* lapor Section END */}
      {/* footer */}
      <Footer />
      {/* footer END */}
    </div>
  );
}
