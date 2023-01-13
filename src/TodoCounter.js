import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    
    return (
        <h2 className="TodoCounter"> GOAL STATUS: {completed} of {total} </h2>  
    );
}

export {TodoCounter};

