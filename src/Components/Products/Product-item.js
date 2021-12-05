import React, { Fragment }  from "react";
import { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { addToCart, cartStore } from "../../Store/cartStore";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import PriceTag from "./Price-tag";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, description, image, price, onDelete }) => {
  // Dispatch
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const toggleSnackbar = () => {
    setOpenSnackbar(!openSnackbar);
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, description, image, price }));
    toggleSnackbar()
  }

  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
   
  };

 

  return (
    <Fragment>
    
      <Card
        sx={{
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        elevation={3}
      >
        <CardMedia component="img" height="150" image={image} alt="slika" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" >
            {description}
          </Typography>
        </CardContent>
        <PriceTag>{price}$</PriceTag>
        <CardActions>
          <Button
            component={Link}
            to={`/products/${id}`}
            variant="outlined"
            sx={{ marginRight: "10px" }}
          >
            Read more
          </Button>
          <IconButton
            variant="outlined"
            component={Link}
            to={"edit-product/" + id}
            sx={{ marginRight: "10px" }}
          >
          <EditIcon/>
          </IconButton>
          <IconButton variant="outlined" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton variant="outlined"  onClick={handleAddToCart} >
          <AddShoppingCartIcon   />
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Succesufully added product to cart
          </Alert>
        </Snackbar>
    </Fragment>
  );
};

export default ProductItem;
