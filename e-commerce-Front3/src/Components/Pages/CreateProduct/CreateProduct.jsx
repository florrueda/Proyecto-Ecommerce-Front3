import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateProduct = () => {
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };
    axios.post("http://localhost:5000/products", data);
    navigate('/products')
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Crear un nuevo producto</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="img"
          placeholder="url del producto"
          onChange={handleChange}
        ></input>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateProduct;
