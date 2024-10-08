import React from "react";
import { User } from "../../types/User";
import { Header, Text } from "./UserDetails.styled";

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return user ? (
    <div>
      <Header>{user.login}</Header>
      <Text>ID: {user.id}</Text>
      <p>Репозиториев: {user.public_repos}</p>
      <p>
        URL: <a href={user.html_url}>{user.html_url}</a>
      </p>
    </div>
  ) : null;
};

export default UserDetails;
