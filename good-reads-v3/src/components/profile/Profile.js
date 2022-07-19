import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box, Button, Modal, setRef, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useEffect} from "react";


const Profile = (props) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [chekPassword, setCheckPassword] = useState("");
    const dispatch = useDispatch();


    const register = useSelector((state) => state.register);
  
  
    useEffect(() => {
        console.log(register);
      }, []);
    
   
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
            MyProfile:
          </Box>
  
  
          <TextField  disabled id="outlined-disabled" label={register.email} variant="outlined" onChange={(event) => setEmail(event.target.value)} />
  
          <TextField  disabled id="outlined-disabled" label={register.role}  variant="outlined" onChange={(event) => setRole(event.target.value)}/>

          {/* <TextField  disabled id="outlined-disabled" label= {register.email}  variant="outlined" onChange={(event) => setPassword(event.target.value)}/> */}
  
          
        </Grid>
       
      </Box>
     
    </Box>
    );
  };
  
  export default Profile;