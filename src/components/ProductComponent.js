import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCard } from "../redux/actions/ProductActions";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  return (
    <>
      {products.map(({ id, title, image }) => (
        <div key={id}>
          <Link to={`/product/${id}`}>
            <div style={{ margin: "5rem" }}>
              {title}
              <img src={image} alt={title} style={{ width: "100px" }} />
            </div>
          </Link>
          <button type="submit" onClick={() => dispatch(addProductToCard({ id, title, image }))}>add</button>
        </div>
      ))}
    </>
  );
}

export default ProductComponent;
