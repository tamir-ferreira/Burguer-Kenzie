import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledForm } from "../style";
import { loginSchema } from "./loginSchema";
import { loginUser } from "../../services/api";

export const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const loginSubmit = async (data) => {
    const response = await loginUser(data);

    response
      ? (localStorage.setItem("@TOKEN", response.accessToken),
        localStorage.setItem("@USER", JSON.stringify(response.user)),
        navigate("/dashboard"))
      : localStorage.clear();
  };

  return (
    <StyledForm onSubmit={handleSubmit(loginSubmit)} noValidate>
      <h3 className="font-heading-3">Login</h3>
      <Input
        type="email"
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
