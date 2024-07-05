import { FC } from "react";
import { LoadMoreButton } from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => (
  <LoadMoreButton onClick={onClick}>{text}</LoadMoreButton>
);

export default Button;
