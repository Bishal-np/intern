import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import "../../scss/layouts/header.scss"


function Header() {
  return (
  <header className='header'>
    <div className="container d-flex header-items py-3">
        <div className="logo">
            <Link to="/home"><img src={Logo} alt="" /></Link>
        </div>
        <div className="right_items d-flex gap-5">
            <nav>
                <ul className='d-flex  nav-bar'>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/internships"}>Internships</Link></li>
                    <li><Link to={"/jobs"}>Jobs</Link></li>
                    <li><Link to={"/events"} className='event'>Events <i className="bi bi-caret-down-fill"></i></Link></li>
                    <ul className='hover-items'>
                        <li><a ahref = "" className='color'>Events</a></li>
                        <li><a ahref = "" className='black'>Browse Events</a></li>
                    </ul>
                   
                </ul>
            </nav>
            <div className="buttons">
                <Link to={"/login"} className='login-section'><button className="login">Login</button></Link>
                <Link to={"/register"} className='register-section'><button className="register">Register  <i className="bi bi-chevron-compact-down"></i></button></Link>

            </div>
        </div>
       
    </div>
   
  </header>
  )
}

export default Header
