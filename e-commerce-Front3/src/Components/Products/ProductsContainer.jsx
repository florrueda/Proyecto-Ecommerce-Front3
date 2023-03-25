import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged,setIsChanged] = useState(false)

  useEffect(() => {
    setIsChanged(false);
    const productos = axios.get("http://localhost:5000/products");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChanged(true);
  };

  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      price: 6000,
      name: "zapas X",
    });
    setIsChanged(true);
  };

  return (
    <Products
      updateProductById={updateProductById}
      deleteProductById={deleteProductById}
      items={items}
    ></Products>
  );
};

export default ProductsContainer;
