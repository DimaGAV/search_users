import { render, screen, fireEvent } from "@testing-library/react";
import UserList from "./UserList";
import { User } from "../../types/User";

const mockUsers: User[] = [
  { id: 1, login: "user1", repos_url: "", html_url: "", public_repos: 5 },
  { id: 2, login: "user2", repos_url: "", html_url: "", public_repos: 10 },
];

test("renders user list and calls onUserClick when a user is clicked", () => {
  const mockOnUserClick = jest.fn();

  render(
    <UserList
      users={mockUsers}
      onSort={() => {}}
      onUserClick={mockOnUserClick}
    />
  );

  // проверка наличия пользователей
  const user1 = screen.getByText(/user1/i);
  const user2 = screen.getByText(/user2/i);

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();

  fireEvent.click(user1);

  expect(mockOnUserClick).toHaveBeenCalledWith(mockUsers[0]);
});
