import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../style";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import * as i from "../../../interfaces/UserInterfaces";

export const FormLogin = () => {
  const { loginSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.DataLogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(loginSubmit)} noValidate>
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
      <Button content="Logar" size="default" color="primary" />

      <p className="font-body">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <Link to={"/register"}>
        <Button content="Cadastrar" size="default" color="gray" />
      </Link>
    </StyledForm>
  );
};