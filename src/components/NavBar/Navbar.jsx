import { Link, useLocation } from "react-router-dom"
import { User } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        W A Q T I
      </Link>

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/HairDresser" className={location.pathname === "/HairDresser" ? "active" : ""}>
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
            <Link to="/beautyInstitute" className={location.pathname === "/beautyInstitute" ? "active" : ""}>
              Beauty Institute
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-btns">
        <Link to="/establishment" className="btn-light">
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
