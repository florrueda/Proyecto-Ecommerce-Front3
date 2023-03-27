import React, {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom'
import { getProductById } from "../../../services/ProductsService";

const ProductDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [isChanged, setIsChanged] = useState(false)

    useEffect(() => {
        setIsChanged(false)
        getProductById(id)
        .then(res => setProduct(res.data))
    }, [isChanged]);


    return (
        <div>
            <ProductDetail product={product} setIsChanged={setIsChanged} />
        </div>
    );
}

export default ProductDetailContainer;
