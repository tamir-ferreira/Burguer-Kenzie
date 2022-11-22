import "./styles/App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main className="container">
        <section>
          <ProductList />
        </section>
        <aside>
          <Cart />
        </aside>
      </main>
    </div>
  );
}

export default App;
