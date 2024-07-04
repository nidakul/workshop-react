import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Course'

function App() {

  return (
    <>
      <Header />
      {
        courses?.map((course) => (
          <Course key={course.id} course={course}></Course>

        ))
      }
    </>
  )
}

export default App
