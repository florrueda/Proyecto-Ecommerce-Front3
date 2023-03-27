import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_white2.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
        <img src={logo} style={{ width: "12%" }}></img>
        <div className="navlinks">
        <NavLink to="/" className='navlink'>
          Inicio
        </NavLink>
        <NavLink to="/products" className='navlink'>
          Productos
        </NavLink>
        <NavLink to="/cart" className='navlink'>
          Carrito<ShoppingCartIcon/>
        </NavLink>
        <NavLink to="/sign-in" className='navlink'>
          Iniciar sesion
        </NavLink>
        </div>
    </div>
  );
};

export default Navbar;
