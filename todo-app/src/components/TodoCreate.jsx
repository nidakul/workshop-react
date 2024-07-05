import React from 'react'
import "../App.css"

const TodoCreate = () => {
    return (
        <div className='todo-create'>
            <input type="text" placeholder='Todo giriniz' />
            <button>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate