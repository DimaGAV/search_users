import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  margin: 20px 30px;
  padding: 10px 20px;
`;

export const SearchBtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
