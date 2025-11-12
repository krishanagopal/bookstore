
import React from 'react'

import Home from './Home/Home.jsx'
import {Routes,Route} from 'react-router-dom'

import Courses from './courses/courses.jsx'
import Signup from './Compnents/Signup.jsx'
import Login from './Compnents/Login.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

