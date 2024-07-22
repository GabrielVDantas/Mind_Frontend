import { useState } from "react";
import Modal from "../../Modal";
import Strong from "../../Text/Strong";
import User from "../../../interfaces/User";
import UpdateUsernameForm from "../../Form/UpdateUserForm/UpdateUsernameForm";
import Button from "../../Button/Button";

interface UserDataProps {
  user: User;
}

const UpdateUsername: React.FC<UserDataProps> = ({ user }) => {
  const [updateUsernameModal, setUpdateUsernameModal] = useState(false);

  const handleOpenUsernameModal = () => {
    setUpdateUsernameModal(true);
  };

  const handleCloseUsernameModal = () => {
    setUpdateUsernameModal(false);
  };
  return (
    <>
      <Button
        content={<Strong content={user.userData.username} />}
        buttonAction={handleOpenUsernameModal}
        openModal={true}
      />
      <Modal
        isOpen={updateUsernameModal}
        onClose={handleCloseUsernameModal}
        content={<UpdateUsernameForm />}
      />
    </>
  );
};

export default UpdateUsername;
