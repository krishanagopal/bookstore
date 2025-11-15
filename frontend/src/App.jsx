
import React from 'react'

import Home from './Home/Home.jsx'
import {Routes,Route,Navigate} from 'react-router-dom'

import Courses from './courses/courses.jsx'
import Signup from './Compnents/Signup.jsx'
import Login from './Compnents/Login.jsx'
import { useAuth } from './Context/Authprovider.jsx'
function App() {
    const[authUser,setAuthUser]=useAuth();
    console.log("authUser in nav:",authUser);
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup" />}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

