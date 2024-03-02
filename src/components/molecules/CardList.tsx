import { useUser } from "@/contexts/UserContext";
import React from "react";
import { Card } from "./Card";
const CardList = () => {
  const { users } = useUser();
  return (
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2 gap-y-2 mx-auto w-[70%]">
        {users.map((items, index) => (
          <div key={index}>
            <Card items={items} />
          </div>
        ))}
      </div>
    </>
  );
};

export { CardList };
