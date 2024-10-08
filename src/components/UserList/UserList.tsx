import React from "react";
import { User } from "../../types/User";
import * as S from "../UserList/UserList.styled";
// {Div,  DivCont,  ListItem,  SortBtn,  SortCont,  SortHeader,} from "../UserList/UserList.styled";

interface UserListProps {
  users: User[];
  onSort: (order: "asc" | "desc") => void;
  onUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSort, onUserClick }) => {
  return (
    <S.SortCont>
      <S.SortHeader>Сортировать по количеству репозиториев:</S.SortHeader>
      <S.SortBtn onClick={() => onSort("asc")}>по возрастанию</S.SortBtn>
      <S.SortBtn onClick={() => onSort("desc")}>по убыванию</S.SortBtn>
      <ul>
        {users.map((user) => (
          <S.ListItem key={user.id} onClick={() => onUserClick(user)}>
            <S.DivCont>
              <S.Div>{user.login}</S.Div>
              <S.Div>
                Репозиториев:{" "}
                {user.public_repos !== null ? user.public_repos : "Загрузка..."}
              </S.Div>
            </S.DivCont>
          </S.ListItem>
        ))}
      </ul>
    </S.SortCont>
  );
};

export default UserList;
