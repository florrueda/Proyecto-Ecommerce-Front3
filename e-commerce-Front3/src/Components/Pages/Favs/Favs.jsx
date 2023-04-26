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
        <Grid container spacing={2}>
        {favs.map((fav) => (
              <Grid item xs={4} md={3} key={fav.id}>
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
