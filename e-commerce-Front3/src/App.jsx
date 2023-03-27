import "./App.css";
import ProductsContainer from "./Components/Pages/Products/ProductsContainer";
import SignUp from "./Components/Pages/Sign up/SignUp";
import SignIn from "./Components/Pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./Components/Pages/CreateProduct/CreateProduct";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<Layout />}>
            <Route
              path="/products"
              element={<ProductsContainer></ProductsContainer>}
            />
            <Route path="/sign-in" element={<SignIn></SignIn>} />
            <Route path="/sign-up" element={<SignUp></SignUp>} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/cart" element={<h1>Carrito</h1>} />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
