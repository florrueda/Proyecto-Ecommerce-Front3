import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_white2.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../../../Context/CartContext";
import { useEffect, useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../../../firebaseConfig'

const pages = [
  { to: "/", name: "Inicio" },
  { to: "/products", name: "Productos" },
  { to: "/favs", name: "Favoritos" },
  // { to: "/cart", name: "Carrito" },
];

function Navbar({ user }) {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_QUANTITY" });
  }, [state.cart]);


  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={themeContext}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <img src={logo}></img>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:'end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <div className="navlinks" key={index}>
                    <NavLink to={page.to} className="navlink">
                      {page.name}
                    </NavLink>
                  </div>
                ))}
                {user ? (
                  <Button
                    color="secondary"
                    variant="solid"
                    onClick={() => signOut(auth)}
                  >
                    Cerrar sesion
                  </Button>
                ) : (
                  <NavLink to="/sign-in" className="navlink">
                    Iniciar sesion
                  </NavLink>
                )}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:'end' }}>
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
                {/* <NavLink to="/cart" className="navlink-cart">
                  Carrito
                  <div className="navlink-icon">
                    {state.totalQuantity}
                    <ShoppingCartIcon />
                  </div>
                </NavLink> */}
                {user ? (
                  <Button
                    color="secondary"
                    variant="solid"
                    onClick={() => signOut(auth)}
                  >
                    Cerrar sesion
                  </Button>
                ) : (
                  <NavLink to="/sign-in" className="navlink">
                    Iniciar sesion
                  </NavLink>
                )}
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
