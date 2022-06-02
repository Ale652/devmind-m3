import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/actions";

const AddNote = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(addNote(title, description));
    setTitle("");
    setDescription("");
  };

  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px",
          boxSizing: "border-box",
        }}
      >
        <input
          style={{ width: "50%", marginBottom: "4px" }}
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        ></input>
        <textarea
          style={{
            flex: 1,
            width: "100%",
            marginBottom: "4px",
          }}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <button onClick={addNewNote} style={{ height: "24px", width: "72px" }}>
          Add note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
