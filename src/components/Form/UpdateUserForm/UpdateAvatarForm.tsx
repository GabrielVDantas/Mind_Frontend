import InputData from "../../../interfaces/Input";
import Form from "../Form";

const UpdateAvatarForm = () => {
  const inputs: InputData[] = [
    {
      name: "avatar",
      type: "file",
      placeholder: "Nova foto de perfil...",
      required: true,
    },
  ];

  const submitUpdate = async (data: Record<string, string>) => {
    // const response = await UserRequests.registerRequest(data);
    // response && response.status === 201 && router.push("/firstLogin")
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
