import React, { useState, useEffect } from 'react';
const Hello = (props) => {
    const [stateVariable, setStateVariable] = useState(0);
 
    useEffect(() => {
        console.log('mount and update');
 
        return () => {
            console.log('cleanup');
        };
    });
 
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>{`Counter value: ${stateVariable}`}</h2>
            <button onClick={() => setStateVariable(stateVariable + 1)}>Click me</button>
        </div>
    );
}
 
export default Hello;

