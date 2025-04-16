import React from 'react'
import Logo from "../../assets/logo.png"
import "../../scss/layouts/header.scss"


function Header() {
  return (
  <header className='header'>
    <div className="container d-flex header-items py-3">
        <div className="logo">
            <a href=""><img src={Logo} alt="" /></a>
        </div>
        <div className="right_items d-flex gap-5">
            <nav>
                <ul className='d-flex  nav-bar'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Internships</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="" className='event'>Events <i className="bi bi-caret-down-fill"></i></a></li>
                    <ul className='hover-items'>
                        <li><a href="" className='color'>Events</a></li>
                        <li><a href="" className='black'>Browse Events</a></li>
                    </ul>
                   
                </ul>
            </nav>
            <div className="buttons d-flex gap-4">
                <button className="login">Login</button>
                <button className="register">Register  <i className="bi bi-chevron-compact-down"></i></button>

            </div>
        </div>
       
    </div>
   
  </header>
  )
}

export default Header
