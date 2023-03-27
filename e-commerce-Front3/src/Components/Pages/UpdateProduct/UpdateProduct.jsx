import React from "react";
import { TextField, Button, Box, Container } from "@mui/material";

const UpdateProduct = ({ handleChange, handleSubmit, productUpdated }) => {
  return (
    <div>
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre del producto"
            name="name"
            value={productUpdated.name}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Precio del producto"
            name="price"
            value={productUpdated.price}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="stock"
            label="Stock del producto"
            name="stock"
            value={productUpdated.stock}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="img"
            label="Imagen del producto"
            name="img"
            value={productUpdated.img}
            autoFocus
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3E6765" }}
          >
            Editar
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default UpdateProduct;
