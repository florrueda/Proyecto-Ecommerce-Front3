import React, {useState, useEffect} from 'react';
import UpdateProduct from './UpdateProduct';
import { updateProduct, getProductById } from "../../../services/ProductsService";

const UpdateProductContainer = ({product, setIsChanged, setShowForm}) => {

    const [productUpdated, setProductUpdated] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        img: product.img
    });

    const updateProductById = (id, product) => {
        const update = updateProduct(id, product);
        update.then((res) => console.log(res))
        .catch((err) => console.log(err))
    }


    const handleChange = (e) => {
        setProductUpdated({...productUpdated, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: productUpdated.name,
            price: Number(productUpdated.price),
            stock: Number(productUpdated.stock),
            img: productUpdated.img,
          };
        
        updateProductById(product.id, data);
        setIsChanged(true)
        setShowForm(false)
        
    }

    return (
        <div>
            <UpdateProduct handleChange={handleChange} handleSubmit={handleSubmit} productUpdated={productUpdated}></UpdateProduct>
        </div>
    );
}

export default UpdateProductContainer;
