export interface UserModel {
  id: string;
  name: string;
  email: string;
  image: string | null;
}
export interface UserContextType {
  users: UserModel[];
  addNewUser: (user: UserForm) => void;
}

export type UserForm = Omit<UserModel, "id">;