import React, { useState } from "react";
import UpdateProductContainer from "../UpdateProduct/UpdateProduct.container";
import { Button, Container } from "@mui/material";

const ProductDetail = ({ product, setIsChanged }) => {
  const [showForm, setShowForm] = useState(false);

  const showFormFunction = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h1>Product Detail</h1>
      <Container maxWidth="xs" style={{ display: "flex", justifyContent:"center", textAlign:"center"}}>
      <div>
        <img
          src={product.img}
          style={{ width: "200px", height: "200px" }}
        ></img>
        <h2>{product.name}</h2>
        <h2>$ {product.price}</h2>
        <h2>Cantidad: {product.stock}</h2>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#3E6765" }}
          onClick={() => showFormFunction()}
        >
          Editar
        </Button>
        {showForm ? (
          <UpdateProductContainer
            product={product}
            setIsChanged={setIsChanged}
            setShowForm={setShowForm}
          ></UpdateProductContainer>
        ) : null}
      </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
