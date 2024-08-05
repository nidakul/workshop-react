import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {
  const { count, increase, decrease } = useCounter();
  const { open, change } = useToggle();

  return (
    <>
      {/* <div>{count}</div>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrease}>Azalt</button> */}
      {/* **************** */}
      {/* {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />}
      <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button> */}
    </>
  )
}

export default App
