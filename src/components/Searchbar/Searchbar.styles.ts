import styled from "styled-components";

export const SearchbarContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  padding: 8px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: #ff6b08;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff8b23;
  }
`;
