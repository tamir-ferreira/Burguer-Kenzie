import { FormLogin } from "../../Form/FormLogin";
import { StyledLogin } from "./style";
import { Summary } from "../../components/Summary";

export const LoginPage = () => {
  return (
    <StyledLogin>
      <FormLogin />
      <Summary />
    </StyledLogin>
  );
};
