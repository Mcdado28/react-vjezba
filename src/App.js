import "./App.css";
import { Provider } from "react-redux";
import Navbar from "./Layout/Navbar";
import Home from "./Layout/Menu/Home.page";
import About from "./Layout/Menu/AboutMe";
import Contact from "./Layout/Menu/Contact";
import ProductDetails from "./Components/Products/Product-details";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./Components/Products/AddProduct";
import EditProduct from "./Components/Products/EditProduct";
import { cartStore } from "./Store/cartStore";

function App() {
  return (
    <Provider store={cartStore}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="aboutMe" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="products/:id" element={<ProductDetails />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="edit-product/:id" element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
