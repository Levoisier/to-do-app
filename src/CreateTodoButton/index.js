import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';



function CreateTodoButton() {

  let {openModal, setOpenModal} = React.useContext(TodoContext)
  const [isRotated, setIsRotated] = useState(false);

  const onClickToggleForm = () =>{
    if (openModal){
      setOpenModal(false)
    }else{
      setOpenModal(true)
    }
    setIsRotated(!isRotated)
    
  };
  return (
    <button 
      className={`CreateTodoButton ${isRotated ? 'rotated' : ''}`}  
      onClick={onClickToggleForm}
    >
      +
    </button>
    
  );
}

export { CreateTodoButton };