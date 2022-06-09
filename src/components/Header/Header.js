import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  CartLink,
  CartItem,
} from "./headerStyle";
import ShoppingImg from "../image/shoping.png";

function Header() {
  const products = useSelector((state) => state.cart);
  const total = products.reduce((sum, initialValue) => sum + initialValue.qty, 0);
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={ShoppingImg} />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/products"> Products</NavbarLink>
            <CartLink to="/cart">
              <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
              <CartItem total={total}>{total}</CartItem>
            </CartLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
      <NavbarExtendedContainer>
        <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
        <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;
