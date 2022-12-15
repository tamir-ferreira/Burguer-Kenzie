import { FormLogin } from "../../components/Form/FormLogin";
import { StyledLogin } from "./style";
import { Preface } from "../../components/Preface";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Loader } from "../../components/Loader";

export const LoginPage = () => {
  const { loadUser } = useContext(UserContext);

  return !loadUser ? (
    <StyledLogin>
      <FormLogin />
      <Preface />
    </StyledLogin>
  ) : (
    <>
      <Loader />
    </>
  );
};
