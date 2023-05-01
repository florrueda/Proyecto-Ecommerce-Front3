import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ state, dispatch, limpiarCarrito }) => {
  const navigate = useNavigate();

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
          <TableContainer
            component={Paper}
            sx={{ width: { xs: 270, md: 800 } }}
          >
            <Table
              sx={{ minWidth: { xs: 0, md: 650 } }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Imagen</TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.cart.map((product) => (
                  <TableRow
                    key={product.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Avatar
                        src={product.img}
                        sx={{ width: 76, height: 76 }}
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>

                    <TableCell>{product.price * product.quantity}</TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteIcon
                          onClick={() =>
                            dispatch({
                              type: "DELETE_BY_ID",
                              payload: product.id,
                            })
                          }
                        ></DeleteIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
