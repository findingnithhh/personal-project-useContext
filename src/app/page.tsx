"use client";
import Image from "next/image";
import { Button } from "@/components";
import UserProvider from "@/contexts/UserContext";
import { FormSubmit } from "@/components/organisms";
import { CardList } from "@/components/molecules/CardList";
import { Modal } from "@/components/organisms";
import ModalProvider from "@/contexts/ModalContext";
export default function Home() {
  return (
    <>
      <UserProvider>
        <ModalProvider>
          <Modal>
            <FormSubmit></FormSubmit>
          </Modal>
        </ModalProvider>
        <CardList />
      </UserProvider>
    </>
  );
}
