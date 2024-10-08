import { sortUsers } from "./sortUsers";
import { User } from "../types/User";

const users: User[] = [
  { id: 1, login: "user1", repos_url: "", html_url: "", public_repos: 10 },
  { id: 2, login: "user2", repos_url: "", html_url: "", public_repos: 5 },
  { id: 3, login: "user3", repos_url: "", html_url: "", public_repos: 15 },
];

test("сортировка по возрастанию количества репозиториев", () => {
  const sortedUsers = sortUsers(users, "asc");
  expect(sortedUsers[0].public_repos).toBe(5);
  expect(sortedUsers[1].public_repos).toBe(10);
  expect(sortedUsers[2].public_repos).toBe(15);
});

test("сортировка по убыванию количества репозиториев", () => {
  const sortedUsers = sortUsers(users, "desc");
  expect(sortedUsers[0].public_repos).toBe(15);
  expect(sortedUsers[1].public_repos).toBe(10);
  expect(sortedUsers[2].public_repos).toBe(5);
});
