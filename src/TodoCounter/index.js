import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    
    return (
        <h2 className="TodoCounter"> Your progress:</h2>  
    );
}

export {TodoCounter};

