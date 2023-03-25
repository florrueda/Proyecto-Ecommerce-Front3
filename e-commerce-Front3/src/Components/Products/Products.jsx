import React from 'react';
import { Link } from 'react-router-dom'

const Products = ({updateProductById, deleteProductById, items}) => {
    return (
        <div>
            <div>
            <Link to='/create-product'>
                <button>Crear nuevo producto</button>
            </Link>
            <h1>Products</h1>
            {items.map(e => (
                <div key={e.id} style={{border: '2px solid white', display:'flex'}}>
                    <h2>{e.name}</h2>
                    <h2>{e.price}</h2>
                    <img src={e.img} style={{width:'200px', height:'200px'}}></img>
                    <button onClick={() => deleteProductById(e.id)}>Eliminar producto</button>
                    <button onClick={() => updateProductById(e.id)}>Editar</button>
                </div>
            ))}

        </div>
        </div>
    );
}

export default Products;
