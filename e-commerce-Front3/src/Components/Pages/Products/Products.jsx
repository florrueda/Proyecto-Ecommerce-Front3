import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { Button, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const Products = ({ deleteProductById, items }) => {

  return (
    <div>
      <ThemeProvider theme={ themeContext}>
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
        <Typography
              gutterBottom
              variant="h2"
              component="div"
              align="center"
            >
              Product Detail
            </Typography>
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
