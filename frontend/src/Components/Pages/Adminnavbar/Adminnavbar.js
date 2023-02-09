import React, { useState, useEffect } from 'react'
import './Adminnavbar.css'
import joblu from '../../../Image/Joblu.png'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const Adminnavbar = () => {

    const naviagte = useNavigate();

    const [activeadmin, setActiveAdmin] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem("auth")
        if (token) {
            var decoded = jwt_decode(token);
            setActiveAdmin(decoded.name)
        }

    }, [])


    const LogoutIt = () => {
        localStorage.clear()
        window.location = "/"
    }

    return (
        <>

            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light px-0 py-3">
                    {/* navbar navbar-expand-lg navbar px-0 py-3 */}
                    <div class="container-xl">
                        {/* <!-- Logo --> */}
                        <a class="navbar-brand" href="/adminhome">
                            <img src={joblu} class="h-8" alt="logo" />
                        </a>
                        {/* <!-- Navbar toggle --> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Collapse --> */}
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            {/* <!-- Nav --> */}
                            <div class="navbar-nav mx-lg-auto">
                                <a class="nav-item nav-link" href="/adminhome" aria-current="page">Home</a>
                                <a class="nav-item nav-link" href="/contact">Contact</a>
                                <a class="nav-item nav-link" href="/faq">FAQ</a>

                            </div>
                            {/* <!-- Right navigation --> */}

                            {/* <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                                <a style={{ margin: "15px", fontFamily: 'poppins', color: "#2b54f8" }} >Welcome, {activeadmin}</a>
                                <button href="#" onClick={LogoutIt} class="btn btn-sm btn-danger w-full w-lg-auto">
                                    Logout
                                </button>
                            </div> */}
                            <a style={{ margin: "15px", fontFamily: 'poppins', color: "#000" }} >Admin, {activeadmin}</a>
                            <div class="d-flex align-items-lg-center mt-3 mt-lg-0">

                                <button href="#" onClick={LogoutIt} class="btn btn-sm btn-danger w-full w-lg-auto">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/*             <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
                <div class="container-xl">
                   
                    <a class="navbar-brand" href="#">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-8" alt="..." />
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                       
                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link" href="/adminhome" aria-current="page">Home</a>
                            <a class="nav-item nav-link" href="/contact">Contact</a>
                            <a class="nav-item nav-link" href="/faq">FAQ</a>
                        </div>
                        
                        <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <button href="#" onClick={LogoutIt} class="btn btn-sm btn-danger w-full w-lg-auto">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Adminnavbar
