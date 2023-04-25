import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import CreateProduct from './CreateProduct'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

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
        let dataProduct = {
          name: newProduct.name,
          price: Number(newProduct.price),
          stock: Number(newProduct.stock),
          img: newProduct.img,
        };

        let refCollection = collection(db, "products")
        addDoc(refCollection, dataProduct).then().catch((error) => console.log(error))
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
