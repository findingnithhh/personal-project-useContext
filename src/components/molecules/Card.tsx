import React from "react";
import Image from "next/image";
import toastr from "toastr";
import "toastr/build/toastr.min.css"; // Import Toastr styles
import { UserModel } from "@/@types/user";
import { Button } from "../atoms";
import { useUser } from "@/contexts/UserContext";

const Card = ({ items }: { items: UserModel }) => {
  const { deleteUser, selectedCard, setSelectedCard } = useUser();

  const handleOnDelete = (id: string) => {
    deleteUser(id);
    // Show Toastr notification on successful deletion
    toastr.success(`${items.name} have been deleted successfully!`, "Success");
  };

  return (
    <>
      <div
        onClick={() => {
          if (selectedCard === items.id) {
            setSelectedCard("");
            return;
          }
          setSelectedCard(items.id);
        }}
      >
        <div
          className={`${
            selectedCard === items.id &&
            "border-[3px] border-green-500 rounded-lg"
          }`}
        >
          <div className="card card-compact w-[400px] h-[380px] bg-base-100 shadow-xl bg-gray-900 p-5 rounded-lg">
            <figure>
              <Image
                src={items.image as string}
                alt="Shoes"
                width={500}
                height={300}
                className="rounded-md"
              />
            </figure>
            <div className="card-body text-white mt-6">
              <h2 className="card-title mb-2">{items.name}</h2>
              <p>{items.email}</p>
              <div className="card-actions float-end mt-5 mb-0">
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
        </div>
      </div>
    </>
  );
};

export { Card };
