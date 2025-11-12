import React from 'react'
import Nav from '../Compnents/nav.jsx'
import Course from '../Compnents/Course.jsx'
import Footer from '../Compnents/Footer'


function courses() {
  return (
    <>
    <Nav/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default courses