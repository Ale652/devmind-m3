import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [stateVariable, setStateVariable] = useState(0);

    // Componenta trebuie sa afiseze la consola un mesaj sugestiv atunci cand este randata prima oara
    useEffect(() => {
        console.log('Component Counter mounted');
      }, []);


    return (
        <div>
            <h2>{`Counter value: ${stateVariable}`}</h2>
            <button onClick={() => setStateVariable(stateVariable + 1)}>Click me +</button>
            <button onClick={() => setStateVariable(stateVariable - 1)}>Click me -</button>
        </div>
    );
}
 
export default Counter;

