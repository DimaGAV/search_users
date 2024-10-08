import React, { useState } from "react";
import { SearchBtn, SearchForm, SearchInput } from "./Search.styled";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите логин для поиска"
      />
      <SearchBtn type="submit">Поиск</SearchBtn>
    </SearchForm>
  );
};

export default Search;
