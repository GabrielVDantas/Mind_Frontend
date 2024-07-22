import { useState } from "react";
import Modal from "../../Modal";
import User from "../../../interfaces/User";
import P from "../../Text/P";
import UpdateEmailForm from "../../Form/UpdateUserForm/UpdateEmailForm";
import Button from "../../Button/Button";

interface UserDataProps {
  user: User;
}

const UpdateEmail: React.FC<UserDataProps> = ({ user }) => {
  const [updateEmailModal, setUpdateEmailModal] = useState(false);

  const handleOpenEmailModal = () => {
    setUpdateEmailModal(true);
  };

  const handleCloseEmailModal = () => {
    setUpdateEmailModal(false);
  };
  return (
    <>
      <Button
        content={<P content={user.userData.email} />}
        buttonAction={handleOpenEmailModal}
        openModal={true}
      />
      <Modal
        isOpen={updateEmailModal}
        onClose={handleCloseEmailModal}
        content={<UpdateEmailForm />}
      />
    </>
  );
};

export default UpdateEmail;
