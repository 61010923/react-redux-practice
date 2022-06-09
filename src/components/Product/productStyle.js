import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const InnerProductContainer = styled.div`
    margin-top: 120px;
    margin-bottom: 40px;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;
export const ImgBx = styled.div`
    position:relative;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:20px;
    z-index:1;
`;
export const Img = styled.img`
    max-width:60%;
    transition:0.5s;
`;
export const ContentBx = styled.div`
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align : center;
      z-index: 1;
      h3 {
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .price {
        font-size:24px;
        color:#fff;
        font-weight:500;
        Letter-spacing:1px;
      }
`;
export const AddCard = styled.button`
        position:relative;
        top:200px;
        opacity:0;
        padding:10px 30px;
        margin-top:15px;
        color:#fff;
        text-decoration:none;
        background:#2196f3;
        border-radius:30px;
        border: none;
        text-transform:uppercase;
        Letter-spacing:1px;
        transition:0.5s;
        cursor: pointer;
`;

export const CardContainer = styled.div`
        position:relative;
        cursor: pointer;
        width:320px;
        height:420px;
        background:#122936;
        border-radius:20px;
        overflow:hidden;
    &:before {
        content: "";
        position: absolute;
        top: -50%;
        width: 100%;
        height: 100%;
        background: #2196f3;
        transform: skewY(345deg);
        transition: 0.5s;
      }
    &:after {
        content: 'New';
        position: absolute;
        bottom: 70px;
        left:0;
        font-weight: 600;
        font-size: 8em;
        color: rgba(0,0,0,0.1);
    }
      &:hover {
        &:before {
            top: -70%;
            transform: skewY(390deg);
        }
        ${ImgBx} {
            ${Img} {
                max-width: 50%;
            }
        }
        ${ContentBx} {
            ${AddCard}{
                top: 0;
                opacity: 1;
            }
        }
      }
`;
