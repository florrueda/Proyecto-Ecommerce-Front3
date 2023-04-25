import React, { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import {themeContext} from '../../../Context/theme'

const Counter = ({ product }) => {

  const [counter, setCounter] = useState(1);
  const {dispatch} = useContext(CartContext)

  const addProducts = () => {
    let object = { ...product, quantity: counter };
    dispatch({type: 'ADD_TO_CART', payload: object})
  };

  return (
    <ThemeProvider theme={themeContext}>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        <Button variant="outlined" style={{ margin: "1rem" }} onClick={() => setCounter(counter - 1)}>
          -
        </Button>
        <h3 style={{ display: "flex", alignItems:"center" }}>{counter}</h3>
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
