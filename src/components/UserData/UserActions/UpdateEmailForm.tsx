import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";
import Form from "../../Form/Form";

const UpdateEmailForm = ({ closeModal, onUserDataUpdate }) => {
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
    if (response && response.status === 200) {
      onUserDataUpdate(response.data.user.updatedUser);
      closeModal();
    }
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
