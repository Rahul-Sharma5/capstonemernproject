import React, { useEffect, useState } from 'react'
import './Navbar.css'
import joblu from '../../Image/Joblu.png'
import Logout from '../Pages/Logout/Logout'
import jwt_decode from "jwt-decode";


const Navbar = () => {

  const [activeuser, setActiveUser] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("auth")
    if (token) {
      var decoded = jwt_decode(token);
      setActiveUser(decoded.name)
    }

  }, [])

  return (
    <>
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar px-0 py-3">
        <div className="container-xl">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="/home">
            <img src={joblu} className="h-8" alt="logo" />
          </a>
          {/* <!-- Navbar toggle --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* <!-- Nav --> */}
            <div className="navbar-nav mx-lg-auto">
              <a className="nav-item nav-link" href="/home" aria-current="page">Home</a>
              <a className="nav-item nav-link" href="/contact">Contact</a>
              <a className="nav-item nav-link" href="/faq">FAQ</a>
              <a className="nav-item nav-link" href="/userprofile">Additional Details</a>
            </div>
            
            {/* <!-- User Name --> */}
            <a style={{ margin: "15px", fontFamily: 'poppins', color: "#2b54f8"  }} >Welcome, {activeuser}</a>
            {/* style={{ fontFamily: 'poppins', fontWeight: '700', color: "#FF3366" }} */}
            <Logout />
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar
