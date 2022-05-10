import React, { useState, useEffect } from "react";

const WelcomeMessage = (props) => {
    const [stateVariable, setStateVariable] = useState("Please wait…");
 
      // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to new one
      setStateVariable("Welcome to Devmind!")
    }, 3000)

    // return () => {
    //   clearTimeout(timeId)
    // }
  }, []);

    return (

                <div
                style={{
                border: "1px solid black"}} > {stateVariable} </div>
    );
}
 
export default WelcomeMessage;