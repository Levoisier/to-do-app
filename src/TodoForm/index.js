import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.length <= 0)
            return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Create To-do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange} 
                placeholder="What do you have to-do?..."
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }