"use client";
import Image from "next/image";
import { Button } from "@/components";
import UserProvider from "@/contexts/UserContext";
import { FormSubmit } from "@/components/organisms";
import { CardList } from "@/components/molecules/CardList";
import { Card } from "@/components";
export default function Home() {
  return (
    <>
      <UserProvider>
        <FormSubmit></FormSubmit>
      </UserProvider>
      <CardList />
    </>
  );
}
