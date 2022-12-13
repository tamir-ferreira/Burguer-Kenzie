import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>{children}</ProductProvider>
    </UserProvider>
  );
};
