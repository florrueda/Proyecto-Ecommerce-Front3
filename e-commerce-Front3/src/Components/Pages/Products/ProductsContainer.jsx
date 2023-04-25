import React, { useState, useEffect, useContext } from "react";
import Products from "./Products";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { FavsContext } from "../../../Context/FavsContext";


const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  
  const {state, dispatch} = useContext(FavsContext)

  useEffect(() => {
    let refCollection = collection(db, "products")
    getDocs(refCollection)
    .then((res) => {
      const products = res.docs.map(product => {
        console.log(product);
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
      items={items}
      favs={state.favs}
      dispatch={dispatch}
    ></Products>
  );
};

export default ProductsContainer;
