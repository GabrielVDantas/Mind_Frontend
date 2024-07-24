import React, { useEffect, useState } from "react";
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

const UserData: React.FC<User> = ({ ...user }) => {
  const [userData, setUserData] = useState({
    username: user.userDataWithoutPassAndAvatar.username,
    email: user.userDataWithoutPassAndAvatar.email,
    avatar: user.avatar,
  });

  const handleUserDataUpdate = (newData: Record<string, unknown>) => {
    console.log(newData);
    
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const userActions = [
    <UpdateUsername
      icon={<LuTag />}
      key={"updateUsername"}
      onUserDataUpdate={handleUserDataUpdate}
    />,
    <UpdateEmail
      icon={<LuMail />}
      key={"updateEmail"}
      onUserDataUpdate={handleUserDataUpdate}
    />,
    <UpdateAvatar
      icon={<LuSticker />}
      key={"updateAvatar"}
      onUserDataUpdate={handleUserDataUpdate}
    />,
    <UpdatePassword icon={<LuLock />} key={"updatePassword"} />,
  ];

  return (
    <article
      className={styles.userArticle}
      key={user.userDataWithoutPassAndAvatar.id}
    >
      <Strong content={`Olá, ${userData.username}!`} />
      <H3
        content={`Atualmente, seu saldo é de R$: ${user.userDataWithoutPassAndAvatar.currentBalance}`}
      />
      <P content={`E-mail: ${userData.email}`} />
      <img src={userData.avatar} alt="Foto de perfil do usuário" />
      <div className={styles.userActions}>
        {userActions.map((item) => item)}
      </div>
    </article>
  );
};

export default UserData;
