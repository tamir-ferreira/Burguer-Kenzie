import { FormLogin } from "../../components/Form/FormLogin";
import { StyledLogin } from "./style";
import { Preface } from "../../components/Preface";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginPage = () => {
  const { loadUser } = useContext(UserContext);

  if (loadUser) {
    return (
      <div className="container-loader2">
        <span className="loader2"></span>
      </div>
    );
  }
  return (
    <StyledLogin>
      <FormLogin />
      <Preface />
    </StyledLogin>
  );
};
