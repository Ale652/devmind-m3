import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import Book from "../book/Book";
import { addBook, closeModal, setModal } from "../redux/actions/actions";
import { useSelector } from "react-redux";
import {Box, Button, Modal, TextField} from "@mui/material";

// const BooksList = (props) => {
//   const books = useSelector((state) => state.books);
//   return (
//     <div
//       style={{
//         padding: "8px",
//         display: "flex",
//         width: "100%",
//         flexWrap: "wrap",
//         justifyContent: "center",
//       }}
//     >
//       {books &&
//         books.map((book, bookIndex) => (
//           <Book
//             key={`book-${bookIndex}-${book.title}`}
//             title={book.title}
//             description={book.description}
//           />
//         ))}
//     </div>
//   );
// };

// export default BooksList;


const BooksList = (props) => {

  const books = useSelector((state) => state.books);
//   const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const columns = [
      {field: "title", headerName: "title"},
      {field: "description", headerName: "description"},
      {field: "type", headerName: "type", width: 900},
      {field: "publishedDate", headerName: "publishedDate"},
      {field: "author_id", headerName: "author_id"},
      {field: "id", headerName: "id"},
  ];

  useEffect(() => {
      (axios.get(`http://localhost:8080/getAllBooks`))
      .then((response) => {
          response.data.map((book, bookIndex) =>
          dispatch(addBook(book.title,book.description,book.type,book.publishedDate,book.author_id, book.id)))
      });
  }, []);

  // const onCellClick = (cellInfo) => {
  //     const userId = cellInfo.row.userId;
  //     console.log("user id is : "+userId);

  //     axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //         .then((userData) => {
             
  //                const user = userData.data;
  //                const todo = cellInfo.row;

  //                dispatch(setModal(user,todo));
  //             //    console.log("in modal " + user.username + " " + todo.id);
              
  //         })
  //         .catch(() => {
  //             console.error("Something went wrong for modal");
  //         });
  // };

  return (
      <Box width="100%" height="100%" display="flex" justifyContent="center">
          {books === undefined && <div>There is no todo yet</div>}
          {books && (
              <Box style={{ height: 300, width: "100%" }}>
                  <DataGrid 
                  autoHeight="10px"
                  // onCellClick={onCellClick}
                  rows={books} columns={columns}  key={books.length+1}/>
              </Box>
          )}
          {/* {modal && (<div>
              <Modal open
              //  onClose={() => (modal =  undefined)}
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
                              Email : &nbsp; <span>{modal.email}</span>
                          </Box>

                          <Box width="100%" display="flex" alignItems="center">
                              Name : &nbsp; <span>{modal.name}</span>
                          </Box>

                          <Box width="100%" display="flex" alignItems="center">
                              City : &nbsp;  <span>{modal.city}</span>
                          </Box>
                          <Box width="100%" display="flex" alignItems="center">
                              Street :  &nbsp;   <span>{modal.street}</span>
                          </Box>
                          <Box width="100%" display="flex" alignItems="center">
                              Websiste :  &nbsp; <span>{modal.website}</span>
                          </Box>

                          <Button variant="contained" 
                           onClick={() => dispatch(closeModal(modal))}
                          >Close Modal</Button>
                      </Box>
                  </Box>
              </Modal>
              </div>)} */}
      </Box>
  );
};

export default BooksList;