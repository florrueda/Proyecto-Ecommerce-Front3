import React, { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const Counter = ({ product }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3E6765",
      },
    },
    button: {
      fontSize: 8,
    },
  });

  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);

  const addProducts = () => {
    let object = { ...product, quantity: counter };
    addToCart(object);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        <Button variant="outlined" style={{ margin: "1rem" }} onClick={() => setCounter(counter - 1)}>
          -
        </Button>
        <h3 style={{ textAlign:'center' }}>{counter}</h3>
        <Button variant="outlined" style={{ margin: "1rem" }} onClick={() => setCounter(counter + 1)}>
          +
        </Button>
        <Button variant="contained" onClick={addProducts}>
          Agregar al carrito
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Counter;
