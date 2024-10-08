import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

test("calls onSearch when form is submitted", () => {
  const mockOnSearch = jest.fn();

  render(<Search onSearch={mockOnSearch} />);

  const input = screen.getByPlaceholderText(/Введите логин для поиска/i);
  const button = screen.getByText(/поиск/i);

  // проверка существования инпут и кнопка
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // изменение значение инпута
  fireEvent.change(input, { target: { value: "test user" } });

  // отправка формы кликом по кнопке
  fireEvent.click(button);

  expect(mockOnSearch).toHaveBeenCalledWith("test user");
});
