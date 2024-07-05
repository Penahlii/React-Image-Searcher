import styled from "styled-components";

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 3px 6px rgba(0, 0, 0, 0.14),
      0px 4px 3px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 2px;
`;
