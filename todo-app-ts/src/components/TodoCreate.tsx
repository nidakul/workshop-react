import React from 'react'

type Props = {}

const TodoCreate = (props: Props) => {
    return (
        <div className='todo-create'>
            <input placeholder='todo giriniz...' className='todo-input' type='text' />
            <button className='todo-create-btn'>Oluştur</button>
        </div>)
}

export default TodoCreate