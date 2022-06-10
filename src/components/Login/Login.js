import {
  TextField, Button, FormControlLabel, Checkbox, Box, Link,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { alertSnackbar, login } from "../../redux/actions/ProductActions";
import { FormContainer, InnerLoginContainer, LoginContainer } from "./loginStyle";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableButton(true);
    if (username !== "" && password !== "") {
      if (username === "vanakorn" && password === "new") {
        await dispatch(login({ username, isLogin: true }));
        await dispatch(alertSnackbar({ open: true, message: "Login successful", severity: "success" }));
        setDisableButton(false);
        setTimeout(() => {
          navigate("/cart");
        }, 3000);
      } else {
        setDisableButton(false);
        dispatch(alertSnackbar({ open: true, message: "Sorry, we could not find your account.", severity: "info" }));
      }
    } else {
      setDisableButton(false);
      dispatch(alertSnackbar({ open: true, message: "please fill your username or password", severity: "info" }));
    }
  };
  return (
    <LoginContainer>
      <InnerLoginContainer>
        {isLogin ? (<CircularProgress />)
          : (
            <FormContainer>
              <TextField
                fullWidth
                id="standard-size-normal"
                label="Username"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                id="standard-size-normal"
                label="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Link href="/" underline="none">
                  Forgot password?
                </Link>
              </Box>
              <Button fullWidth variant="contained" disabled={disableButton} onClick={(e) => handleSubmit(e)}>Login</Button>
            </FormContainer>
          )}

      </InnerLoginContainer>
    </LoginContainer>
  );
}
