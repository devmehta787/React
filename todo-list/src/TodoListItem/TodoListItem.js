import React, {useState} from 'react'
import './TodoListItem.css'

const TodoListItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  const deleteItem = () => { 
    console.log('delete item');
  }



  let todoList = <p className='noTodoContent'>No todo found.</p>;

  if (props.items.length > 0) { 
    todoList = props.items.map((todo) => { 
      return (
        <div className='list-item' key={todo.id}>
          <div className='list-item-text'>
            <p>{todo.text}</p>
          </div>
          <div className='list-item-action'>
            <div className='action-button'>{todo.date.toLocaleDateString()}</div>
            <div>
              <div className='action-button'>{todo.priority}</div>
              <button className='action-button' onClick={deleteItem}>🗑️ </button>
              <button className='action-button done' onClick={toggleCheck}>
                {isChecked ? '✔️' : '❌'}
              </button>
            </div>
          </div>
        </div>
      )
    })
  }





  return (
    <div className='list'>
      <div className='list-header'>
        <div className='list-header-text'>
          <p>Todo</p>
        </div>
        <div className='list-header-action'>
          <p>Due Date</p>
          <p>Action</p>
        </div>
      </div>
      {todoList}

    </div>
  )
}

export default TodoListItem