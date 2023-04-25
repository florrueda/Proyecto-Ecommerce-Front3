import "./App.css";
import ProductsContainer from "./Components/Pages/Products/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContainer from "./Components/Pages/Cart/Cart.container";
import CartContextProvider from "./Context/CartContext";
import FavsContextProvider from "./Context/FavsContext";
import FavsContainer from "./Components/Pages/Favs/Favs.container";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
        <FavsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<Layout />}>
              <Route
                path="/products"
                element={<ProductsContainer />}
              />
              <Route
                path="/favs"
                element={<FavsContainer />}
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
          </FavsContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
