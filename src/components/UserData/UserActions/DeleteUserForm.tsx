import { useRouter } from "next/router";
import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";
import Form from "../../Form/Form";

const DeleteUserForm = () => {
    const router = useRouter();
    const inputs: InputData[] = [
      {
        name: "keyword",
        type: "text",
        placeholder: "CONFIRMAR...",
        required: true,
      },
    ];
  
    const submitDelete = async (data: Record<string, string>) => {
      const response = await UserRequests.deleteUserRequest(
        data,
      );
      response && response.status === 204 && router.push("/")
    };
  
    return (
      <Form
        h3Content="Apagar conta"
        pContent="Digite 'CONFIRMAR' para apagar a conta"
        inputs={inputs}
        buttonContent="Deletar"
        submitForm={submitDelete}
      />
    );
  };

  export default DeleteUserForm