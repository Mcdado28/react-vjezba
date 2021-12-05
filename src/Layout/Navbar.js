import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SwipeableDrawer } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Cart from "../Components/Cart";
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="sticky">
        <Toolbar component="div" className={classes.header}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography>React vjezba</Typography>
          <Box className={classes.title}>
            <Button
              className={classes.button}
              color="inherit"
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              component={NavLink}
              to="aboutMe"
            >
              About Me
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              component={NavLink}
              to="contact"
            >
              Contact
            </Button>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            to="add-product"
          >
            Add new product
          </Button>

          <IconButton
            aria-label="cart"
            sx={{ color: "white", marginLeft: "10px", fontSize: "14px" }}
            onClick={() => setOpenDrawer(true)}
          >
            <AddShoppingCartIcon />
            Cart
          </IconButton>
        </Toolbar>
      </AppBar>
      <Fragment>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
        >
          <Cart />
        </SwipeableDrawer>
      </Fragment>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
  },
  button: {
    "&.active": {
      color: "#95bcf0",
      borderBottom: "2px solid #95bcf0",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },

  header: {
    backgroundColor: "#333333",
    color: "white",
  },
}));
