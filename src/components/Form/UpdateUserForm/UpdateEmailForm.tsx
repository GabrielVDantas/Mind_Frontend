import { useNavigate } from "react-router-dom";
import Form from "../Form";
import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";

const UpdateEmailForm = () => {
  const navigate = useNavigate();
  const inputs: InputData[] = [
    {
      name: "email",
      type: "email",
      placeholder: "Novo e-mail...",
      required: true,
    },
  ];

  const submitUpdate = async (data: Record<string, string>) => {
    const response = await UserRequests.updateUserRequest(data, "email");
    response && response.status === 200 && navigate("/feed")
  };
  return (
    <Form
      h3Content="Alterar e-mail"
      pContent="Insira seu novo e-mail"
      inputs={inputs}
      buttonContent="Alterar"
      submitForm={submitUpdate}
    />
  );
};

export default UpdateEmailForm;
