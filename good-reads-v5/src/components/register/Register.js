import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box, Button, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/actions";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';




const Register = (props) => {

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [chekPassword, setCheckPassword] = useState("");
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const [values, setValues] = React.useState({
    // username: '',
    email: '',
    firstName: '',
    lastName: '',
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

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const registerUI = () => {
    console.log(role);

    if(values.password!=values.chekPassword)
      setSnackbar({ children: 'The two passwords do not match ! Please review !', severity: 'error' });
    
    else

      fetch("http://localhost:8080/user/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            firstName: firstName,
            lastName: lastName,
            role: role,
            password: values.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }

        })
        .then((response) => {
          
          if (response.status === 401 || response.status === 500) {
            setSnackbar({ children: 'Somthing wrong with your data ! Please review ! ', severity: 'error' });
          }
          else{
            dispatch(register(email,role,password));
            setSnackbar({ children: 'Account successfully created', severity: 'success' });
          }     

    });


    // setUsername("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setRole("");

    setValues({
      username : "",
      email : "",
      firstName : "",
      lastName : "",
      password : "",
      chekPassword : ""
    });
      
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
          Sign UP:
        </Box>

        {/* <TextField value={username} id="filled-basic" label="Username" variant="outlined" onChange={(event) => setUsername(event.target.value)}/> */}

        <TextField value={email} id="filled-basic" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />

        <TextField value={firstName}  id="filled-basic" label="First Name" variant="outlined" onChange={(event) => setFirstName(event.target.value)}/>

        <TextField value={lastName}  id="filled-basic" label="Last Name" variant="outlined" onChange={(event) => setLastName(event.target.value)}/>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(event) => setRole(event.target.value)}
            >
              <MenuItem value="admin">admin</MenuItem>
              <MenuItem value="reader">reader</MenuItem>
              <MenuItem value="author">author</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            required= {true}
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

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Re-type Password</InputLabel>
          <Input
            id="standard-adornment-password"
            required= {true}
            type={values.showchekPassword ? 'text' : 'password'}
            value={values.chekPassword}
            onChange={handleChange('chekPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCheckPassword}
                  onMouseDown={handleMouseDownPasswordCheck}
                >
                  {values.showchekPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button onClick={registerUI} variant="text">
          {" "}
          Sign UP
        </Button>
      </Grid>
    </Box>
    {!!snackbar && (
      <Snackbar
        open
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert {...snackbar} onClose={handleCloseSnackbar} />
      </Snackbar>
    )}

  </Box>
  );
};

export default Register;
