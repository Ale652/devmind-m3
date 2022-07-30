import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/actions/actions";
import Button from "@mui/material/Button";
import "./AddBook.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BooksListAdmin from "../books-list/BooksListAdmin";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





const AddBookAuthor = (props) => {
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author_id, setAuthorId] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  // const [dateValue, setDateValue] = React.useState(new Date('2014-08-18T21:11:54'));


  const addNewBook = () => {
    fetch("http://localhost:8080/addBook", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        type: type,
        publishedDate: publishedDate,
        author_id: user.id,
        // id : 1
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
      
        <Grid container direction={"column"} spacing={5} style={{width: '200px'}}>
          <Box style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Create a book:
          </Box>

          <TextField id="filled-basic" label="Title" variant="outlined" onChange={(event) => setTitle(event.target.value)} />

          <TextField id="filled-basic" label="Description" variant="outlined" onChange={(event) => setDescription(event.target.value)} />

          {/* <TextField id="filled-basic" label="Type" variant="outlined" onChange={(event) => setType(event.target.value)} /> */}

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="Art">Art</MenuItem>
              <MenuItem value="Biography">Biography</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Christian">Christian</MenuItem>
              <MenuItem value="Classics">Classics</MenuItem>
              <MenuItem value="Comics">Comics</MenuItem>

              <MenuItem value="Contemporary">Contemporary</MenuItem>
              <MenuItem value="Cookbooks">Cookbooks</MenuItem>
              <MenuItem value="Crime">Crime</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Fiction">Fiction</MenuItem>
              <MenuItem value="History">History</MenuItem>


              <MenuItem value="Horror">Horror</MenuItem>
              <MenuItem value="Manga">Manga</MenuItem>
              <MenuItem value="Memoir">Memoir</MenuItem>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="Mystery">Mystery</MenuItem>
              <MenuItem value="Nonfiction">Nonfiction</MenuItem>

              <MenuItem value="Paranormal"> Paranormal</MenuItem>
              <MenuItem value="Poetry">Poetry</MenuItem>
              <MenuItem value="Psychology">Psychology</MenuItem>
              <MenuItem value="Religion">Religion</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
            </Select>
          </FormControl>


          {/* <TextField id="filled-basic" label="Published Date" variant="outlined" onChange={(event) => setPublishedDate(event.target.value)} /> */}

          {/* <DesktopDatePicker
          label="Published Date"
          inputFormat="MM/dd/yyyy"
          value={publishedDate}
          onChange={(event) => setPublishedDate(event.target.value)}
          renderInput={(params) => <TextField {...params} />}
          /> */}


          <TextField
            id="date"
            label="Published Date"
            type="date"
            // defaultValue="2017-05-24"
            // sx={{ width: 250 }}
            onChange={(event) => setPublishedDate(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* <TextField id="filled-basic" label="Author Id" variant="outlined" onChange={(event) => setAuthorId(event.target.value)} /> */}

          <Button onClick={addNewBook} variant="text">
            {" "}
            Add book
          </Button>
        </Grid>    
      </Box>
      <BooksListAdmin />
    </Box>
  );
};

export default AddBookAuthor;