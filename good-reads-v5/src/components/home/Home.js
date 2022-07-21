import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, singup, singupAction } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Login from "../login/Login";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { borderColor } from "@mui/system";
import BooksList from "../books-list/BooksList";
import {useEffect} from "react";
import { autocompleteClasses } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import Register from "../register/Register";
import { useSelector } from "react-redux";




const Home = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const singup = useSelector((state) => state.singup);

  {console.log(singup);}

  const singupUI = () => {
         dispatch(singupAction(true));
         console.log(singup);
     
  };

  const singinUI = () => {
    dispatch(singupAction(false));
    console.log(singup);

};





  return (
    <Box
      id="AddBookComponent"
      style={{
        width: "100%",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          height: "240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >

          <Box style={{ fontSize: 40, fontWeight: "bold"  }}>
              {" "} 
              Your friend online library
          </Box>
          
        <Grid container direction={"row"}>
        
        <TextField inputProps={{style: {fontSize: 35}}}
           disabled
          id="outlined-textarea"
          defaultValue="Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships."
          placeholder="Placeholder"
          multiline
        />
          <img src="/images/home.jpg" height="340px" width="400px" sx={{ width: 128, height: 128 }} />
       
     
          { singup===true ? <Register /> : <Login />}
        </Grid>
       
        
        <Grid container direction={"row"} spacing={1} style={{width: '200px'}}>
        { singup===false ?
            <Button onClick={singupUI} variant="text">
            {" "}
                Sing UP 
            </Button> 
            : 
            <Button onClick={singinUI} variant="text">
            {" "}
                Sing IN 
            </Button> 
          }
          </Grid>

        
        
       
      </Box>
    </Box>
  );
};

export default Home;