import { useRouter } from "next/router";
import Outside from "../src/components/Container/Outside";
import Form from "../src/components/Form/Form";
import InputData from "../src/interfaces/Input";
import UserRequests from "../src/service/userService/userRequests";

const LoginForm = () => {
  const router = useRouter();
  const inputs: InputData[] = [
    { name: "email", type: "email", placeholder: "E-mail...", required: true },
    {
      name: "password",
      type: "password",
      placeholder: "Senha...",
      required: true,
    },
  ];

  const submitLogin = async (data: Record<string, string>) => {
    const response = await UserRequests.loginRequest(data);
    response && response.status === 200 && router.push("/feed")
  };

  return (
    <Form
      h3Content="Que bom ter você de volta!"
      pContent="Insira seus dados para entrar"
      inputs={inputs}
      buttonContent="Entrar"
      authForm="login"
      submitForm={submitLogin}
    />
  );
};

const Login = () => {
  return (
    <Outside rightContent={<LoginForm />}/>
  )
}

export default Login