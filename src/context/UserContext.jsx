import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const loginSubmit = async (data) => {
    console.log(data);
    const response = await loginUser(data);
    const { user, accessToken } = response;

    if (response) {
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USER", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      localStorage.clear();
    }
  };

  const registerSubmit = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const response = await createUser(body);

    response && navigate("/login");
  };

  return (
    <UserContext.Provider value={{ loginSubmit, registerSubmit }}>
      {children}
    </UserContext.Provider>
  );
};
