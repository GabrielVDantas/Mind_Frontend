import Transaction from "./Transaction";

interface UserData {
  id: number;
  username: string;
  email: string;
  avatar: string;
}

interface UserProfile {
  userData: UserData;
  userProjects: Transaction[];
}

export default UserProfile;

