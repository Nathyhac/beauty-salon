import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage.jsx"
import LoginPage from "./components/LoginPage/LoginPage.jsx"
import Navbar from "./components/NavBar/Navbar.jsx"
import "./App.css"

const App = () => {
  return (
  
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
   
  )
}

export default App
