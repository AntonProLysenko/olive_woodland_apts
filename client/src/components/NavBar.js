import { Link } from "react-router-dom"
import * as userService from '../utilities/users-service'

import logo from '../assets/logo.png'

export default function NavBar ({ name, setUser }) {
  function handleLogout () {
    // Delegate to the users-service
    userService.logOut()
    setUser(null)
  }

  return (
    
    <nav className = "navBar navbar fixed-top admin-navbar">
        <div>
          <Link to="/" className = "d-inline-block align-text-top">
          <img src ={logo} height = "40px" className = "brand-img" alt="Green Forest Apartments Logo"></img> 
          <span className="navbar-brand">Green Forest Apartments</span> 
          </Link>
        </div>
        
        {name?
        <>
          <ul className="nav-links"> 
            <li>
              <Link to="/irunthis"> <span className="navbar-text">Manage</span> </Link>
            </li>
            <li>
              <Link to="/available"> <span className="navbar-text">Availability</span> </Link>
            </li>
            <li>
              <Link to="/about"> <span className="navbar-text">About Us</span> </Link>
            </li>
            <li>
              <Link to="/contact"> <span className="navbar-text">Contact Us</span> </Link>
            </li>
          
            <li>
              <Link to="" onClick={handleLogout}> <span className="navbar-text"> Log Out</span> </Link>
            </li>
          </ul>
        </>

        :

        <>
          <ul className="nav-links"> 
            <li>
              <Link to="/available"> <span className="navbar-text">Availability</span> </Link>
            </li>
            <li>
              <Link to="/about"> <span className="navbar-text">About Us</span> </Link>
            </li>
            <li>
              <Link to="/contact"> <span className="navbar-text">Contact Us</span> </Link>
            </li>
          </ul>
        </>
        }
        </nav>
  )
}