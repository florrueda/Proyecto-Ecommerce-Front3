import React, {useState, useEffect} from 'react';
import Cart from './Cart';
import { getProductById } from "../../../services/ProductsService";
import {useParams} from 'react-router-dom'

const CartContainer = () => {
    const {id} = useParams();
    const [cart, setCart] = useState({})

    useEffect(() => {
        getProductById(id)
        .then(res => setCart(res.data))
    }, []);

    return (
        <div>
            <Cart cart={cart}></Cart>
        </div>
    );
}

export default CartContainer;
