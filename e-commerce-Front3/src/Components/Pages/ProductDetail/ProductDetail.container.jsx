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

    return (
        <div>
            <ProductDetail product={product}/>
        </div>
    );
}

export default ProductDetailContainer;
