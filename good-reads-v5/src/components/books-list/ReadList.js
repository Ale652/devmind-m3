import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import { getReadsdBooks } from "../redux/actions/actions";
import {Box, Button} from "@mui/material";


const ReadList = (props) => {

    const dispatch = useDispatch();
    const login = useSelector((state) => state.login);
    const books_read = useSelector((state) => state.books_read);


  

 
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
                console.log(cellValues);
                axios.delete("http://localhost:8080/removeFromReadBookForReader/"+login.id+"/"+idBookToDelete, {
                });
                dispatch(getReadsdBooks(books_read.filter(item => item.id !== idBookToDelete)));
              }}
          >
            Delete
          </Button>
        );
      }}
    ];
  

    useEffect(() => {
      (axios.get(`http://localhost:8080/getAllReadBooksForReader/1`))
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

          </Box>
        )}
  
  
      </Box>
    );
  };
  
  export default ReadList;