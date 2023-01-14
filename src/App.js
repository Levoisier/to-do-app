import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { ProgressBar } from './ProgressBar'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Reir', completed: false},
  { text: 'Cantar', completed: false},
  { text: 'Llorar', completed: true},
  { text: 'Jugar', completed: false},
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let foundTodos = [];

  if (!searchValue.length >= 1) {
    foundTodos = todos;
  }else{
    foundTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);
    });
  };

  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);

    //another way to do it:
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed:true,
    }; */
  };

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  };


  return (
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
    </React.Fragment>
  );
}

export default App;
