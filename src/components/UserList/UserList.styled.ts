import styled from "styled-components";

export const SortCont = styled.div`
  align-items: center;
  width: 500px;
`;

export const SortHeader = styled.p`
  text-align: center;
`;

export const SortBtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 40px;

  &:hover {
    background-color: #45a049;
  }
`;

export const DivCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  width: 500px;
`;

export const Div = styled.div`
  flex: 1;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 10px 0;
  cursor: pointer;
  width: 500px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
