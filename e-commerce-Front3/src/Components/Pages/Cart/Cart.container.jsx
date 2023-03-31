import React, {useContext} from 'react';
import Cart from './Cart';
import { CartContext } from '../../../Context/CartContext';

const CartContainer = () => {
    const { cart, clearCart, getTotalPrice, deleteProduct } = useContext(CartContext);

    return (
        <div>
            <Cart cart={cart} clearCart={clearCart} getTotalPrice={getTotalPrice} deleteProduct={deleteProduct}></Cart>
        </div>
    );
}

export default CartContainer;
