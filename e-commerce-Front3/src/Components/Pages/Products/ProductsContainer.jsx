import React, { useState, useEffect } from "react";
import Products from "./Products";
import { getProducts, deleteProduct } from "../../../services/ProductsService";


const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged,setIsChanged] = useState(false)

  const [cart, setCart] = useState([]);

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

  const addToCart = (item) => {
    const existe = cart.some((element) => element.id === item.id)
    if(!existe) {
        setCart([...cart, {...item, quantity: 1}])
    } else {
        alert('ya existe en el carrito')
    }
};

  return (
    <Products
      deleteProductById={deleteProductById}
      addToCart={addToCart}
      items={items}
    ></Products>
  );
};

export default ProductsContainer;
