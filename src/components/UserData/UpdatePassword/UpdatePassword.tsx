import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdatePasswordForm from "../UserActions/UpdatePasswordForm";

const UpdatePassword = ({icon}) => {
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);

  const handleOpenPasswordModal = () => setUpdatePasswordModal(true);
  
  const handleClosePasswordModal = () => setUpdatePasswordModal(false);
 
  return (
    <>
      <Button
        content={icon}
        buttonAction={handleOpenPasswordModal}
        icon={true}
      />
      <Modal
        isOpen={updatePasswordModal}
        onClose={handleClosePasswordModal}
        content={<UpdatePasswordForm closeModal={handleClosePasswordModal}/>}
      />
    </>
  );
};

export default UpdatePassword;
