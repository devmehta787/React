import './App.css';
import TodoForm from './TodoForm/TodoForm';
import TodoListItem from './TodoListItem/TodoListItem';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoListItem/>
    </div>
  );
}

export default App;
