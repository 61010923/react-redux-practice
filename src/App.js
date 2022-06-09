import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header/Header";
import ProductListing from "./components/Product/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CustomizedSnackbars from "./components/Snackbar/Snackbar";

function App() {
  return (
    <Router>
      <CustomizedSnackbars />
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
