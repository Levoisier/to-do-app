import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { ProgressBar } from '../ProgressBar'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { AuthorInfo } from '../AuthorInfo';

function AppUI({
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        foundTodos,
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
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        <TodoList>
            {foundTodos.map(todo => (
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

export {AppUI}