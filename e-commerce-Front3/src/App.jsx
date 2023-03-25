import "./App.css";
import ProductsContainer from "./Components/Products/ProductsContainer";
import SignUp from "./Components/Sign up/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import Home from "./Components/Home/Home";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/products' element={<ProductsContainer></ProductsContainer>} />
          <Route path='/sign-in' element={<SignIn></SignIn>} />
          <Route path='/sign-up' element={ <SignUp></SignUp>} />
          <Route path='/create-product' element={<CreateProduct/>} />

          <Route path='*' element={<h1>404 not found</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
