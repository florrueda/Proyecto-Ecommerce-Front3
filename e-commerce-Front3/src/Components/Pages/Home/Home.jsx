import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../../assets/SucuLove-logos/SucuLove-logos_transparent2.png";
import "./Home.css";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto"],
      fontSize: 5,
    },
    palette: {
      primary: {
        light: "#648583",
        main: "#3E6765",
        dark: "#2b4846",
      },
      secondary: {
        light: "#e0e7dd",
        main: "#D9E2D5",
        dark: "#979e95",
      },
    },
    button: {
      fontSize: 8,
    },
  });

  return (
    <div className="home">
      <img src={logo} style={{ width: "30%" }}></img>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Bienvenido a SucuLove</Typography>
        <Typography mt={2} variant="h2">
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
