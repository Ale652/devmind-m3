import React from "react";
import Book from "../book/Book";
import { useSelector } from "react-redux";

const BooksList = (props) => {
  const books = useSelector((state) => state.books);
  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {books &&
        books.map((book, bookIndex) => (
          <Book
            key={`book-${bookIndex}-${book.title}`}
            title={book.title}
            description={book.description}
          />
        ))}
    </div>
  );
};

export default BooksList;