import * as React from 'react';

const Cart = ({cart}) => {
    
    return (
        <div>
            <h2>Carrito</h2>
            {
                cart.map((cart) => {
                    return <div key={cart.id} style={{border: "solid 1px white"}} >
                        <img src={cart.img} style={{width: '30%'}}/>
                        <h2>{cart.name}</h2>
                        <h3>{cart.price}</h3>
                    </div>
                })
            }
            <button onClick={() => setCart([])}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;

