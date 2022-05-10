import React, { useState, useEffect } from 'react';
const WelcomeMessage = (props) => {
 
    const [stateMessage, setStateMessage] = useState("Please wait…");

    setTimeout(() => {
                        useEffect(() => {
                            setStateMessage("Welcome to Devmind!");   
                        });}, "3000");

    return (
        <div>
                {stateMessage}
        </div>
    );
}
 
export default WelcomeMessage;

