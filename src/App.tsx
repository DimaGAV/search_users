import React, { useState } from "react";
import Search from "./components/Search/Search";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";
import Pagination from "./components/Pagination/Pagination";
import useFetchUsers from "./hooks/useFetchUsers";
import { sortUsers } from "./utils/sortUsers";
import { User } from "./types/User";
import { GlobalStyle } from "./components/Global/Global.styled";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { users, loading, error } = useFetchUsers(query, page);
  const sortedUsers = sortUsers(users, sortOrder);

  return (
    <>
      <GlobalStyle />
      <Search onSearch={setQuery} />
      {error && <p>{error}</p>}
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <UserList
            users={sortedUsers}
            onSort={setSortOrder}
            onUserClick={setSelectedUser}
          />
          <UserDetails user={selectedUser} />
          <Pagination
            currentPage={page}
            totalPages={5}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  );
};

export default App;
