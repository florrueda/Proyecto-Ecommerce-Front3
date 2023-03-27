import {productInstance} from './ProductInstance'

export const getProducts = () => {
    let products = productInstance.get()
    return products
}

export const getProductById = (id) => {
    let products = productInstance.get(`/${id}`)
    return products
}

export const deleteProduct = (id) => {
    return productInstance.delete(`/${id}`);
}

export const updateProduct = (id,data) => {
    return productInstance.patch(`/${id}`, data );
}

export const createProduct = (data) => {
    return productInstance.post("/", data);
}