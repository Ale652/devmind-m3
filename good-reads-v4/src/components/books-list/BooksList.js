import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect} from "react";
import Book from "../book/Book";
import { addBook, closeModal, setModal,getBooks } from "../redux/actions/actions";
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

  const login = useSelector((state) => state.login);

  const columns = [
      {field: "id", headerName: "Id"},
      {field: "title", headerName: "Title"},
      {field: "description", headerName: "Description"},
      {field: "type", headerName: "Type", width: 900},
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
      {field: "deteditails", headerName: "Edit", renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="info"
            // onClick={(event) => {
            //   handleClick(event, cellValues);
            // }}
          >
            Edit
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
                console.log(typeof idBookToDelete);
                axios.delete("http://localhost:8080/book/"+idBookToDelete, {
                    
                // headers: {
                //     Authorization: authorizationToken
                // },
                // data: {
                //     source: source
                // }
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
    console.log("called useEffect");
      (axios.get(`http://localhost:8080/getAllBooks`))
      .then((response) => {
          
          dispatch(getBooks(response.data))
      });
  },[]);


  return (
    
      <Box width="100%" height="100%" display="flex" justifyContent="center">
          {books === undefined && <div>There is no todo yet</div>}
          {books && (
              <Box style={{ height: 300, width: "100%" }}>
                  <DataGrid 
                //    autoHeight="5px"
                  // onCellClick={onCellClick}
                  rows={books} columns={columns}  key={books.length+1}/>
              </Box>
          )}
      </Box>
  );
};

export default BooksList;