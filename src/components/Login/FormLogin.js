import {
  Button, TextField, Box, FormControlLabel, Checkbox, Link,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { FormContainer } from "./loginStyle";

export const FromLogin = React.forwardRef((props, ref) => (
  <FormContainer>
    <TextField
      fullWidth
      id="standard-size-normal"
      label="Username"
      variant="standard"
      value={props.username}
      onChange={(e) => props.setUsername(e.target.value)}
      inputRef={ref}
    />
    <TextField
      fullWidth
      id="standard-size-normal"
      label="Password"
      variant="standard"
      value={props.password}
      onChange={(e) => props.setPassword(e.target.value)}
    />
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
      <Link href="/" underline="none">
        Forgot password?
      </Link>
    </Box>
    <Button fullWidth variant="contained" disabled={props.disableButton} onClick={(e) => props.handleSubmit(e)}>Login</Button>
  </FormContainer>
));
FromLogin.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  disableButton: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
