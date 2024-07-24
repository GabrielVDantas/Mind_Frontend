import React from "react";
import H3 from "../Text/H3";
import Strong from "../Text/Strong";
import P from "../Text/P";
import User from "../../interfaces/User";
import styles from "./UserData.module.css";
import Button from "../Button/Button";
import { LuLock } from "react-icons/lu";
import { LuKey } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuShirt } from "react-icons/lu";
import UpdateUsername from "./UpdateUsername/UpdateUsername";
import UpdateEmail from "./UpdateEmail/UpdateEmail";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";

const userIcons = [
  <LuKey className={styles.iconStyle} />,
  <LuMail className={styles.iconStyle} />,
  <LuShirt className={styles.iconStyle} />,
  <LuLock className={styles.iconStyle} />,
];

const UserData: React.FC<User> = ({ ...user }) => {
  return (
    <article
      className={styles.userArticle}
      key={user.userDataWithoutPassAndAvatar.id}
    >
      <Strong content={`Olá, ${user.userDataWithoutPassAndAvatar.username}!`} />
      <H3
        content={`Atualmente, seu saldo é de R$: ${user.userDataWithoutPassAndAvatar.currentBalance}`}
      />
      <P content={`E-mail: ${user.userDataWithoutPassAndAvatar.email}`} />
      <img src={user.avatar} />
      <div className={styles.userActions}>
        <UpdateUsername icon={<Button content={<LuKey />} icon={true} />}/>
        <UpdateEmail icon={<Button content={<LuMail />} icon={true} />}/>
        <UpdateAvatar icon={<Button content={<LuShirt />} icon={true} />}/>
        <UpdatePassword icon={<Button content={<LuLock />} icon={true} />}/>
      </div>
    </article>
  );
};

export default UserData;
