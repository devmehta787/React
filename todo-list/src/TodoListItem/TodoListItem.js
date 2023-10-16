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
            <button className='action-button' onClick={deleteItem}>Delete</button>
            <button className='action-button done' onClick={toggleCheck}>
              {isChecked ? '✔️' : '❌'}
            </button>
          </div>
        </div>
      )
    })
  }





  return (
    <div className='list'>
      {/* <div className='list-item'>
        <div className='list-item-text'>
          <p>Todo Item abjsh fhfv jkha afjdc  g hdff hhkfh gagjv hsdfh dhjb</p>
        </div>
        <div className='list-item-action'>
          <div className='action-button'>10/15/2023</div>
          <button className='action-button'>Delete</button>
          <button className='action-button done' onClick={toggleCheck}>
            {isChecked ? '✔️' : '❌'}
          </button>
        </div>
      </div>


      <div className='list-item'>
        <div className='list-item-text'>
          <p>Todo Item</p>
        </div>
        <div className='list-item-action'>
          <div className='action-button'>10/15/2023</div>
          <button className='action-button' onClick={deleteItem}>Delete</button>
          <button className='action-button done' onClick={toggleCheck}>
            {isChecked ? '✔️' : '❌'}
          </button>
        </div>
      </div>


      <div className='list-item'>
        <div className='list-item-text'>
          <p>Todo Item</p>
        </div>
        <div className='list-item-action'>
          <div className='action-button'>10/15/2023</div>
          <button className='action-button'>Delete</button>
          <button className='action-button done' onClick={toggleCheck}>
            {isChecked ? '✔️' : '❌'}
          </button>
        </div>
      </div> */}
      {todoList}

    </div>
  )
}

export default TodoListItem