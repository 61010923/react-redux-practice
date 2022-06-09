import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProductToCart, alertSnackbar } from "../../redux/actions/ProductActions";
import {
  AddCard,
  CardContainer, ContentBx, Img, ImgBx, InnerProductContainer, ProductContainer,
} from "./productStyle";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [search, setSearch] = useState("");
  const AllProducts = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  const handleAddProduct = async (item) => {
    await dispatch(addProductToCart(item));
    dispatch(alertSnackbar({ open: true, message: "Add to card completed", severity: "success" }));
  };
  return (
    <ProductContainer>
      <InnerProductContainer>
        <TextField
          fullWidth
          label="Search"
          onChange={(e) => { handleSearch(e); }}
        />
        {AllProducts.map((item) => (
          // <CardContainer key={item.id} onClick={() => history(`/product/${item.id}`)}>
          <CardContainer key={item.id}>
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
              <AddCard type="submit" onClick={() => { handleAddProduct(item); }}>
                Add to card
              </AddCard>
            </ContentBx>
          </CardContainer>
        ))}
      </InnerProductContainer>

    </ProductContainer>
  );
}

export default ProductComponent;
