import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

const Todo = ({ todoProps }: TodoProps) => {
    const dispatch = useDispatch();
    const { id, content } = todoProps;

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '16px', marginTop: '25px' }}>
            <div>{content}</div>
            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} />
                <FaRegEdit />
            </div>
        </div>
    )
}

export default Todo 