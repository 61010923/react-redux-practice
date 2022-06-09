import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart, removeAll, removeProduct, removeProductToCart,
} from "../redux/actions/ProductActions";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = products.reduce((sum, initialValue) => sum + initialValue.qty * initialValue.price, 0);
  return (
    <>
      {total !== 0 && (
      <div style={{ marginTop: "100px" }}>
        <h1>
          total:
          {" "}
          {total}
        </h1>
        <button type="submit" onClick={() => { dispatch(removeAll()); }}>remove all</button>
      </div>
      )}

      {products.map((item) => (
        <div key={item.id}>
          <div style={{ margin: "5rem" }}>
            {item.title}
            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
            <h3>
              amount:
              {" "}
              {item.qty}
              *
              {" "}
              {item.price}
            </h3>
            <h3>
              total:
              {" "}
              {item.qty * item.price}
            </h3>
          </div>
          <button type="submit" onClick={() => { dispatch(addProductToCart(item)); }}>+</button>
          <button type="submit" onClick={() => { dispatch(removeProductToCart(item)); }}>-</button>
          <button type="submit" onClick={() => { dispatch(removeProduct(item)); }}>remove</button>
        </div>
      ))}
    </>
  );
}

export default Cart;
