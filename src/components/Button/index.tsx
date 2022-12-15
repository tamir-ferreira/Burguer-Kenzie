import { StyledButton } from "./style";

interface iButtonProps {
  content: string | React.ReactNode;
  size: "default" | "medium";
  color: "primary" | "gray";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ content, size, color, onClick }: iButtonProps) => {
  return (
    <StyledButton size={size} color={color} onClick={onClick}>
      {content}
    </StyledButton>
  );
};
