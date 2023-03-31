import "./App.css";
import ProductsContainer from "./Components/Pages/Products/ProductsContainer";
import SignUp from "./Components/Pages/Sign up/SignUp";
import SignIn from "./Components/Pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContainer from "./Components/Pages/Cart/Cart.container";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn></SignIn>} />
            <Route path="/sign-up" element={<SignUp></SignUp>} />

            <Route element={<Layout />}>
              <Route
                path="/products"
                element={<ProductsContainer></ProductsContainer>}
              />
              <Route
                path="/create-product"
                element={<CreateProductContainer />}
              />
              <Route
                path="/product-detail/:id"
                element={<ProductDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
            </Route>
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
