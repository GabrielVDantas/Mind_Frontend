interface User {
  userDataWithoutPassAndAvatar: {
    id: number,
    username: string,
    email: string,
    currentBalance: number,
  }
  avatar: string;
}

export default User;

