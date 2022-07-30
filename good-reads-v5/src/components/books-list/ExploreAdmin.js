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
import Rating from '@mui/material/Rating';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


const ExploreAdmin = (props) => {

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
//     {field: "Wish", headerName: "Wish" , width: 150, onCellClick: e => {
//       e.event.preventDefault() 
//       console.log(e.event)
//   } , renderCell: (cellValues) => {
//       return (
//         <Button
//           variant="contained"
//           color="info"
//         onClick={(event) => {

//                 fetch("http://localhost:8080/addBookToWishList/"+user.id, {
//                 method: "POST",
//                 body: JSON.stringify({
//                     id: cellValues.id,
//                 }),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//                 });

//               dispatch(addBookToWishList(cellValues.id));
//             }}
//         >Add to Wish
//         </Button>
//       );
//     }},
//     {field: "read", headerName: "Read" , width: 150,  renderCell: (cellValues) => {
//       return (
//         <Button
//           variant="contained"
//           color="secondary"     
//           onClick={(event) => {

//               axios.post("http://localhost:8080/addBookToReadList/"+user.id+"/"+cellValues.id, {
//               });
//               dispatch(addBookToReadList(cellValues.id));
//             }}
//         >
//           Add to Read
//         </Button>
//       );
//     }}
  ];

  useEffect(() => {
    (axios.get(`http://localhost:8080/getAllBooksByStatus/1`))
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
                            bgcolor="#FFFFFF"
                            display="flex"
                            flexDirection="column"
                            p={3}
                        >
                            <Box fontWeight="bold" py={1}>Book Info:</Box>

                            <TableContainer component={Paper}>
                              <TableBody>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Title : &nbsp;</TableCell>
                                  <TableCell><span>{modal.title}</span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Description : &nbsp; </TableCell>
                                  <TableCell><span>{modal.description}</span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>PublishedDate : &nbsp; </TableCell>
                                  <TableCell><span>{modal.publishedDate}</span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Type :  &nbsp;   </TableCell>
                                  <TableCell><span>{modal.type}</span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Rating :  &nbsp; </TableCell>
                                  <TableCell><span> 
                                  <Rating name="half-rating" defaultValue={modal.global_rating} precision={0.5} />
                                  </span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Status :  &nbsp; </TableCell>
                                  <TableCell><span>{modal.status}</span></TableCell>
                                </TableRow>

                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Author Email :  &nbsp; </TableCell>
                                  <TableCell><span>{modal.author_email}</span> </TableCell>
                                </TableRow>
                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Author First Name :  &nbsp; </TableCell>
                                  <TableCell><span>{modal.author_firstName}</span></TableCell>
                                </TableRow>
                                <TableRow width="100%" display="flex" alignItems="center">
                                  <TableCell>Author Last Name :  &nbsp;</TableCell> 
                                  <TableCell><span>{modal.author_lastName}</span></TableCell>
                                </TableRow>
                              </TableBody>
                            </TableContainer>

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

export default ExploreAdmin;