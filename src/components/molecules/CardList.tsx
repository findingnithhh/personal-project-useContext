import { useUser } from "@/contexts/UserContext";
import React from "react";
import { Card } from "./Card";
const CardList = () => {
  const { users } = useUser();
  return (
    <>
      <div className="grid grid-cols-1 gap-10 mx-auto lg:grid lg:grid-cols-3 gap-y-2 w-[70%]">
        {users.map((items, index) => (
          <div key={index} className="flex justify-center items-center mt-5">
            <Card items={items} />
          </div>
        ))}
      </div>
    </>
  );
};

export { CardList };
