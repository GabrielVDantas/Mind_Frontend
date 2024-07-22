import { useNavigate } from "react-router-dom";
import UserRequests from "../../../service/userService/userRequests";
import Form from "../Form";
import InputData from "../../../interfaces/Input";

const DeleteUserForm = () => {
  const navigate = useNavigate();

  const inputs: InputData[] = [
    {
      name: "keyword",
      type: "text",
      placeholder: "CONFIRMAR...",
      required: true,
    },
  ];

  const submitDelete = async (data: Record<string, string>) => {
    try {
      const response = await UserRequests.deleteUserRequest(data);
      response && response.status === 204 && navigate("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Form
      h3Content="Digite 'CONFIRMAR' para deletar sua conta"
      pContent="Sua conta será deletada para sempre"
      inputs={inputs}
      buttonContent="Deletar"
      submitForm={submitDelete}
    />
  );
};

export default DeleteUserForm;
