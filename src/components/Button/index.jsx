import { StyledButton } from "./style";

export const Button = ({ content, size, color }) => {
  return (
    <StyledButton size={size} color={color}>
      {content}
    </StyledButton>
  );
};
