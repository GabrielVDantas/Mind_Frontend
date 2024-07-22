import { useState } from "react";
import Modal from "../../Modal";
import UpdatePasswordForm from "../../Form/UpdateUserForm/UpdatePasswordForm";
import H3 from "../../Text/H3";
import Button from "../../Button/Button";

const UpdatePassword = () => {
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);

  const handleOpenPasswordModal = () => {
    setUpdatePasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setUpdatePasswordModal(false);
  };
  return (
    <>
      <Button
        content={<H3 content="Alterar senha" />}
        buttonAction={handleOpenPasswordModal}
        openModal={true}
      />
      <Modal
        isOpen={updatePasswordModal}
        onClose={handleClosePasswordModal}
        content={<UpdatePasswordForm />}
      />
    </>
  );
};

export default UpdatePassword;
