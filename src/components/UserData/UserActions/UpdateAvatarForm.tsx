import InputData from "../../../interfaces/Input";
import UserRequests from "../../../service/userService/userRequests";
import Form from "../../Form/Form";

const UpdateAvatarForm = ({ closeModal, onUserDataUpdate }) => {
  const inputs: InputData[] = [
    {
      name: "avatar",
      type: "file",
      placeholder: "Nova foto de perfil...",
      required: true,
    },
  ];

  const submitUpdate = async (data: Record<string, string>) => {
    const response = await UserRequests.updateUserRequest(data, "avatar");
    if (response && response.status === 200) {
      onUserDataUpdate(response.data.user);
      closeModal();
    }
  };

  return (
    <Form
      h3Content="Alterar avatar"
      pContent="Insira seu novo avatar"
      inputs={inputs}
      buttonContent="Alterar"
      submitForm={submitUpdate}
    />
  );
};

export default UpdateAvatarForm;
