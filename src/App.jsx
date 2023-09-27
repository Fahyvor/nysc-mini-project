import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage"
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Assignment from "./components/PrimaryAssignment/Assignment"
import Members from "./components/Members/Members"

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Router>
  )
}

export default App
