import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const Cart = ({ state, dispatch, limpiarCarrito }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    dispatch({
      type: "DELETE_BY_ID",
      payload: id,
    });
    Swal.fire("Se elimino el producto del carrito!", "", "info");
  };

  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <Typography gutterBottom variant="h2" component="div" align="center">
          Carrito
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            textDecoration: "none",
            margin: "1rem",
          }}
        >
          <Button
            variant="contained"
            sx={{ alignItems: "end" }}
            onClick={limpiarCarrito}
          >
            Vaciar carrito
          </Button>
        </div>
        <Container align="center">
          {state.cart.map((product) => (
            <Card
              sx={{ display: "flex", margin: "1rem", maxWidth: "sm" }}
              key={product.name}
            >
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={product.img}
                alt=""
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography component="div" variant="h6">
                    {product.name}
                  </Typography>
                  <IconButton>
                    <DeleteIcon
                      onClick={() => deleteProduct(product.id)}
                    ></DeleteIcon>
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: '100px'
                    }}
                  >
                    <Button
                      sx={{ minWidth: '30px' }}
                      onClick={() => reduceCounter()}
                    >
                      -
                    </Button>
                    <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>{product.quantity}</Typography>
                    <Button
                      sx={{ minWidth: '30px' }}
                      onClick={() => increaseCounter()}
                    >
                      +
                    </Button>
                  </Box>
                  <Typography component="div" variant="h6">
                    ${product.price * product.quantity}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
          <div>
            <h3>El total del carrito es: {state.totalPrice}</h3>
            <Button
              variant="contained"
              sx={{ alignItems: "end" }}
              onClick={() => navigate(`/checkout`)}
            >
              Comprar
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Cart;
