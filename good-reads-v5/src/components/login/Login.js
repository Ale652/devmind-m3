import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box, Button, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = (props) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [chekPassword, setCheckPassword] = useState("");
  const dispatch = useDispatch();



  const [values, setValues] = React.useState({
    username: '',
    email: '',
    role: '',
    password: '',
    showPassword: false,
    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUI = () => {

    return fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json"
        },
      })
      .then(response => response.json())
      .then(data => {
         dispatch(login(data.email,data.role, data.token));
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setPassword("");      
  };

  return (
    <Box
      id="AddBookComponent"
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
    }}
  >
    <Box
      style={{
        width: "50%",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
    
      <Grid container direction={"column"} spacing={5} style={{width: '200px'}}>
        <Box style={{ fontSize: 20, fontWeight: "bold" }}>
          {" "}
          Sing IN:
        </Box>

        <TextField id="filled-basic" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button onClick={loginUI} variant="text">
          {" "}
          Sing IN
        </Button>
      </Grid>    
    </Box>
  </Box>
  );
};

export default Login;
