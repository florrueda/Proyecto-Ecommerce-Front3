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
import SignUp from "./Components/Pages/Login/Sign up/SignUp";
import SignIn from "./Components/Pages/Login/SignIn/SignIn";
import {auth, db} from './firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docRef = doc(db, `users/${uid}`);
    const docCifrada = await getDoc(docRef);
    const docFinal = docCifrada.data().rol;
    return docFinal;
  }

  function setUserWithRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
        <FavsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route element={<Layout user={user} />}>
              <Route
                path="/products"
                element={<ProductsContainer user={user} />}
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
                element={<ProductDetailContainer user={user} />}
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
