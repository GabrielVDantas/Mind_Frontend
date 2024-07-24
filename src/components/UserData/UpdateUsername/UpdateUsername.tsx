import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdateUsernameForm from "../UserActions/UpdateUsernameForm";

const UpdateUsername = ({icon}) => {
  const [updateUsernameModal, setUpdateUsernameModal] = useState(false);

  const handleOpenUsernameModal = () => setUpdateUsernameModal(true);
  
  const handleCloseUsernameModal = () => setUpdateUsernameModal(false);

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
        content={<UpdateUsernameForm closeModal={handleCloseUsernameModal}/>}
      />
    </>
  );
};

export default UpdateUsername;
