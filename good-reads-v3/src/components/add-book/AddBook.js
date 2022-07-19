import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import "./AddBook.css";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { borderColor } from "@mui/system";
import BooksList from "../books-list/BooksList";
import {useEffect} from "react";




const AddBook = (props) => {
  const [books, updateRows] = useState(props.books);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author_id, setAuthorId] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const addNewBook = () => {
    //*************************** */

    fetch("http://localhost:8080/addBook", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        type: type,
        publishedDate: publishedDate,
        author_id: author_id,
        id : 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch(addBook(title,description,type,publishedDate,author_id,id));
  
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

          <TextField id="filled-basic" label="Title" variant="outlined" onChange={(event) => setTitle(event.target.value)} />

          <TextField id="filled-basic" label="Description" variant="outlined" onChange={(event) => setDescription(event.target.value)} />

          <TextField id="filled-basic" label="Type" variant="outlined" onChange={(event) => setType(event.target.value)} />

          <TextField id="filled-basic" label="Published Date" variant="outlined" onChange={(event) => setPublishedDate(event.target.value)} />

          <TextField id="filled-basic" label="Author Id" variant="outlined" onChange={(event) => setAuthorId(event.target.value)} />

          <Button onClick={addNewBook} variant="text">
          {" "}
          Add book
        </Button>
        </Grid>
       
      </Box>
      <BooksList/>
    </Box>
  );
};

export default AddBook;