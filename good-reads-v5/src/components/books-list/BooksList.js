import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import { getBooks } from "../redux/actions/actions";
import {Box, Button} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// inspired from chapter Persistence https://mui.com/x/react-data-grid/editing/
const useFakeMutation = () => {
  return React.useCallback(
    (book) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (book.title?.trim() === '') {
            reject(new Error("Error while saving book: name can't be empty."));
          } else {
            resolve({ ...book, title: book.title?.toUpperCase() });
          }
        }, 200),
      ),
    [],
  );
};


const BooksList = (props) => {

  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [editModeValue, setEditModeValue] = useState("");

  const processRowUpdate = React.useCallback(
    async (newRow) => {
      // Make the HTTP request to save in the backend
      console.log(newRow);

      fetch("http://localhost:8080/editBook/"+newRow.id, {
        method: "PUT",
        body: JSON.stringify({
          title: newRow.title,
          description: newRow.description,
          type: newRow.type,
          publishedDate: newRow.publishedDate,
          author_id: newRow.author_id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
          
      dispatch(getBooks(books));
    
      const response = await mutateRow(newRow);
      setSnackbar({ children: 'Book successfully saved', severity: 'success' });
      return response;
    },
    [mutateRow],
  );

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  const handleCellEditCommit =() => {
    editModeValue=="row"?setEditModeValue(""):setEditModeValue("row");
  };
  

  const columns = [
    {field: "id", headerName: "Id"},
    {field: "title", headerName: "Title", editable: true, width: 450, },
    {field: "description", headerName: "Description", editable: true, width: 450,},
    {field: "type", headerName: "Type", width: 100},
    {field: "publishedDate", headerName: "PublishedDate"},
    {field: "author_id", headerName: "Author Id"},
    {field: "details", headerName: "Details", renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          // onClick={(event) => {
          //   handleClick(event, cellValues);
          // }}
        >
          Details
        </Button>
      );
    }},
    {field: "edit", headerName: "Edit", renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="info"
          onClick={handleCellEditCommit}
        >
          {editModeValue=="row"?"Unedit":"Edit"}
        </Button>
      );
    }},
    {field: "delete", headerName: "Delete", renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) => {
              const idBookToDelete = cellValues.id;
              axios.delete("http://localhost:8080/book/"+idBookToDelete, {
              });
              dispatch(getBooks(books.filter(item => item.id !== idBookToDelete)));
            }}
        >
          Delete
        </Button>
      );
    }}
  ];

  useEffect(() => {
    (axios.get(`http://localhost:8080/getAllBooks`))
    .then((response) => {      
      dispatch(getBooks(response.data))
    });
  },[]);

  return (  
    <Box width="100%" height="100%" display="flex" justifyContent="center">
      {books === undefined && <div>Loading...</div>}
      {books && (
        <Box style={{ height: 300, width: "100%" }}>
          <DataGrid editMode={editModeValue}
            autoHeight="5px"
            rows={books} columns={columns}  key={books.length+1}
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            experimentalFeatures={{ newEditingApi: true }}
            />
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
      )}
    </Box>
  );
};

export default BooksList;