import { useState, useEffect } from "react";
import ProductItem from "./Product-item";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import axios from "axios";

const ProductList = () => {
  const [proizvodi, setProizvodi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setError] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    setError(null);
  };

  useEffect(() => {
    getProizvodi();
    return () => {};
  }, []);

  const getProizvodi = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProizvodi(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Page doesnt load");
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        "https://fakestoreapi.com/products/" + productId
      );
      const data = await response.data;
      setProizvodi(proizvodi.filter((proizvod) => proizvod.id !== productId));
      setOpenSnackbar(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {proizvodi.map((proizvod) => (
          <Box key={proizvod.id} gridColumn="span 4">
            <ProductItem {...proizvod} onDelete={deleteProduct} />
          </Box>
        ))}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Succesufully deleted product
        </Alert>
      </Snackbar>
      <Snackbar open={errors} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errors}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductList;
