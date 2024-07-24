import Anchor from "../src/components/Button/Anchor";
import Button from "../src/components/Button/Button";
import Outside from "../src/components/Container/Outside";
import H3 from "../src/components/Text/H3";
import P from "../src/components/Text/P";
import styles from "../src/styles/firstLogin.module.css";

const SuccessfullRegister = () => {
  return (
    <section className={styles.container}>
      <H3 content="Cadastro concluído" />
      <P content="Muito bem, agora faça seu primeiro login" />
      <Anchor content="Ir para login" to="/login"/>
    </section>
  );
};

const FirstLogin = () => {
  return <Outside rightContent={<SuccessfullRegister />} />;
};

export default FirstLogin;
