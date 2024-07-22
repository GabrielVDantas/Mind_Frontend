import Outside from "../src/components/Container/Outside";
import Form from "../src/components/Form/Form";
import InputData from "../src/interfaces/Input";

const LoginForm = () => {

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