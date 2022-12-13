import { StyledButton } from "./style";

export const Button = ({ content, size, color, onClick }) => {
  return (
    <StyledButton size={size} color={color} onClick={onClick}>
      {content}
    </StyledButton>
  );
};
