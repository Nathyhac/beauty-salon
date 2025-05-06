import { Link, useLocation } from "react-router-dom"
import { User } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        P L A N I T Y
      </Link>

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/hairdresser" className={location.pathname === "/hairdresser" ? "active" : ""}>
              Hairdresser
            </Link>
          </li>
          <li>
            <Link to="/barber" className={location.pathname === "/barber" ? "active" : ""}>
              Barber
            </Link>
          </li>
          <li>
            <Link to="/manicure" className={location.pathname === "/manicure" ? "active" : ""}>
              Manicure
            </Link>
          </li>
          <li>
            <Link to="/beauty-institute" className={location.pathname === "/beauty-institute" ? "active" : ""}>
              Beauty Institute
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-btns">
        <Link to="/add-establishment" className="btn-light">
          Add your establishment
        </Link>
        <Link to="/login" className="btn-dark">
          <User size={16} /> My account
        </Link>
      </div>
    </header>
  )
}

export default Navbar
