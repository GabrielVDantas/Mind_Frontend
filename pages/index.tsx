import React from "react";
import Outside from "../src/components/Container/Outside";
import H2 from "../src/components/Text/H2";
import P from "../src/components/Text/P";
import Anchor from "../src/components/Button/Anchor";
import styles from "../src/styles/index.module.css";

const Home = () => {
  return (
    <Outside
      leftContent={
        <section className={styles.homeText}>
          <H2 content="Seja bem-vindo ao Wallet Control" />
          <P
            content="Registre suas finanças e tenha total controle sobre seu dinheiro. 
          Entre agora e faça parte da nossa comunidade!"
          />
          <div className={styles.homeAnchor}>
            <Anchor content="Login" to="/login" />
            <Anchor content="Cadastro" to="/register" />
          </div>
        </section>
      }
    />
  );
};

export default Home;
