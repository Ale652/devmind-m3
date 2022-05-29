import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../../redux/actions/actions";


     
const Note = (props) => {

   const dispatch = useDispatch();


  const removeThisNote = (e) => {
    e.stopPropagation()
    {console.log("Clicked remove on : " +props.index)}
     dispatch(removeNote(props.index));
  };


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
        <button 
        // onClick= {() => dispatch(removeNote(props.index))}
        onClick= {(e) => removeThisNote(e)}
        style={{ height: "24px", width: "72px" }} >Remove me</button>
    </div>
  );
};
 
export default Note;

