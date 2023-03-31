import React, { useState, useEffect } from "react";
import Products from "./Products";
import { getProducts, deleteProduct } from "../../../services/ProductsService";


const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged,setIsChanged] = useState(false)

  useEffect(() => {
    setIsChanged(false);
    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const deleteProductById = (id) => {
    deleteProduct(id)
    setIsChanged(true);
  };

  return (
    <Products
      deleteProductById={deleteProductById}
      items={items}
    ></Products>
  );
};

export default ProductsContainer;
