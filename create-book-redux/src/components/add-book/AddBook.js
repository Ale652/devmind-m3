import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/actions/actions";

const AddBook = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addNewBook = () => {

    //*************************** */

    fetch('http://localhost:8080/addBook', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				description: 'New body added. Hello body.',
        type: 'Fantasy',
        publishedDate : '22-06-2019',
				author_id: 14
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response =>{console.log("hello")});
//*************************** */


    dispatch(addBook(title, description));
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
        <button onClick={addNewBook} style={{ height: "24px", width: "72px" }}>
          Add book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
