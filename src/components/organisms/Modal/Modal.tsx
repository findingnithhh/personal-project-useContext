import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Button, FloatingButton } from "@/components/atoms";
import { useModal } from "@/contexts/ModalContext";
import { useUser } from "@/contexts/UserContext"; // Import useUser hook

const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useModal();
  const { selectedCard } = useUser(); // Destructure selectedCard from useUser hook
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleModal();
    }
  };

  // UseEffect to add event listener when modal opens
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative z-50">
        <FloatingButton
          position="bottom-left"
          className="text-white bg-neutral"
        >
          {selectedCard ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setIsOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setIsOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </FloatingButton>
        {isOpen && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div ref={modalRef} className="bg-gray-900 w-[550px] py-5 px-10">
              <div className="flex justify-end">
                <button className="mt-2 mb-4" onClick={() => setIsOpen(false)}>
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
