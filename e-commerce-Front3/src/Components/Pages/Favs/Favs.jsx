import React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import ProductCard from "../../Common/ProductCard/ProductCard";

const Favs = ({ favs, dispatch }) => {
  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <Typography gutterBottom variant="h2" component="div" align="center">
          Favoritos
        </Typography>
        <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {favs.map((fav) => (
              <Grid item xs={2} sm={2} md={4} key={fav.id}>
                <ProductCard
                  e={fav}
                  favs={favs}
                  dispatch={dispatch}
                ></ProductCard>
              </Grid>
            ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Favs;
