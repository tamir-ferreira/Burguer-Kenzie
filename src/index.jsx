import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StyledGlobals } from "./styles/globals";
import { StyledColors } from "./styles/colors";
import { StyledButtons } from "./styles/buttons";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledGlobals />
    <StyledColors />
    <StyledButtons />
    <StyledTypography />
    <App />
  </React.StrictMode>
);
