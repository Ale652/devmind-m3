import React from "react";

const Book = (props) => {
  return (
    <div
      style={{
        width: "240px",
        height: "240px",
        background: "#f5b042",
        borderRadius: "10px",
        overflowY: "auto",
        margin: "4px",
      }}
    >
      <div>Title : {props.title}</div>
      <span style={{ marginTop: "8px" }}>Description :{props.description}</span>
      <div>Type : {props.type}</div>
      <div>Published Date : {props.publishedDate}</div>
      <div>Author Id : {props.author_id}</div>
    </div>
  );
};

export default Book;