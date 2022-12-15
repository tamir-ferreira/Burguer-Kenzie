import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createUser, getProducts, loginUser } from "../services/api";
import { ProductContext } from "./ProductContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loadUser, setLoadUser] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const loginSubmit = async (data) => {
    const response = await loginUser(data);
    const { user, accessToken } = response;
    console.log(user);

    if (response) {
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USER", JSON.stringify(user));
      setUserInfo(user);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
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

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        loadUser,
        setLoadUser,
        loginSubmit,
        registerSubmit,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
