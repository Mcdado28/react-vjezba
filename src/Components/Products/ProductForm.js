import { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Autocomplete } from "@mui/material";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: "100%",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductForm = ({ onSubmitForm, isLoading, product }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    if (product) {
      const { title, price, description, image, category } = product;
      setNewProduct({ title, price, description, image, category });
    }
    return () => {};
  }, [product]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.data;
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (event) => {
    const { id, value } = event.target;
    setNewProduct({ ...newProduct, [id]: value });
  };

  const handleAutocomplete = (event) => {
    const { id } = event.target;
    const splitId = id.split("-");
    const prop = splitId[0];
    const value = splitId[2];
    setNewProduct({
      ...newProduct,
      [prop]: categories[value],
    });
  };

  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required().positive(),
    image: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  });

  return (
    <form onSubmit={(event) => onSubmitForm(event, newProduct)}>
      <Container maxWidth="md">
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Item>
            <TextField
              fullWidth
              id="title"
              label="Title"
              value={newProduct.title}
              variant="outlined"
              onChange={handleInput}
            />
          </Item>
          <Item>
            <TextField
              fullWidth
              inputProps={{ inputMode: "numeric" }}
              id="price"
              label="Price"
              value={newProduct.price}
              variant="outlined"
              onChange={handleInput}
            />
          </Item>
          <Item>
            <TextField
              fullWidth
              id="image"
              label="Image"
              value={newProduct.image}
              variant="outlined"
              onChange={handleInput}
            />
          </Item>
          <Item>
            <Autocomplete
              disablePortal
              id="category"
              onChange={handleAutocomplete}
              options={categories}
              value={newProduct.category}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
            />
          </Item>
          <Item>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              label="Description"
              value={newProduct.description}
              variant="outlined"
              onChange={handleInput}
            />
          </Item>
          <LoadingButton
            loading={isLoading}
            type="submit"
            color="primary"
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Stack>
      </Container>
    </form>
  );
};

export default ProductForm;
