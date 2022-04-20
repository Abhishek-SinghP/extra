import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'


const RouterR= () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/Home' element={<Home/>} >Home </Route>
            <Route path='/about' element={<About/>} >About</Route>
            <Route path='/Contact' element={<Contact/>} >Contact</Route>
        </Routes>
    </Router>
    </>
  )
}

export default RouterR ;