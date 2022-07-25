import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import { getReadsdBooks } from "../redux/actions/actions";
import {Box, Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import { addReview } from "../redux/actions/actions";
import Rating from '@mui/material/Rating';

const ReadList = (props) => {

    const dispatch = useDispatch();
    const login = useSelector((state) => state.login);
    const user = useSelector((state) => state.user);
    const books_read = useSelector((state) => state.books_read);


    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [publishedTimestamp, setPublishedTimestamp] = useState("");
    const [book_id, setBook_id] = useState("");
    const [reader_id, setReader_id] = useState("");
    const [id, setId] = useState("");



    const [open, setOpen] = React.useState(false);

      const handleClickOpen = (cellValues) => {
        console.log(cellValues);
        setBook_id(cellValues.id);
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
        setBook_id(undefined);
      };

  
      const addNewReview = (e) => 
       {console.log(e);
        fetch("http://localhost:8080/addReview", {
          method: "POST",
          body: JSON.stringify({
              comment: comment,
              rating: rating,
              publishedTimestamp: publishedTimestamp,
              book_id: book_id,
              reader_id: user.id,
              id : 1
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
    
        dispatch(addReview(comment,rating,publishedTimestamp,book_id,reader_id,id)); 
        setOpen(false);
      };

 
    const columns = [
      {field: "id", headerName: "Id"},
      {field: "title", headerName: "Title", editable: true, width: 450, },
      {field: "description", headerName: "Description", editable: true, width: 500,},
      {field: "type", headerName: "Type", width: 150},
      {field: "publishedDate", headerName: "PublishedDate", width: 150},
      {field: "delete", headerName: "Delete" , renderCell: (cellValues) => {
        return (
       
            <Button
              variant="contained"
              color="secondary"
              onClick={(event) => {
                  const idBookToDelete = cellValues.id;
                  console.log(idBookToDelete);
                  console.log(user.id);
                  axios.delete("http://localhost:8080/removeFromReadBookForReader/"+user.id+"/"+idBookToDelete, {
                  });
                  dispatch(getReadsdBooks(books_read.filter(item => item.id !== idBookToDelete)));
                }}
            >
              Delete
            </Button>
        
        );
      }},
      {field: "addReview", headerName: "Review" , width: 150, renderCell: (cellValues) => {
        return (
            <Button
              variant="contained"
              color="info"
              onClick={(e)=> handleClickOpen(cellValues)}
            >
              Add Review 
            </Button>

        );
      }}
    ];
  

    useEffect(() => {
      (axios.get(`http://localhost:8080/getAllReadBooksForReader/`+user.id))
      .then((response) => {      
        dispatch(getReadsdBooks(response.data))
      });
    },[]);
  
    return (  
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        {books_read === undefined && <div>Loading...</div>}
        {books_read && (
          <Box style={{ height: 300, width: "100%" }}>
            <DataGrid width="500px"
              rows={books_read} columns={columns}  key={books_read.length+1}
              />


<Dialog open={open} onClose={handleClose} fullScreen="false" >
                  <DialogTitle>Add a review</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please contribute with a review : 
                    </DialogContentText>
                    <Box
        id="AddReviewComponent"
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
              Create a comment:
            </Box>
            {/* {console.log(cellValues)} */}
  
            <TextField id="filled-basic" label="Comment" variant="outlined" onChange={(event) => setComment(event.target.value)} />
  
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={(event) => setRating(event.target.value)} />
  
            <TextField id="filled-basic" label="Published Timestap" variant="outlined" onChange={(event) => setPublishedTimestamp(event.target.value)} />
  
            {/* <TextField id="filled-basic" label="Book Id" variant="outlined" onChange={(event) => setBook_id(event.target.value)} /> */}

            {/* <TextField id="filled-basic" label="Reader Id" variant="outlined" onChange={(event) => setReader_id(event.target.value)} /> */}

  
            <Button onClick={addNewReview} variant="text">
              {" "}
              Add Review
            </Button>
          </Grid>    
        </Box>
        {/* <BooksList /> */}
      </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {/* <Button onClick={handleClose}>Subscribe</Button> */}
                  </DialogActions>
              </Dialog>



          </Box>



        )}
  
  
      </Box>
    );
  };
  
  export default ReadList;