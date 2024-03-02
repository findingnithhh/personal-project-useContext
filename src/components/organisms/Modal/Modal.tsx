import React, { ReactNode, useRef, useState } from "react";
import { Button, FloatingButton } from "@/components/atoms";
import { useModal } from "@/contexts/ModalContext";

const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative z-50">
        <FloatingButton
          position="bottom-left"
          className="text-white bg-neutral"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={toggleModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </FloatingButton>
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
            onClick={toggleModal}
          >
            <div
              ref={modalRef}
              className="bg-gray-900 w-[550px] py-5 px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  className="mt-2 mb-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="modal-box">{children}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { Modal };
