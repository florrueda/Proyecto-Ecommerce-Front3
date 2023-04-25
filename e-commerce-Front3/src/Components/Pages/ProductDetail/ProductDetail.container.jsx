import React, {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom'
import { getDoc, collection, doc  } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ProductDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id)

    useEffect(() => {

    getDoc(refDoc).then((res) => {
      setProduct({
        ...res.data(),
        id: res.id,
      });
    });
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
        <div>
            <ProductDetail product={product} deleteProductById={deleteProductById}/>
        </div>
    );
}

export default ProductDetailContainer;
