import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdatePasswordForm from "../UserActions/UpdatePasswordForm";

const UpdatePassword = ({icon}) => {
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [userData, setUserData] = useState<Record<string, unknown>>({})

  const handleOpenPasswordModal = () => setUpdatePasswordModal(true);
  
  const handleClosePasswordModal = () => setUpdatePasswordModal(false);
 
  const handleUserDataUpdate = (newData: Record<string, unknown>) => {
    setUserData(newData);
  };

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
        content={
          <UpdatePasswordForm
            closeModal={handleClosePasswordModal}
            onUserDataUpdate={handleUserDataUpdate}
          />
        }
      />
    </>
  );
};

export default UpdatePassword;
