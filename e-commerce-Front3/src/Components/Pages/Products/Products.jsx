import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Products = ({ deleteProductById, items }) => {
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            textDecoration: "none",
            margin: "1rem",
          }}
        >
          <Link to="/create-product" style={{
            textDecoration: "none",
          }}>
            <Button variant="contained">Crear nuevo producto</Button>
          </Link>
        </div>

        <div>
          <h1>Productos</h1>
          <Grid container spacing={2}>
            {items.map((e) => (
              <Grid item xs={4} md={3} key={e.id}>
                <ProductCard
                  e={e}
                  deleteProductById={deleteProductById}
                ></ProductCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Products;
