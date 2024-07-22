import Inside from "../src/components/Container/Inside";
import Form from "../src/components/Form/Form";
import InputData from "../src/interfaces/Input";


const NewProjectForm = () => {
  const inputs: InputData[] = [
    {
      name: "amount",
      type: "number",
      placeholder: "Quantia...",
      required: true,
    },
    {
      name: "description",
      type: "text",
      placeholder: "Descrição da transação...",
      required: true,
    },
  ];

  const submitNewProject = async (data: Record<string, unknown>) => {
    try {
      console.log("Submetido!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      h3Content="Insira as informações para adicionar um transação"
      pContent="Coloque numeros negativos caso seja uma despesa"
      inputs={inputs}
      buttonContent="Criar"
      submitForm={submitNewProject}
    />
  );
};

const NewProject = () => {
  return <Inside content={<NewProjectForm />} />;
};

export default NewProject;
