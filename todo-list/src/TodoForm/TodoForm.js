import React from 'react'
import './TodoForm.css'

const TodoForm = () => {
    return (
        <form className='form'>
            <div className='row'>
                <input type="text" placeholder='Add todo-item.....' className='text-input'/>
            </div>
            <div className='row'>
                <select className='priority'>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <input type="date" className='date-time'/>
                {/* <input type="time" className='date-time'/> */}
            </div>
            <div className='add'>
                <button className='add-button'>Add</button>
            </div>
        </form>
    )
}

export default TodoForm