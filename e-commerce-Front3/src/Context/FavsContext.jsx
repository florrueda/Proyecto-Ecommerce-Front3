import React, {createContext, useReducer} from 'react';

export const FavsContext = createContext()

const initialState = {
    favs: JSON.parse(localStorage.getItem("favs")) || [],
}

const removefav = (id, state) => {
    const newArr = state.favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(newArr));
    return newArr;
  };

const globalReducer = (state, action)=> {
    switch (action.type) {
        case "HANDLE_FAVORITE":
                const isInFavorite = state.favs.some(
                  (fav) => fav.id === action.payload.id
                );
          
                isInFavorite
                  ? removefav(action.payload.id, state)
                  : localStorage.setItem("favs", JSON.stringify([...state.favs, action.payload]));
          
            return isInFavorite
                  ? { ...state, favs: removefav(action.payload.id, state) }
                  : { ...state, favs: [...state.favs, action.payload] };
        default:
            state;
    }

}

const FavsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, initialState)

    return (
        <FavsContext.Provider value={{state, dispatch}}>
            {children}
        </FavsContext.Provider>
    );
}

export default FavsContextProvider;
