import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../assets/SucuLove-logos/SucuLove-logos_transparent2.png";
import "./Home.css";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";

const Home = () => {
  
    const theme = createTheme({
    typography: {
      fontFamily: [
        "Roboto",
      ],
      fontSize: 5,
    },
  });

  return (
    <div className="home">
      <img src={logo} style={{ width: "30%" }}></img>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Bienvenido a SucuLove</Typography>
        <Typography variant="h2">Aca vas a encontrar las suculentas mas lindas <FavoriteIcon style={{fontSize:'1rem'}} /></Typography>
      </ThemeProvider>
      <Link to="/products">
            <button>Ir a la tienda</button>
        </Link>
    </div>
  );
};

export default Home;
