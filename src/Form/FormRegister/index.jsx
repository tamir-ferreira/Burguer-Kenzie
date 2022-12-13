import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "../style";

import { registerSchema } from "./registerSchema";
import { createUser } from "../../services/api";

export const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const registerSubmit = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const response = await createUser(body);

    response && navigate("/login");
    // console.log(body);
  };

  return (
    <StyledForm onSubmit={handleSubmit(registerSubmit)}>
      <div>
        <h3 className="font-heading-3">Cadastro</h3>
        <Link to={"/"}>
          <span className="font-body">Retornar para o login</span>
        </Link>
      </div>
      <Input
        type="text"
        name="Nome"
        register={register("name")}
        error={errors.name?.message}
      />
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
      <Input
        type="password"
        name="Confirmar Senha"
        register={register("rePassword")}
        error={errors.rePassword?.message}
      />
      <Button content="Cadastrar" size="default" color="gray" />
    </StyledForm>
  );
};
