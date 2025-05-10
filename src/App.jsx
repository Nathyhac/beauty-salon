import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage.jsx"
import LoginPage from "./components/LoginPage/LoginPage.jsx"
import Navbar from "./components/NavBar/Navbar.jsx"
import HairDresser from "./components/Salons/HairDresser.jsx"
import Establishment from "./components/Establishment/Establishment.jsx"
import Barber from "./components/Salons/Barber.jsx"
import Manicure from "./components/Salons/Manicure.jsx"
import BeautyInstitute from "./components/Salons/BeautyInstitute.jsx"
import Footer from "./components/Footer/Footer.jsx"

import "./App.css"

const App = () => {
  return (
  
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hairDresser" element={<HairDresser />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/manicure" element={<Manicure />} />
          <Route path="/beautyInstitute" element={<BeautyInstitute />} />
          <Route path="/establishment" element={<Establishment />} />
        </Routes>
        <Footer />
      </div>
   
  )
}

export default App
