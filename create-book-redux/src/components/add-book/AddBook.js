import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import "./AddBook.css";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { borderColor } from "@mui/system";

const AddBook = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addNewBook = () => {
    //*************************** */

    fetch("http://localhost:8080/addBook", {
      method: "POST",
      body: JSON.stringify({
        title: "New title added",
        description: "New body added. Hello body.",
        type: "Fantasy",
        publishedDate: "22-06-2019",
        author_id: 14,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log("hello");
    });
    //*************************** */

    dispatch(addBook(title, description));
    setTitle("");
    setDescription("");
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
            Create a book:
          </Box>

          <TextField id="filled-basic" label="Title" variant="outlined" />

          <TextField id="filled-basic" label="Description" variant="outlined" />

          <TextField id="filled-basic" label="Type" variant="outlined" />

          <TextField id="filled-basic" label="Published Date" variant="outlined" />

          <TextField id="filled-basic" label="Author Id" variant="outlined" />

          <Button onClick={addNewBook} variant="text">
          {" "}
          Add book
        </Button>
        </Grid>
       
      </Box>
    </Box>
  );
};

export default AddBook;
