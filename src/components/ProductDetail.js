import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeSelectedProduct, selectedProduct } from "../redux/actions/ProductActions";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => dispatch(removeSelectedProduct());
  }, [productId]);
  return (
    <div style={{ marginTop: "100px" }}>
      {/* product is empty */}
      {Object.keys(product).length === 0 && (
      <div>loading...</div>
      )}
      <div>{product.title}</div>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <p>{product.description}</p>
      <button type="submit" onClick={() => dispatch(addProductToCart(product))}>add</button>

    </div>
  );
}

export default ProductDetail;
