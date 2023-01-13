import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { ProgressBar } from './ProgressBar'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Reir', completed: true},
  { text: 'Cantar', completed: false},
  { text: 'Llorar', completed: false},
  { text: 'Jugar', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <h1>Keep it up!</h1>
      <TodoCounter />
      <ProgressBar />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
