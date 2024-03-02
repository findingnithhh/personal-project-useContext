import React from "react";
import Image from "next/image";
import { UserModel } from "@/@types/user";
const Card = ({ items }: { items: UserModel }) => {
  console.log(items);

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl bg-red-500">
        <figure>
          <Image
            src={items.image as string}
            alt="Shoes"
            width={500}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
