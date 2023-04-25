import React, { useState, useEffect } from "react";
import Products from "./Products";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'


const ProductsContainer = () => {
  const [items, setItems] = useState([]);

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

  const deleteProductById = (id) => {
    Swal.fire({
      title: 'Seguro quieres eliminar el producto?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, seguro',
      denyButtonText: `No, me arrepiento`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('El producto se elimino con exito', '', 'success')
        deleteDoc(doc(db, "products", id));
      } else if (result.isDenied) {
        Swal.fire('El producto no ha sido eliminado', '', 'info')
      }
    })
    
  }


  return (
    <Products
      items={items}
      deleteProductById={deleteProductById}
    ></Products>
  );
};

export default ProductsContainer;
