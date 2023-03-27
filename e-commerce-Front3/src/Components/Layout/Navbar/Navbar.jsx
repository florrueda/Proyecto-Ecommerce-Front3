import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_white.png";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
        <img src={logo} style={{ width: "10%" }}></img>
        <div className="navlinks">
        <NavLink to="/" className='navlink'>
          Inicio
        </NavLink>
        <NavLink to="/products" className='navlink'>
          Productos
        </NavLink>
        <NavLink to="/cart" className='navlink'>
          Carrito
        </NavLink>
        </div>
    </div>
  );
};

export default Navbar;
