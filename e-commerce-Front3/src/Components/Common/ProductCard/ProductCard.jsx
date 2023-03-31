import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./ProductCard.css";
import Counter from "../Counter/Counter";


const ProductCard = ({ e, deleteProductById }) => {
  return (
    <div>
      <div className="card">
        <img src={e.img} style={{ width: "200px", height: "200px" }}></img>
        <h2>{e.name}</h2>
        <h2>$ {e.price}</h2>
        <div>
          <Button
            onClick={() => deleteProductById(e.id)}
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#3E6765",
              textDecoration: "none",
              margin: "0.5rem",
            }}
          >
            Eliminar producto
          </Button>
          <Link
            to={`/product-detail/${e.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3E6765",
                textDecoration: "none",
                margin: "0.5rem",
              }}
            >
              Ver detalle
            </Button>
          </Link>
        <Counter product={e}></Counter>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
