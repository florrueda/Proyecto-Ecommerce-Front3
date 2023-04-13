import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

const Cart = ({ state, dispatch, limpiarCarrito }) => {
  
  return (
    <div>
      <h1>Carrito</h1>
      <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.cart.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              
              <TableCell align="right">{product.price * product.quantity}</TableCell>
              <Button onClick={()=>dispatch({type:'DELETE_BY_ID', payload:product.id})}>Eliminar producto</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <div>
            <h3>El total del carrito es: {state.totalPrice}</h3>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
