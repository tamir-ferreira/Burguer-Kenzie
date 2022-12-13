import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { Toast } from "./components/Toast";
import { Providers } from "./context/Providers";

export const App = () => {
  return (
    <BrowserRouter>
      <Toast />
      <Providers>
        <PageRoutes />
      </Providers>
    </BrowserRouter>
  );
};
