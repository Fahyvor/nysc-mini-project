import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './src/components/Navbar/Navbar'
import Homepage from './src/components/Homepage/Homepage'
import Login from './src/components/Login/Login'
import Register from './src/components/Register/Register'
import Members from './src/components/Members/Members'
import Assignment from './src/components/PrimaryAssignment/Assignment'


const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/members' element={<Members />} />
            <Route path='/assignment' element={<Assignment />} />
        </Routes>
    </Router>
  )
}

export default App