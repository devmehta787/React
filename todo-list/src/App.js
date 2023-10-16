import React, { useState } from 'react';

import './App.css';
import TodoForm from './TodoForm/TodoForm';
import TodoListItem from './TodoListItem/TodoListItem';

var todoList = [
  {
    id: 1,
    text: 'Todo',
    priority: 'Low',
    date:new Date(2023, 10, 15),
    isDone: false

  },
  {
    id: 2,
    text: 'Todo Item',
    priority: 'Medium',
    date: new Date(2023, 10, 15),
    isDone: false
  },
  {
    id: 3,
    text: 'Todo Item',
    priority: 'High',
    date: new Date(2023, 10, 15),
    isDone: false
  }
];

function App() {
  const [todo, setTodo] = useState(todoList);

  const addTodo = (todoItem) => { 
    setTodo((prevTodo) => { 
      return [...prevTodo, todoItem];
    });
    console.log(todoItem);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoListItem items={todo} />
    </div>
  );
}

export default App;
