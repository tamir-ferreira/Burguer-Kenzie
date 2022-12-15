import { ProductProvider } from "./ProductsContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>{children}</ProductProvider>
    </UserProvider>
  );
};
