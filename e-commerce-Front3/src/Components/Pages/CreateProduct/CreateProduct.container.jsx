import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { createProduct } from "../../../services/ProductsService";
import CreateProduct from './CreateProduct'

const CreateProductContainer = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        stock: "",
        img: "",
      });
    
      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
          name: newProduct.name,
          price: Number(newProduct.price),
          stock: Number(newProduct.stock),
          img: newProduct.img,
        };

        const create = createProduct(data);
        create.then((res) => console.log(res))
        .catch((err) => console.log(err))
        navigate('/products')
      };
    
      const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <CreateProduct handleChange={handleChange} handleSubmit={handleSubmit}></CreateProduct>
        </div>
    );
}

export default CreateProductContainer;
