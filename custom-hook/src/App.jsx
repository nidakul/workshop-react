import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      {/* <div>{count}</div>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrease}>Azalt</button> */}
      <div style={{ width }}>

      </div>
    </>
  )
}

export default App
