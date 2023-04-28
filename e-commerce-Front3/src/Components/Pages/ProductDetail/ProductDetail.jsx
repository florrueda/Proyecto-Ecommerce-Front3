import React, { useState } from "react";
import UpdateProductContainer from "../UpdateProduct/UpdateProduct.container";
import { Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import Counter from "../../Common/Counter/Counter";

const ProductDetail = ({ product, deleteProductById, user }) => {
  const [showForm, setShowForm] = useState(false);

  const showFormFunction = () => {
    setShowForm(true);
  };

  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <Typography gutterBottom variant="h2" component="div" align="center">
          Detalle de producto
        </Typography>
        <Container
          maxWidth="sm"
          style={{ display: "flex", justifyContent: " space-around " }}
        >
          <img src={product.img} style={{ width: 200, height: "auto" }}></img>
          <div>
            <h2>{product.name}</h2>
            <h2>$ {product.price}</h2>
            <h2>Cantidad en stock: {product.stock}</h2>

            {user === null ? null : user.rol === "admin" ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => showFormFunction()}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => deleteProductById(product.id)}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1 }}
                >
                  Eliminar producto
                </Button>
              </>
            ) : null}
          </div>
        </Container>
        <Counter product={product}></Counter>
        {showForm ? (
          <UpdateProductContainer
            product={product}
            setShowForm={setShowForm}
          ></UpdateProductContainer>
        ) : null}
      </ThemeProvider>
    </div>
  );
};

export default ProductDetail;
