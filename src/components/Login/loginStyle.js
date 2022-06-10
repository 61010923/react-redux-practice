import styled from "styled-components";
import { Box } from "@mui/material";

export const LoginContainer = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const InnerLoginContainer = styled(Box)`
    margin-top: 80px;
    width: 80%;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const FormContainer = styled(Box)`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap:10px;
`;
