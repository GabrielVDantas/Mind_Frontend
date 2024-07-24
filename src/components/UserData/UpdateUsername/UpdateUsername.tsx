import { useState } from "react";
import Modal from "../../Modal";
import UpdateUsernameForm from "../../Form/UpdateUserForm/UpdateUsernameForm";
import Button from "../../Button/Button";

const UpdateUsername = ({icon}) => {
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
        content={icon}
        buttonAction={handleOpenUsernameModal}
        icon={true}
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
