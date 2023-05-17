import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { Button, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const Products = ({ items, dispatch, favs, user }) => {
  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            textDecoration: "none",
            margin: "1rem",
          }}
        >
        {user === null ? null : user.rol === 'admin' ? (<Button
            variant="contained"
            onClick={() => navigate(`/create-product`)}
            display='none'
          >
            Crear nuevo producto
          </Button>) : null }
          
        </div>

        <div>
          <Typography gutterBottom variant="h2" component="div" align="center">
            Productos
          </Typography>
          <Grid container columns={{ xs: 2, sm: 4, md: 12 }} align='center' >
            {items.map((e) => (
              <Grid item xs={2} sm={2} md={4} key={e.id}>
                <ProductCard
                  e={e}
                  favs={favs}
                  dispatch={dispatch}
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
