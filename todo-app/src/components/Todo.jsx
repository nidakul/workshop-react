import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css"


const Todo = ({ todo, onRemoveTodo }) => {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    return (
        <div className='todo'>
            <div>{content}</div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo  