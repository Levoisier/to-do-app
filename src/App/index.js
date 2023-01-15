import React from 'react';
import { TodoProvider } from '../TodoContext'
import { AppUI } from './AppUI';
import './App.css';

/* const defaultTodos = [
  { text: 'Todo 1', completed: false},
  { text: 'Todo 2', completed: false},
  { text: 'Todo 3', completed: true},
  { text: 'Todo 4', completed: false},
]; */

function App() {

  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>
  );
}

export default App;
