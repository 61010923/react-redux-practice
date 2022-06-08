import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../redux/actions/ProductActions";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            <div style={{ margin: "5rem" }}>
              {item.title}
              <img src={item.image} alt={item.title} style={{ width: "100px" }} />
            </div>
          </Link>
          <button type="submit" onClick={() => dispatch(addProductToCart(item))}>add</button>
        </div>
      ))}
    </>
  );
}

export default ProductComponent;
