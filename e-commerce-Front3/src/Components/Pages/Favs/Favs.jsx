import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
          {/* {favs.map((fav) => (
            <Grid item xs={4} md={3} key={fav.id}>
              <Card sx={{ width: 300, height: 500 }} key={fav.id}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={fav.img}
                  title={fav.name}
                />
                <IconButton
                  aria-label="add to favorites"
                  onClick={() =>
                    dispatch({ type: "HANDLE_FAVORITE", payload: fav })
                  }
                  style={{ backgroundColor: "white" }}
                >
                  <FavoriteIcon
                    color={
                      favs.some((favorite) => favorite.id === fav.id)
                        ? "error"
                        : "disabled"
                    }
                  />
                </IconButton>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    align="center"
                  >
                    {fav.name}
                  </Typography>
                  <Typography variant="h5" align="center">
                    $ {fav.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))} */}
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Favs;
