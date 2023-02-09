import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Logout.css'


const Logout = () => {

    const naviagte = useNavigate();
    const LogoutIt = () => {
        localStorage.clear()
        window.location = "/"
    }

    return (
        <>
{/*             <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                <button type="button" onClick={LogoutIt} className="btn btn-danger">Logout</button>
            </div> */}
            {/*             <div class="buttons">
                <button onClick={LogoutIt} class="button is-danger is-light">Logout</button>
            </div> */}

            <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                <button href="#" onClick={LogoutIt} class="btn btn-sm btn-danger w-full w-lg-auto">
                    Logout
                </button>
            </div>
        </>
    )
}

export default Logout