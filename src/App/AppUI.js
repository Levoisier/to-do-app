import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { ProgressBar } from '../ProgressBar'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { AuthorInfo } from '../AuthorInfo';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }){
    return(
        <React.Fragment>
            <h1 className='neon-title'>Keep it up!</h1>
            <TodoCounter 
                total={parseInt(totalTodos)}
                completed={parseInt(completedTodos)}
            />
            <ProgressBar 
                total={parseInt(totalTodos)}
                completed={parseInt(completedTodos)}
            />
            <h1 className='neon-title-2'>My TO-DO's</h1>
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {error && <p> ERROR</p>}
                {loading && <p> Loading...</p>}
                {(!loading && !searchedTodos.length) && <p> Add your first TO-DO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
            <AuthorInfo />
        </React.Fragment>
    );
}

export {AppUI};