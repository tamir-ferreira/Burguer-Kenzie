import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../style";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { loginUser } from "../../../services/api";

export const FormLogin = () => {
  const { loginSubmit } = useContext(UserContext);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  /* const loginSubmit = async (data) => {
    const response = await loginUser(data);

    if (response) {
      const { user, accessToken } = response;
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USER", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      localStorage.clear();
    }
  }; */

  const teste = async (data) => {
    // console.log(data);
    await loginSubmit(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(teste)} noValidate>
      <h3 className="font-heading-3">Login</h3>
      <Input
        type="text"
        name="Email"
        register={register("email")}
        error={errors.email?.message}
      />

      <Input
        type="password"
        name="Senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <Button type="submit" content="Logar" size="default" color="primary" />

      <p className="font-body">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <Link to={"/register"}>
        <Button content="Cadastrar" size="default" color="gray" />
      </Link>
    </StyledForm>
  );
};
