import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductForm from "./ProductForm";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const fetchProduct = async (productId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + productId
      );
      const data = await response.data;

      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async (event, updatedProduct) => {
    try {
      event.preventDefault();

      setUpdatingProduct(true);
      const response = await axios.put(
        "https://fakestoreapi.com/products/" + id,
        updatedProduct
      );

      setUpdatingProduct(false);
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
    <Fragment>
      <Typography variant="h3" textAlign="center" m={4}>
        Edit Product
      </Typography>
      <ProductForm
        isLoading={updatingProduct}
        onSubmitForm={updateProduct}
        product={product}
      />
    </Fragment>
  );
};

export default EditProduct;
