import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
  useRef,
} from "react";
import { InputFile, InputText, Button } from "../atoms";
import { UserForm } from "@/@types/user";
import { useUser } from "@/contexts/UserContext";

const Default_Form = {
  name: "",
  email: "",
  image: "",
};
const FormSubmit = () => {
  const { addNewUser, selectedCard, selectedCardData } = useUser();
  // check if selected card has value or not, if true the form use for update user if not the form use for add user
  const [formData, setFromData] = useState<UserForm>(
    !selectedCard ? Default_Form : (selectedCardData as UserForm)
  );
  
  //   user to access file element
  const inputFileRef = useRef<HTMLInputElement>(null);

  //   handle on submit form
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addNewUser(formData);
    console.log(formData);
    // Clear the form after submission
    setFromData(Default_Form);
    // Reset the form to clear the file input
    e.currentTarget.reset();
  };

  //   handle on change in the form
  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  //   handle on image change
  const handleOnImgaeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileImage = e.target.files && e.target.files[0];
    if (fileImage) {
      const imageUrl = URL.createObjectURL(fileImage);
      setFromData({ ...formData, image: imageUrl });
    }
  };
  //   handle clear input
  const handleOnClear = () => {
    setFromData(Default_Form);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} onReset={handleOnClear}>
        <label htmlFor="username">Username</label>
        <InputText
          className="mt-1"
          placeholder="Enter your username"
          size="sm"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChangeInput}
        />
        <label htmlFor="email">Email</label>
        <InputText
          className="mt-1"
          placeholder="Enter your email"
          size="sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChangeInput}
        />
        <label htmlFor="image">Image</label>
        <InputFile
          className="mt-1 w-[500px]"
          size="md"
          type="file"
          ref={inputFileRef}
          name="image"
          accept="image/*"
          onChange={handleOnImgaeChange}
        />
        <Button
          type="submit"
          className="mt-2 mb-5 float-end"
          size="md"
          color="primary"
        >
          Create
        </Button>
        <Button
          type="reset"
          className="mt-2 mr-2 mb-5 float-end"
          size="md"
          color="error"
        >
          Clear
        </Button>
      </form>
    </>
  );
};

export { FormSubmit };
