import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [detail, setDetails] = useState(null);

  useEffect(() => {
    getDetails();
    return () => {};
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      const data = await response.data;
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container maxWidth="xl">{id}</Container>
    </div>
  );
};

export default ProductDetails;
