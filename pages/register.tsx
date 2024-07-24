import { useRouter } from "next/router";
import Outside from "../src/components/Container/Outside";
import Form from "../src/components/Form/Form";
import InputData from "../src/interfaces/Input";
import UserRequests from "../src/service/userService/userRequests";

const RegisterForm = () => {
  const router = useRouter();
  const inputs: InputData[] = [
    { name: "username", type: "text", placeholder: "Nome...", required: true },
    { name: "email", type: "email", placeholder: "E-mail...", required: true },
    {
      name: "password",
      type: "password",
      placeholder: "Senha...",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirme a senha...",
      required: true,
    },
    {
      name: "avatar",
      type: "file",
      placeholder: "Foto de perfil...",
      required: true,
    },
  ];

  const submitRegister = async (data: Record<string, string>) => {
    const response = await UserRequests.registerRequest(data);
    response && response.status === 201 && router.push("/firstLogin")
  };

  return (
    <Form
      h3Content="Registre-se no Wallet controll"
      pContent="Insira os dados para criar uma conta"
      inputs={inputs}
      buttonContent="Criar"
      authForm="register"
      submitForm={submitRegister}
    />
  );
};

const Register = () => {
  return <Outside rightContent={<RegisterForm />} />;
};

export default Register;
