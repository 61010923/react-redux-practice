import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  LoginLink,
} from "./headerStyle";
import ShoppingImg from "../image/shoping.png";
import { alertSnackbar, logout } from "../../redux/actions/ProductActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart);
  const { username, isLogin } = useSelector((state) => state.user);
  const total = products.reduce((sum, initialValue) => sum + initialValue.qty, 0);
  const [extendNavbar, setExtendNavbar] = useState(false);
  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    await dispatch(alertSnackbar({ open: true, message: "Logout success", severity: "success" }));
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  console.log({ username, isLogin });
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={ShoppingImg} />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            {isLogin ? (
              <LoginLink onClick={(e) => {
                handleLogout(e);
              }}
              >
                logout
              </LoginLink>
            ) : (<NavbarLink to="/login">Login</NavbarLink>)}
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
        <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;
