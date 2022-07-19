import React, { useState } from "react";
import {DataGrid} from '@mui/x-data-grid';
import Grid from "@mui/material/Grid";
import {Box, Button, Modal, setRef, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
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
    chekPassword: '',
    showchekPassword: false,
    
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

  const handleClickShowCheckPassword = () => {
    setValues({
      ...values,
      showchekPassword: !values.showchekPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPasswordCheck = (event) => {
    event.preventDefault();
  };


  const loginUI = () => {

    fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
          
        dispatch(login(response.email,response.password))});

 

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


        {/* <TextField id="filled-basic" label="Password" variant="outlined" onChange={(event) => setPassword(event.target.value)}/> */}

        {/* <TextField id="filled-basic" label="Re-enter password " variant="outlined" onChange={(event) => setCheckPassword(event.target.value)}/> */}

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            // onChange={(event) => setPassword(event.target.value)}
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
            Sing UP
        </Button>
      </Grid>
     
    </Box>
   
  </Box>
  );
};

export default Login;
