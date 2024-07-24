import React from "react";
import H3 from "../Text/H3";
import Strong from "../Text/Strong";
import P from "../Text/P";
import User from "../../interfaces/User";
import styles from "./UserData.module.css";
import { LuLock } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuTag } from "react-icons/lu";
import { LuSticker } from "react-icons/lu";
import UpdateUsername from "./UpdateUsername/UpdateUsername";
import UpdateEmail from "./UpdateEmail/UpdateEmail";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";

const userActions = [
  <UpdateUsername icon={<LuTag />} key={"updateUsername"}/>,
  <UpdateEmail icon={<LuMail />} key={"updateEmail"}/>,
  <UpdateAvatar icon={<LuSticker />} key={"updateAvatar"}/>,
  <UpdatePassword icon={<LuLock />} key={"updatePassword"}/>,
];

const UserData: React.FC<User> = ({ userDataWithoutPassAndAvatar, avatar }) => {
  return (
    <article
      className={styles.userArticle}
      key={userDataWithoutPassAndAvatar.id}
    >
      <Strong content={`Olá, ${userDataWithoutPassAndAvatar.username}!`} />
      <H3
        content={`Atualmente, seu saldo é de R$: ${userDataWithoutPassAndAvatar.currentBalance}`} />
      <P content={`E-mail: ${userDataWithoutPassAndAvatar.email}`} />
      <img src={avatar} alt="Foto de perfil do usuário"/>
      <div className={styles.userActions}>
        {userActions.map((item) => (item))}
      </div>
    </article>
  );
};

export default UserData;
