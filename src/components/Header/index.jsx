import "./style.css";
import logo from "../../images/logo.svg";
import { InputSearch } from "./InputSearch";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <InputSearch />
      </div>
    </header>
  );
};
