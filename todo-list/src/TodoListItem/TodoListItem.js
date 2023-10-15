import React, {useState} from 'react'
import './TodoListItem.css'

const TodoListItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  const deleteItem = () => { 
    console.log('delete item');
  }
  return (
    <div className='list'>
      <div className='list-item'>
        <div className='list-item-text'>
          <p>Todo Item abjsh fhfv jkha afjdc  g hdff hhkfh gagjv hsdfh dhjb</p>
        </div>
        <div className='list-item-action'>
          <div className='action-button'>10/15/2023</div>
          {/* <button className='action-button'>Edit</button> */}
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
          {/* <button className='action-button'>Edit</button> */}
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
          {/* <button className='action-button'>Edit</button> */}
          <button className='action-button'>Delete</button>
          <button className='action-button done' onClick={toggleCheck}>
            {isChecked ? '✔️' : '❌'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoListItem