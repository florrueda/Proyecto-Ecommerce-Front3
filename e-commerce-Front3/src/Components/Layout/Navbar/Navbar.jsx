import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_white2.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { CartContext } from "../../../Context/CartContext";

const Navbar = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_QUANTITY" });
  }, [state.cart]);

  return (
    <div className="navbar">
      <img src={logo} style={{ width: "12%" }}></img>
      <div className="navlinks">
        <NavLink to="/" className="navlink">
          Inicio
        </NavLink>
        <NavLink to="/products" className="navlink">
          Productos
        </NavLink>
        <NavLink to="/favs" className="navlink">
          Favoritos
        </NavLink>
        <NavLink to="/cart" className="navlink-cart">
          Carrito
          <div className="navlink-icon">
            {state.totalQuantity}
            <ShoppingCartIcon />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
