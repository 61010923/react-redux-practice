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
import { Login } from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Test from "./components/Test/Test";

function App() {
  return (
    <Router>
      <CustomizedSnackbars />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
