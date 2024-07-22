import { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal";
import DeleteUserForm from "../../Form/DeleteUserForm/DeleteUserForm";

const DeleteUser = () => {
  const [deleteUser, setDeleteUser] = useState(false);

  const handleOpenDeleteUserModal = () => {
    setDeleteUser(true);
  };

  const handleCloseDeleteUserModal = () => {
    setDeleteUser(false);
  };

  return (
    <>
      <Button
        content="Deletar minha conta"
        buttonAction={handleOpenDeleteUserModal}
        openModal={true}
      />
      <Modal
        isOpen={deleteUser}
        onClose={handleCloseDeleteUserModal}
        content={<DeleteUserForm />}
      />
    </>
  );
};

export default DeleteUser;
