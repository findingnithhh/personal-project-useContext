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
  const { addNewUser } = useUser();
  const [formData, setFromData] = useState<UserForm>({
    name: "",
    email: "",
    image: "",
  });

  //   user to access file element
  const inputFileRef = useRef<HTMLInputElement>(null);

  //   handle on submit form
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addNewUser(formData);
    console.log(formData);
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
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <InputText
          placeholder="Username"
          size="sm"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChangeInput}
        />
        <InputText
          placeholder="Email"
          size="sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChangeInput}
        />
        <InputFile
          className="w-[500px]"
          size="md"
          type="file"
          name="image"
          ref={inputFileRef}
          accept="image/*"
          onChange={handleOnImgaeChange}
        />
        <Button type="submit" className="mt-2" size="md" color="primary">
          Create
        </Button>
      </form>
    </>
  );
};

export { FormSubmit };
