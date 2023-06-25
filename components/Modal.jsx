"use client";

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Modal = ({
  checked,
  showModal,
  setShowModal,
  title,
  titleChildren,
  text,
  textButton,
  link,
}) => {
  const router = useRouter();
  return (
    <>
      {showModal ? (
        <>
          <input
            type="checkbox"
            id="my_modal_6"
            className="modal-toggle"
            checked={checked ? true : false}
          />
          <div className="modal">
            <div className="modal-box w-[276px] pt-[20px] pb-[29px] px-[33px] rounded-[10px] flex flex-col">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-[0.625rem] top-2"
                onClick={() => {
                  setShowModal(false);
                  if (link) router.push("/");
                }}
              >
                <Image
                  src="/icon/close.svg"
                  width={24}
                  height={24}
                  alt="close icon"
                  className="pointer-events-none"
                />
              </button>
              <h3 className="font-bold text-[0.938rem] text-center">
                {title}
                <span className="text-primary block -mt-1">
                  {titleChildren}
                </span>
              </h3>
              <Image
                src="/lapor/image-modal.svg"
                width={108}
                height={116}
                alt="image modal lapor"
                className="self-center mt-3 mb-[0.313rem]"
              />
              <p className="font-normal text-[0.625rem] mb-2 text-center mt-[5px]">
                {text}
              </p>
              {link ? (
                <Link
                  href="/sign-up"
                  className="btn btn-green btn-xs w-[5.5rem] text-xs h-8 self-center rounded-md font-medium"
                >
                  {textButton}
                </Link>
              ) : (
                <button
                  className="w-[68px] btn btn-green btn-xs text-xs h-8 self-center rounded-md font-medium"
                  onClick={() => setShowModal(false)}
                >
                  {textButton}
                </button>
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
