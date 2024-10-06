import { useState, useEffect } from "react";
import { User } from "../types/User";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const useFetchUsers = (query: string, page: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${query}&page=${page}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Ошибка загрузки пользователей: ${response.statusText}`
          );
        }

        const data = await response.json();

        const usersWithRepos = await Promise.all(
          data.items.map(async (user: User) => {
            try {
              const reposResponse = await fetch(user.repos_url, {
                headers: {
                  Authorization: `token ${GITHUB_TOKEN}`,
                },
              });

              if (!reposResponse.ok) {
                /* console.error(
                  `Ошибка при загрузке репозиториев для пользователя ${user.login}. Код: ${reposResponse.status}`
                ); */
                throw new Error("Ошибка получения репозиториев");
              }

              const repos = await reposResponse.json();

              return { ...user, public_repos: repos.length }; // Устанавливаем количество репозиториев
            } catch (error) {
              console.error(`Ошибка для пользователя ${user.login}:`, error);
              return { ...user, public_repos: 0 }; // Если ошибка, устанавливаем 0
            }
          })
        );

        setUsers(usersWithRepos);
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
        setError("Ошибка при загрузке пользователей");
      }
      setLoading(false);
    };

    if (query) {
      fetchUsers();
    }
  }, [query, page]);

  return { users, loading, error };
};

export default useFetchUsers;
