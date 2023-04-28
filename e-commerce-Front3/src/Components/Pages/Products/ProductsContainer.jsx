import React, { useState, useEffect, useContext } from "react";
import Products from "./Products";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from 'firebase/firestore'
import { FavsContext } from "../../../Context/FavsContext";


const ProductsContainer = ({user}) => {
  const [items, setItems] = useState([]);
  
  const {state, dispatch} = useContext(FavsContext)

  useEffect(() => {
    let refCollection = collection(db, "products")
    getDocs(refCollection)
    .then((res) => {
      const products = res.docs.map(product => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setItems(products);
    })
  }, []);


  return (
    <Products
      user={user}
      items={items}
      favs={state.favs}
      dispatch={dispatch}
    ></Products>
  );
};

export default ProductsContainer;
