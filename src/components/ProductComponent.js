import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  //   const { id, title } = products[0];
  return (
    <>
      {products.map(({ id, title, image }) => (
        <Link to={`/product/${id}`} key={id}>
          <div style={{ margin: "5rem" }}>
            {title}
            <img src={image} alt={title} style={{ width: "100px" }} />
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductComponent;
