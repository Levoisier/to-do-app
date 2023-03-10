import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { ProgressBar } from '../ProgressBar'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { AuthorInfo } from '../AuthorInfo';

function AppUI() {

    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)


    return(
        <React.Fragment>
            <h1 className='neon-title'>Keep it up!</h1>

            <TodoCounter/>
            <ProgressBar/>

            <h1 className='neon-title-2'>My TO-DO's</h1>
            <TodoSearch/>
            <TodoList>
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))
                }

            </TodoList>
            
            {!!openModal && (
                <Modal>
                 <TodoForm />
                </Modal>
            )}

            <CreateTodoButton/>

            <AuthorInfo />

        </React.Fragment>
    );
}

export {AppUI};