import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

type Props = {}

const TodoCreate = (props: Props) => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz!");
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('');
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                placeholder='todo giriniz...' className='todo-input' type='text' />
            <button onClick={handleCreateTodo} className='todo-create-btn'>Oluştur</button>
        </div>)
}

export default TodoCreate