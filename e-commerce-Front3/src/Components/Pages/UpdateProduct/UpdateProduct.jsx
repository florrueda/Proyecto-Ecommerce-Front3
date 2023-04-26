import React from "react";
import { TextField, Button, Box, Container } from "@mui/material";

const UpdateProduct = ({ handleSubmit, productUpdated, setProductUpdated }) => {

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
            defaultValue={productUpdated?.name}
            autoFocus
            onChange={(e) =>
              setProductUpdated({ ...productUpdated, name: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Precio del producto"
            name="price"
            defaultValue={productUpdated?.price}
            autoFocus
            onChange={(e) =>
              setProductUpdated({ ...productUpdated, price: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="stock"
            label="Stock del producto"
            name="stock"
            defaultValue={productUpdated?.stock}
            autoFocus
            onChange={(e) =>
              setProductUpdated({ ...productUpdated, stock: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="img"
            label="Imagen del producto"
            name="img"
            defaultValue={productUpdated?.img}
            autoFocus
            onChange={(e) =>
              setProductUpdated({ ...productUpdated, img: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3E6765" }}
          >
            Aceptar cambios
          </Button>
          
        </Box>
      </Container>
    </div>
  );
};

export default UpdateProduct;
