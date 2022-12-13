import { FormLogin } from "../../components/Form/FormLogin";
import { StyledLogin } from "./style";
import { Preface } from "../../components/Preface";

export const LoginPage = () => {
  return (
    <StyledLogin>
      <FormLogin />
      <Preface />
    </StyledLogin>
  );
};
