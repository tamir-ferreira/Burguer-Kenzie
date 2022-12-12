import { Summary } from "../../components/Summary";
import { FormRegister } from "../../Form/FormRegister";
import { StyledRegister } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      <Summary />
      <FormRegister />
    </StyledRegister>
  );
};
