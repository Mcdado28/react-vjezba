import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/cartStore";

import { Box } from "@mui/system";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const CartItem = ({id, title, image, price }) => {
    const classes = useStyles();

     const dispatch = useDispatch();

     const HandleRemoveFromCart = () => {
       dispatch(removeFromCart({id}))
     }

    return  <Card sx={{ display: 'flex', boxShadow: 3 }} elevation={3}>
      
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', backgroundColor: "red" }}>
        <Typography  variant="subtitle1" align="center">
          {title}
        </Typography>
        <Typography variant="subtitle2" align="center" >
          {price}$
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      
      </Box>
    </Box>
    <CardMedia className={classes.img}
      component="img"
      image={image}
      alt="product image"
    />
    <IconButton variant="outlined" onClick={HandleRemoveFromCart}  >
      <DeleteIcon /> 
    </IconButton>
  </Card>
}


const useStyles = makeStyles((theme) => ({
    img: {
      width: 50,
      margin: "0 auto",
      
      
    },
 
  }));
  

export default CartItem;