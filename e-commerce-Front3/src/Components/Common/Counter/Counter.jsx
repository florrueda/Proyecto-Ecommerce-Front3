import React, { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import { themeContext } from "../../../Context/theme";
import Swal from 'sweetalert2'

const Counter = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const { dispatch } = useContext(CartContext);

  const addProducts = () => {
    let object = { ...product, quantity: counter };
    dispatch({ type: "ADD_TO_CART", payload: object });
    Swal.fire(
      'Se agrego el producto al carrito!',
      '',
      'success'
    )
  };

  const reduceCounter = () => {
    if(counter === 1) {
      setCounter(1)
    } else {
      setCounter(counter - 1)
    }
  }

  const increaseCounter = () => {
    if(counter >= product.stock) {
      setCounter(product.stock)
    } else {
      setCounter(counter + 1)
    }

  }

  return (
    <ThemeProvider theme={themeContext}>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Button
          variant="outlined"
          sx={{ margin: "1rem" }}
          onClick={() => reduceCounter()}
        >
          -
        </Button>
        <h3 style={{ display: "flex", alignItems: "center" }}>{counter}</h3>
        <Button
          variant="outlined"
          sx={{ margin: "1rem" }}
          onClick={() => increaseCounter()}
        >
          +
        </Button>
        <Button
          variant="contained"
          sx={{ marginBottom: "1rem" }}
          onClick={addProducts}
        >
          Agregar al carrito
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Counter;
