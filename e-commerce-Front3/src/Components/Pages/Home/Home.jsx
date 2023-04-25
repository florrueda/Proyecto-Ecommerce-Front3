import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_transparent2.png";
import "./Home.css";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import {themeContext} from '../../../Context/theme'

const Home = () => {
  
  return (
    <div className="home">
    <img src={logo} style={{ width: "30%" }}></img>
      <ThemeProvider theme={themeContext}>
        <Typography variant="h3">Bienvenido a SucuLove</Typography>
        <Typography mt={2} variant="h4">
          Aca vas a encontrar las suculentas mas lindas{" "}
          <FavoriteIcon style={{ fontSize: "1rem" }} />
        </Typography>
        <Link to="/products" className="home-button">
          <Button variant="contained" color="primary">
            Ir a la tienda
          </Button>
        </Link>
      </ThemeProvider>
    </div>
  );
};

export default Home;
