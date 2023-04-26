import React, {useState} from 'react';
import UpdateProduct from './UpdateProduct';
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useParams} from 'react-router-dom'

const UpdateProductContainer = ({product, setShowForm}) => {

    const [productUpdated, setProductUpdated] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        img: product.img
    });

    const {id} = useParams();
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id)

    const handleSubmit = (e) => {
        e.preventDefault()
        let dataUpdate = {
            ...productUpdated,
            name: productUpdated.name,
            price: Number(productUpdated.price),
            stock: Number(productUpdated.stock),
            img: productUpdated.img,
          };
        
        updateDoc( refDoc, dataUpdate )
        setShowForm(false)
    }

    return (
        <div>
            <UpdateProduct handleSubmit={handleSubmit} setProductUpdated={setProductUpdated} productUpdated={productUpdated} ></UpdateProduct>
        </div>
    );
}

export default UpdateProductContainer;
