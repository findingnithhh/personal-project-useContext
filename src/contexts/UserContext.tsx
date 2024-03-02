import React, { useContext, useState } from "react";
import { UserContextType, UserModel, UserForm } from "@/@types/user";
import { generateId } from "@/components/utils/generateId";
export const UserContext = React.createContext<UserContextType>({
  users: [],
  addNewUser: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  //   add operation
  const addNewUser = (user: UserForm) => {
    const id = generateId();
    const newUser = { ...user, id };
    setUsers((prevUser) => {
      const newAllUser = [...prevUser, newUser];
      return newAllUser;
    });
  };
  // provide value
  const value = {
    users,
    addNewUser,
  };

  //   provides a context value and children to the consumer
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// custom useUser it allows components to access user related data from a context called UserContext.
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within the UserProvider");
  return context;
};

export default UserProvider;
