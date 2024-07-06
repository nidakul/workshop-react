import React from 'react'
import "../App.css"

const TodoCreate = () => {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Todo giriniz' />
            <button className='todo-btn'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate