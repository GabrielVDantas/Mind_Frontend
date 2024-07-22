import Project from "./Project";

interface UserData {
  id: number;
  username: string;
  email: string;
}

interface UserProfile {
  userData: UserData;
  userProjects: Project[];
}

export default UserProfile;

