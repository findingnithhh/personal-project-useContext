import { Dispatch, SetStateAction } from "react";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  image: string | null;
}
export interface UserContextType {
  users: UserModel[];
  selectedCard: string | null;
  selectedCardData: UserModel | undefined;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>;
  addNewUser: (user: UserForm) => void;
  deleteUser: (id: string) => void;
  
}

export type UserForm = Omit<UserModel, "id">;
