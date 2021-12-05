import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CartItem from "./CartItem";
import { IconButton } from "@material-ui/core";
import { emptyCart } from "../Store/cartStore";
// import { ProductForm, AddProduct } from './Products';

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const total = products.reduce((curr, next) => curr + next.price, 0);
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div sx={{ padding: "80px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box>Total: {total}$</Box>
        <Box></Box>
        <IconButton onClick={handleEmptyCart}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </Box>

      {products.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Cart;
