import React, {useContext, useEffect} from 'react';
import Cart from './Cart';
import { CartContext } from '../../../Context/CartContext';
import Swal from 'sweetalert2'

const CartContainer = () => {
    const { state, dispatch } = useContext(CartContext);

    useEffect(()=> {
        dispatch({type:'GET_TOTAL_PRICE'})
      },[state.cart])

      const limpiarCarrito = () => {
        Swal.fire({
          title: 'Seguro quieres limpiar el carrito?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Si, seguro',
          denyButtonText: `No, me arrepiento`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('El carrito se limpio con exito', '', 'success')
            dispatch({type:'CLEAR_CART'})
          } else if (result.isDenied) {
            Swal.fire('El carrito sigue igual', '', 'info')
          }
        })
      }

    return (
        <div>
            <Cart state={state} dispatch={dispatch} limpiarCarrito={limpiarCarrito} ></Cart>
        </div>
    );
}

export default CartContainer;
