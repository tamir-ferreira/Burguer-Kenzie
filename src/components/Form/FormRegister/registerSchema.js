import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("* campo obrigatório"),
  email: yup.string().required("* campo obrigatório"),
  password: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  rePassword: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres")
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),
});
