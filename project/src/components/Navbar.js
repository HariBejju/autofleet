import React from 'react'
import "../styles/navbar.css"
function Navbar() {
  return (
    <div>
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar