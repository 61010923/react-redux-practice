import {
  TextField, Button, FormControlLabel, Checkbox, Box, Link,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { alertSnackbar, login } from "../../redux/actions/ProductActions";
import { FormContainer, InnerLoginContainer, LoginContainer } from "./loginStyle";
import { FromLogin } from "./FormLogin";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const usernameRef = useRef(null);
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
        usernameRef.current.focus();
        setDisableButton(false);
        dispatch(alertSnackbar({ open: true, message: "Sorry, we could not find your account.", severity: "info" }));
      }
    } else {
      usernameRef.current.focus();
      setDisableButton(false);
      dispatch(alertSnackbar({ open: true, message: "please fill your username or password", severity: "info" }));
    }
  };
  return (
    <LoginContainer>
      <InnerLoginContainer>
        {isLogin ? (<CircularProgress />)
          : (
            <FromLogin
              ref={usernameRef}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              disableButton={disableButton}
              handleSubmit={handleSubmit}
            />
          )}

      </InnerLoginContainer>
    </LoginContainer>
  );
}
