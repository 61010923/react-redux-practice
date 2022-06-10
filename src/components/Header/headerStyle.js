import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.5s;
    z-index: 2;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: ${(props) => (props.extendNavbar ? "rgba(0,0,0,0.9)" : "black")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.69);
    -moz-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.69);
    box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.69);
    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
`;
export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;
export const NavbarInnerContainer = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    transition: 0.5s;
    &:hover {
        color: white;
        text-shadow: 0 0 10px pink,
        0 0 20px pink,
        0 0 40px pink,
        0 0 80px pink,
        0 0 100px pink,
        0 0 120px pink,
        0 0 160px pink;
        transform : translateY(-5px);
      }
    @media (max-width: 700px) {
        display: none;
    }
`;
export const LoginLink = styled.div`
    cursor: pointer;
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    transition: 0.5s;
    &:hover {
        color: white;
        text-shadow: 0 0 10px pink,
        0 0 20px pink,
        0 0 40px pink,
        0 0 80px pink,
        0 0 100px pink,
        0 0 120px pink,
        0 0 160px pink;
        transform : translateY(-5px);
      }
    @media (max-width: 700px) {
        display: none;
    }
`;
export const CartItem = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    // display: ${(props) => props.total === 0 && "none"};
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    background-color: orange;
    border-radius: 7px;
    &:hover {
        color: white;
      }

`;
export const CartLink = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    position: relative;
    transition: 0.5s;

    &:hover {
        color: white;
        text-shadow: 0 0 10px #2196f3,
        0 0 20px #2196f3,
        0 0 40px #2196f3,
        0 0 80px #2196f3,
        0 0 100px #2196f3,
        0 0 120px #2196f3,
        0 0 160px #2196f3;
        transform : translateY(-5px);
        ${CartItem} {
            color: white;
        }
      }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    transition: 0.5s;
    &:hover {
        color: pink;
      }
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;
export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    transition: 0.5s;
    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    @media (min-width: 700px) {
         display: none;
    }
`;
