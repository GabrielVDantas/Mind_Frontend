import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import UpdateEmailForm from "../UserActions/UpdateEmailForm";

const UpdateEmail = ({ icon }) => {
  const [updateEmailModal, setUpdateEmailModal] = useState(false);

  const handleOpenEmailModal = () => setUpdateEmailModal(true);
  

  const handleCloseEmailModal = () => setUpdateEmailModal(false);
 
  return (
    <>
      <Button
        content={icon}
        buttonAction={handleOpenEmailModal}
        icon={true}
      />
      <Modal
        isOpen={updateEmailModal}
        onClose={handleCloseEmailModal}
        content={<UpdateEmailForm closeModal={handleCloseEmailModal}/>}
      />
    </>
  );
};

export default UpdateEmail;
