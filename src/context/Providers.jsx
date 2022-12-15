import { ProductsProvider } from "./ProductsContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  );
};
