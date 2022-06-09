import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    justify-content: center;
`;

export const InnerProductContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
export const CardContainer = styled.div`
    position: relative;
    width: 320px;
    height: 420px;
    background: #122936;
    border-radius: 20px;
    overflow: hidden;
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
`;
