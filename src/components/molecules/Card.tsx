import React from "react";
import Image from "next/image";
import { UserModel } from "@/@types/user";
import { Button } from "../atoms";
import { useUser } from "@/contexts/UserContext";
const Card = ({ items }: { items: UserModel }) => {
  const { deleteUser } = useUser();
  const handleOnDelete = (id: string) => {
    deleteUser(id);
  };
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl bg-gray-900 p-5 rounded-lg">
        <figure>
          <Image
            src={items.image as string}
            alt="Shoes"
            width={500}
            height={300}
            className="rounded-md"
          />
        </figure>
        <div className="card-body text-white mt-2">
          <h2 className="card-title mb-2">{items.name}</h2>
          <p>{items.email}</p>
          <div className="card-actions justify-end mt-5">
            <Button
              color="error"
              onClick={(e) => {
                handleOnDelete(items.id);
                e.stopPropagation(); 
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
