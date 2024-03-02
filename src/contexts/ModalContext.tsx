import { ModalContextType } from "@/@types/modal";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    isOpen,
    setIsOpen,
  }

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );

};
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useUser must be used within the UserProvider");
  return context;
}

export default ModalProvider;