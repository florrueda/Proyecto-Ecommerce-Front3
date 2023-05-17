import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Counter from "../Counter/Counter";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const ProductCard = ({ e, dispatch, favs }) => {
  const navigate = useNavigate();

  return (
      <ThemeProvider theme={themeContext}>
        <Card sx={{ maxWidth: 350, margin: 1 }}>
          <CardMedia component="img" alt="" height="300" image={e.img} />
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch({ type: "HANDLE_FAVORITE", payload: e })}
            style={{backgroundColor: "white"}}
          >
            <FavoriteIcon
              color={
                favs.some((fav) => fav.id === e.id) ? "error" : "disabled"
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
              {e.name}
            </Typography>
            <Typography variant="h5" align="center">
              $ {e.price}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            
            <Button
              onClick={() => navigate(`/product-detail/${e.id}`)}
              variant="contained"
            >
              Ver detalle
            </Button>
          </CardActions>
          {/* <Counter product={e}></Counter> */}
        </Card>
      </ThemeProvider>
  );
};

export default ProductCard;
