import React from 'react'
import "../App.css"
import { useState } from 'react'

const TodoCreate = ({ onCreateTodo }) => {

    const [newTodo, setNewTodo] = useState([]);

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return; //eğer kullanıcı input girmeden butona basarsa bir işlem yapma
        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Todo giriniz' />
            <button onClick={createTodo} className='todo-btn'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate 