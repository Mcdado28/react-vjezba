import { useState, Fragment } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  const [addingNewProduct, setAddingNewProduct] = useState(false);

  const addNewProduct = async (event, product) => {
    try {
      event.preventDefault();
      setAddingNewProduct(true);
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );

      setAddingNewProduct(false);
    } catch (err) {
      console.log(err);
      setAddingNewProduct(false);
    }
  };

  return (
    <Fragment>
      <Typography variant="h3" textAlign="center" m={4}>
        Add Product
      </Typography>
      <ProductForm onSubmitForm={addNewProduct} isLoading={addingNewProduct} />
    </Fragment>
  );
};

export default AddProduct;
