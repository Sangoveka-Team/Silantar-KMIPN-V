import Image from "next/image";
import Link from "next/link";

const Modal = ({
  showModal,
  setShowModal,
  title,
  titleChildren,
  text,
  textButton,
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-10 md:mx-auto  w-[17.25rem]">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative py-6 pl-[1.688rem] pr-[2.125rem] flex flex-col">
                  {/* close button */}
                  <button
                    type="button"
                    className="absolute top-2 right-5 font-bold text-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                  <h2 className="font-bold text-[0.94rem] text-black text-center">
                    {title}
                    <span className="text-primary block">{titleChildren}</span>
                  </h2>
                  <Image
                    src="/lapor/image-modal.svg"
                    width={108}
                    height={116}
                    alt="image modal lapor"
                    className="self-center mt-3 mb-[0.313rem]"
                  />
                  <p className="font-bold text-[0.625rem] mb-2">{text}</p>
                  <Link
                    href="/sign-up"
                    className="btn-green py-[0.625rem] px-[1.188rem] w-[7.625rem] self-center text-center"
                  >
                    {textButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
