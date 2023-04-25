import React, { useContext } from 'react';
import { FavsContext } from '../../../Context/FavsContext';
import Favs from './Favs';

const FavsContainer = () => {
    const { state, dispatch } = useContext(FavsContext);

    return (
        <div>
            <Favs favs={state.favs} dispatch={dispatch}></Favs>
        </div>
    );
}

export default FavsContainer;
