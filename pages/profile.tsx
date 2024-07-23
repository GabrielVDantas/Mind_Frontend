import { useEffect, useState } from "react";
import Inside from "../src/components/Container/Inside";
import H2 from "../src/components/Text/H2";
import UserData from "../src/components/UserData/UserData";
import UserProfile from "../src/interfaces/User";
import UserRequests from "../src/service/userService/userRequests";

const Profile = () => {
    const [user, setUser] = useState<UserProfile>();
  
    useEffect(() => {
        async function getUser() {
          const response = await UserRequests.getUserRequest();
          response && response.status === 200 && setUser(response.data.user);
        }
        getUser();
    }, [])
  
    return user ? (
      <Inside content={<UserData {...user} />} />
    ) : (
      <Inside content={<H2 content="Buscando dados..." />} />
    );
  };
  
  export default Profile;