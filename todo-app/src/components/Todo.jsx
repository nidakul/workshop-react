import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css"


const Todo = () => {
    return (
        <div className='todo'>
            <div>ilk</div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo