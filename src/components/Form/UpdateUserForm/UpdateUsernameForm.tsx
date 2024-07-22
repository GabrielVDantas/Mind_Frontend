import { useNavigate } from "react-router-dom";
import Form from "../Form";
import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";

const UpdateUsernameForm = () => {
  const navigate = useNavigate();
  const inputs: InputData[] = [
    {
      name: "username",
      type: "text",
      placeholder: "Novo nome...",
      required: true,
    },
  ];

  const submitUpdate = async (data: Record<string, string>) => {
    const response = await UserRequests.updateUserRequest(data, "username");
    response && response.status === 200 && navigate("/feed")
  };

  return (
    <Form
      h3Content="Alterar nome"
      pContent="Insira seu novo nome"
      inputs={inputs}
      buttonContent="Alterar"
      submitForm={submitUpdate}
    />
  );
};

export default UpdateUsernameForm;
