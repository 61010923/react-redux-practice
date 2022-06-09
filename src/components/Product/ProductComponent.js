import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProductToCart } from "../../redux/actions/ProductActions";
import {
  AddCard,
  CardContainer, ContentBx, Img, ImgBx, InnerProductContainer, ProductContainer,
} from "./productStyle";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <ProductContainer>
      <InnerProductContainer>
        {products.map((item) => (
          <CardContainer key={item.id} onClick={() => history(`/product/${item.id}`)}>
            <ImgBx>
              <Img src={item.image} alt={item.title} />
            </ImgBx>
            <ContentBx>
              <h3>
                {item.title}
              </h3>
              <div className="price">
                $
                {item.price}
              </div>
              <AddCard type="submit" onClick={() => dispatch(addProductToCart(item))}>
                Add to card
              </AddCard>
            </ContentBx>
            {/* <Link to={`/product/${item.id}`}>
              <div style={{ margin: "5rem" }}>
                {item.title}
              </div>
            </Link>
            <button type="submit" onClick={() => dispatch(addProductToCart(item))}>add</button> */}
          </CardContainer>
        ))}
      </InnerProductContainer>

    </ProductContainer>
  );
}

export default ProductComponent;
