import React from "react";

const Note = (props) => {
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
      <h3>{props.title}</h3>
      <span style={{ marginTop: "8px" }}>{props.description}</span>
    </div>
  );
};

export default Note;
