import React from "react";
import H3 from "../Text/H3";
import User from "../../interfaces/User";
import Card from "../Card";
import H2 from "../Text/H2";
import UpdateUsername from "./UpdateUsername/UpdateUsername";
import UpdateEmail from "./UpdateEmail/UpdateEmail";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import DeleteUser from "./DeleteUser/DeleteUser";

interface UserDataProps {
  user: User;
}

const UserData: React.FC<UserDataProps> = ({ user }) => {
  return (
    <article key={user.userData.id}>
      <H3 content="Seus dados" />
      <UpdateUsername user={user} />
      <UpdateEmail user={user} />
      <UpdatePassword/>
      <DeleteUser />
      <H3 content="Seus projetos" />
      {user.userProjects.length === 0 ? (
        <H2 content="Você ainda não tem nenhum projeto..." />
      ) : (
        user.userProjects.map((userProject) => <Card project={userProject} />)
      )}
    </article>
  );
};

export default UserData;
