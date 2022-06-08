import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const products = useSelector((state) => state.cart);
  const total = products.reduce((sum, initialValue) => sum + initialValue.qty, 0);
  return (
    <div className="">
      <h2>New shop</h2>
      <Link to="/cart">
        <h2>
          cart (
          {total}
          )
        </h2>
      </Link>
    </div>
  );
}

export default Header;
