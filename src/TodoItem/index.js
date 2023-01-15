import React from "react"; 
import './TodoItem.css';


function TodoItem(props) {
     
  return (
      
    <li className="TodoItem">

      
      <span 
      id="icons"
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
      {props.completed ? "✖": "✔"}
      </span>
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
      <span>{props.text}</span> 
      </p>
      
      <span 
      id="icons"
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
      🗑
      </span>
    </li>
  );
}

export { TodoItem };
