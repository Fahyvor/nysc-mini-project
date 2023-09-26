import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage"
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Assignment from "./components/PrimaryAssignment/Assignment"

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assignment" element={<Assignment />} />
        </Routes>
      </Router>
  )
}

export default App
