import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdateAvatarForm from "../../Form/UpdateUserForm/UpdateAvatarForm";

const UpdateAvatar = ({ icon }) => {
  const [updateAvatarModal, setUpdateAvatarModal] = useState(false);

  const handleOpenAvatarModal = () => {
    setUpdateAvatarModal(true);
  };

  const handleCloseAvatarModal = () => {
    setUpdateAvatarModal(false);
  };

  return (
    <>
      <Button
        content={icon}
        buttonAction={handleOpenAvatarModal}
        icon={true}
      />
      <Modal
        isOpen={updateAvatarModal}
        onClose={handleCloseAvatarModal}
        content={<UpdateAvatarForm />}
      />
    </>
  );
};

export default UpdateAvatar;
