import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../redux/actions/ProductActions";
import { CardContainer, InnerProductContainer, ProductContainer } from "./productStyle";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  return (
    <ProductContainer>
      <InnerProductContainer>
        {products.map((item) => (
          <CardContainer key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div style={{ margin: "5rem" }}>
                {item.title}
                <img src={item.image} alt={item.title} style={{ width: "100px" }} />
              </div>
            </Link>
            <button type="submit" onClick={() => dispatch(addProductToCart(item))}>add</button>
          </CardContainer>
        ))}
      </InnerProductContainer>

    </ProductContainer>
  );
}

export default ProductComponent;
