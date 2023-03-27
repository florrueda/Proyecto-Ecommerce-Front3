import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ e, updateProductById, deleteProductById }) => {
  return (
    <div>
      <div style={{ alignItems: "center" }}>
        <img src={e.img} style={{ width: "200px", height: "200px" }}></img>
        <h2>{e.name}</h2>
        <h2>{e.price}</h2>
        <div>
          <button onClick={() => deleteProductById(e.id)}>
            Eliminar producto
          </button>
          <button onClick={() => updateProductById(e.id)}>Editar</button>
          <Link to={`/product-detail/${e.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
