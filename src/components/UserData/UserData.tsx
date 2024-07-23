import React from "react";
import H3 from "../Text/H3";
import Strong from "../Text/Strong";
import P from "../Text/P";
import User from "../../interfaces/User";
import styles from "./UserData.module.css"

const UserData: React.FC<User> = ({ ...user }) => {
  return (
    <article key={user.userDataWithoutPassAndAvatar.id}>
      <Strong content={`Olá, ${user.userDataWithoutPassAndAvatar.username}!`} />
      <H3 content={`Atualmente, seu saldo é de R$: ${user.userDataWithoutPassAndAvatar.currentBalance}`}/>
      <P content={`E-mail: ${user.userDataWithoutPassAndAvatar.email}`}/>
      <img src={user.avatar} className={styles.avatar}/>
    </article>
  );
};

export default UserData;
