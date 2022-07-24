import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import { getBooks, addBookToWishList, addBookToReadList } from "../redux/actions/actions";
import {Box, Button} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Modal, TextField} from "@mui/material";
import { setModal,closeModal } from "../redux/actions/actions";
import { isDisabled } from "@testing-library/user-event/dist/utils";

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


const Explore = (props) => {

  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [editModeValue, setEditModeValue] = useState("");
  const modal = useSelector((state) => state.modal);
  const user = useSelector((state) => state.user);

 

  const columns = [
    {field: "id", headerName: "Id"},
    {field: "title", headerName: "Title", editable: true, width: 350, },
    {field: "description", headerName: "Description", editable: true, width: 500,},
    {field: "type", headerName: "Type", width: 150},
    {field: "publishedDate", headerName: "PublishedDate", width: 150},
    {field: "details", headerName: "Details" ,renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
           onClick={(e) => {

            const bookId = cellValues.id;

          axios.get(`http://localhost:8080/book/${bookId}`)
        .then((bookData) => {
           
               const bookinfo = bookData.data;
               
               dispatch(setModal(bookinfo.title,bookinfo.description,bookinfo.publishedDate,bookinfo.type,bookinfo.status,bookinfo.id,bookinfo.author));
            
        })
        .catch(() => {
            console.error("Something went wrong for modal");
        });


           }}
        >
          Details
        </Button>
      );
    }},
    {field: "Wish", headerName: "Wish" , width: 150, onCellClick: e => {
      e.event.preventDefault() 
      console.log(e.event)
  } , renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="info"
        onClick={(event) => {

                fetch("http://localhost:8080/addBookToWishList/"+user.id, {
                method: "POST",
                body: JSON.stringify({
                    id: cellValues.id,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                });

              dispatch(addBookToWishList(cellValues.id));
            }}
        >Add to Wish
        </Button>
      );
    }},
    {field: "read", headerName: "Read" , width: 150,  renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="secondary"     
          onClick={(event) => {

              axios.post("http://localhost:8080/addBookToReadList/"+user.id+"/"+cellValues.id, {
              });
              dispatch(addBookToReadList(cellValues.id));
            }}
        >
          Add to Read
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
          disableSelectionOnClick={true}
            autoHeight="5px"
            rows={books} columns={columns}  key={books.length+1}
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

      {modal && (<div>
                <Modal open
                >
                    <Box
                        width="100%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            position="relative"
                            borderRadius="15px"
                            width="50%"
                            height="50%"
                            bgcolor="#f5aa7f"
                            display="flex"
                            flexDirection="column"
                            p={3}
                        >
                            <Box fontWeight="bold" py={1}>Person Info:</Box>

                            <Box width="100%" display="flex" alignItems="center">
                              Title : &nbsp; <span>{modal.title}</span>
                            </Box>

                            <Box width="100%" display="flex" alignItems="center">
                              Description : &nbsp; <span>{modal.description}</span>
                            </Box>

                            <Box width="100%" display="flex" alignItems="center">
                              PublishedDate : &nbsp;  <span>{modal.publishedDate}</span>
                            </Box>
                            <Box width="100%" display="flex" alignItems="center">
                              Type :  &nbsp;   <span>{modal.type}</span>
                            </Box>
                            <Box width="100%" display="flex" alignItems="center">
                              Status :  &nbsp; <span>{modal.status}</span>
                            </Box>

                            <Button variant="contained" 
                             onClick={() => dispatch(closeModal(modal))}
                            >Close Modal</Button>
                        </Box>
                    </Box>
                </Modal>
                </div>)}


    </Box>
  );
};

export default Explore;