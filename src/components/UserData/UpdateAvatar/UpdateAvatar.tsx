import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdateAvatarForm from "../UserActions/UpdateAvatarForm";

const UpdateAvatar = ({ icon, onUserDataUpdate }) => {
  const [updateAvatarModal, setUpdateAvatarModal] = useState(false);

  const handleOpenAvatarModal = () => setUpdateAvatarModal(true);

  const handleCloseAvatarModal = () => setUpdateAvatarModal(false);

  return (
    <>
      <Button content={icon} buttonAction={handleOpenAvatarModal} icon={true} />
      <Modal
        isOpen={updateAvatarModal}
        onClose={handleCloseAvatarModal}
        content={
          <UpdateAvatarForm
            closeModal={handleCloseAvatarModal}
            onUserDataUpdate={onUserDataUpdate}            
          />
        }
      />
    </>
  );
};

export default UpdateAvatar;
