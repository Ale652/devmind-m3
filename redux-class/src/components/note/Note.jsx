import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote, editNote } from "../../redux/actions/actions";


     
const Note = (props) => {

   

   const [show, setShow] = useState(props.description);

   const dispatch = useDispatch();
   const [description, setDescription] = useState(null);

   const span = document.querySelector('span');


  const removeThisNote = (e) => {
    e.stopPropagation()
    {console.log("Clicked remove on : " +props.index)}
     dispatch(removeNote(props.index));

  };

  const editThisNote = (e) => {
    e.stopPropagation()
    {console.log("Clicked remove on : " +props.index)}
     dispatch(editNote(props.index));
     setShow(prev => !prev);

  };


  const saveEdit = (e) => {
    e.stopPropagation()
    setShow(prev => !prev);
    span.contentEditable=!show
    console.log("Save edited value");
  }


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
      <h3 contentEditable={!show} >{props.title}</h3>
      <div >
        <span contentEditable={!show}
        style={{ marginTop: "8px"}}
        onChange={(event) => setDescription(event.target.value)}
        >{props.description}</span>
      </div>
        <button 
        onClick= {(e) => removeThisNote(e)}
        style={{ height: "24px", width: "92px" }} >Remove me</button>

        <button 
          onClick= {(e) => editThisNote(e)}
          style={{ height: "24px", width: "92px" }} >Edit me</button>

          <>
                <button onClick={(e) => saveEdit(e)} hidden={show}>Save</button>
     
          </>
    </div>
  );
};
 
export default Note;

