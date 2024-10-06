import { User } from "../types/User";

export const sortUsers = (users: User[], order: 'asc' | 'desc') => {
  return [...users].sort((a, b) => {
    const reposA = a.public_repos ?? 0; // Если public_repos нет, используем 0
    const reposB = b.public_repos ?? 0;

    if (order === 'asc') {
      return reposA - reposB;
    }
    return reposB - reposA;
  });
};
