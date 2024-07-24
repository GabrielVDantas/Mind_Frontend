import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";
import Form from "../../Form/Form";

const UpdatePasswordForm = ({closeModal, onUserDataUpdate}) => {
  const inputs: InputData[] = [
    {
      name: "password",
      type: "password",
      placeholder: "Nova senha...",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirme a nova senha...",
      required: true,
    },
  ];

  const submitUpdate = async (data: Record<string, string>) => {
    const response = await UserRequests.updateUserRequest(data, "password");
    if (response && response.status === 200) {
      onUserDataUpdate(response.data.user)
      closeModal();
    }
  };

  return (
    <Form
      h3Content="Alterar senha"
      pContent="Insira sua nova senha"
      inputs={inputs}
      buttonContent="Alterar"
      submitForm={submitUpdate}
    />
  );
};

export default UpdatePasswordForm;
