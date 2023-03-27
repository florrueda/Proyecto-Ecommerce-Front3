import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Products = ({ deleteProductById, items, addToCart }) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3E6765',
      },
    },
    button: {
      fontSize: 8,
    },
  });

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Link to="/create-product" style={{display: "flex", justifyContent:"flex-end" , textDecoration: "none", margin: "1rem"}}>
        <Button variant="contained">Crear nuevo producto</Button>
      </Link>
      <div>
        <h1>Productos</h1>
        <Grid container spacing={2} style={{justifyContent: "space-between"}}>
          {items.map((e) => (
            <Grid item xs={4} md={3} key={e.id}><ProductCard
              e={e}
              deleteProductById={deleteProductById}
              addToCart={addToCart}
            ></ProductCard></Grid>
          ))}
        </Grid>
      </div>
      </ThemeProvider>
    </div>
  );
};

export default Products;
