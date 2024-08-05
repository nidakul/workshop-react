import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

const Todo = ({ todoProps }: TodoProps) => {
    const dispatch = useDispatch();
    const { id, content } = todoProps;

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '16px', marginTop: '25px' }}>
            {editable ? <input type='text' style={{ width: '400px', border: 'none', borderBottom: ' 1px solid lightgrey', outline: 'none' }} value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div> {content}</div>}
            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} />
                {editable ? <FaCheck onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} />}
            </div>
        </div>
    )
}

export default Todo 