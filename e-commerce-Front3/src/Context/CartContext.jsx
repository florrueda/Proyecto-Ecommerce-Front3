import React, {createContext, useReducer} from 'react';

export const CartContext = createContext();

const initialState = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            let exist = state.cart.some((element) => element.id === action.payload.id)
            if(exist){
                let newArr = state.cart.map((element) => {
                    if(element.id === action.payload.id) {
                        return {
                            ...element, quantity: element.quantity + action.payload.quantity
                        }
                    } else {
                        return element
                    }
                })
                return {...state, cart: newArr}
            } else {
                return {...state, cart:[...state.cart, action.payload]}
            }
            
        case "CLEAR_CART":
            return {...state, cart:[]}
        case "GET_TOTAL_PRICE":
            let totalPrice = state.cart.reduce((acc, element) => {
                return acc + (element.price * element.quantity)
            }, 0)
            return {...state, totalPrice:totalPrice}
        case "GET_TOTAL_QUANTITY":
            let totalQuantity = state.cart.reduce((acc, element) => {
                return acc + element.quantity
            }, 0)
            return {...state, totalQuantity: totalQuantity}
        case "DELETE_BY_ID":
            let arrFiltrado = state.cart.filter(element => element.id !== action.payload)
            return {...state, cart:arrFiltrado}
        default:
            return state;
    }
}

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <CartContext.Provider value={{state, dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;
