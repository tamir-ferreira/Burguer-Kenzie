import { Preface } from "../../components/Preface";
import { FormRegister } from "../../components/Form/FormRegister";
import { StyledRegister } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      <Preface />
      <FormRegister />
    </StyledRegister>
  );
};
