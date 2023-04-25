import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import Counter from "../Counter/Counter";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const ProductCard = ({ e, deleteProductById }) => {
  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <Card sx={{ width: 300, height: 550 }}>
          <CardMedia component="img" alt="" height="300" image={e.img} />
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
            <Button onClick={() => deleteProductById(e.id)} variant="contained">
              Eliminar producto
            </Button>

            <Button
              onClick={() => navigate(`/product-detail/${e.id}`)}
              variant="contained"
            >
              Ver detalle
            </Button>
          </CardActions>
          <Counter product={e}></Counter>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default ProductCard;
