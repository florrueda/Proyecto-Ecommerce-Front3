import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import "./Products.css";
import { Button, Typography, Grid, ListItem} from "@mui/material";

const Products = ({ updateProductById, deleteProductById, items }) => {

  return (
    <div>
      <Link to="/create-product">
        <button>Crear nuevo producto</button>
      </Link>
      <div>
        <h1>Products</h1>
        <Grid container spacing={2} style={{justifyContent: "space-between"}}>
          {items.map((e) => (
            <Grid item xs={4} md={3}><ProductCard
              key={e.id}
              e={e}
              updateProductById={updateProductById}
              deleteProductById={deleteProductById}
            ></ProductCard></Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
