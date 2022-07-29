import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box, Button, TextField} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login, user } from "../redux/actions/actions";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";


const Login = (props) => {

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [chekPassword, setCheckPassword] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);




  const [values, setValues] = React.useState({
    // username: '',
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
          password: values.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json"
        },
      })
      .then(response => response.json())
      .then((data) => {
                            dispatch(login(data.email,data.role, data.token));
                            // console.log(data.email);
                            return data;})
      .then((data) =>{
        // console.log(data);
        // console.log("here");
        if(data.role=="READER")
          return fetch("http://localhost:8080/getReaderByEmail", {
                method: "POST",
                body: JSON.stringify({
                  email: data.email,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Accept": "application/json"
                },
              }).then(response => response.json())
                .then(data => {
                              // console.log(data);
                              return axios.get(`http://localhost:8080/reader/`+data.id)})
                .then((response) => { 
                                      const userInfo = response.data; 
                                      console.log(userInfo); 
                                      console.log("userInfo");
                                      dispatch(user(userInfo.email,userInfo.firstName, userInfo.lastName, userInfo.id));
                                      })
                                      



                                      if(data.role=="AUTHOR")
                                      return fetch("http://localhost:8080/getAuthorByEmail", {
                                            method: "POST",
                                            body: JSON.stringify({
                                              email: data.email,
                                            }),
                                            headers: {
                                              "Content-type": "application/json; charset=UTF-8",
                                              "Accept": "application/json"
                                            },
                                          }).then(response => response.json())
                                            .then(data => { dispatch(user(data.email,data.firstName, data.lastName, data.id));
                                                                  })

                })



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
          Sign IN:
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
          Sign IN
        </Button>
      </Grid>    
    </Box>
  </Box>
  );
};

export default Login;
