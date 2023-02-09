import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FadeIn } from 'react-slide-fade-in';
import { BASEURL } from '../../../Const/Const';

const Signin = ({ signUpMethod, forgetMethod }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = async (e) => {
        e.preventDefault();
        const response = await fetch(BASEURL.SET + '/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })

        })
        const data = await response.json();
        const token = JSON.stringify(data.token)

        if (response.ok) {
            localStorage.setItem("auth", token.substring(1, token.length - 1))
            navigate('/home')
            /* alert("success"); */
            /* toast.success('success', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); */

        }

        if (!response.ok) {
            toast.warn('failed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
            {/*  Signin Form */}
            <FadeIn
                from="left"
                positionOffset={200}
                triggerOffset={80}
                delayInMilliseconds={10}
            >
            <div className="row">
                <div className="col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0">
                    <div className="mt-5 mt-lg-5 mb-4 d-flex align-items-center d-lg-block">
                        <h1 className="ls-tight font-bolder h2">
                            Welcome Back!
                        </h1>
                    </div>
                    <form onSubmit={signinUser} >
                        <div className="mb-3">
                            <label className="form-label" for="email">Email address</label>
                            <input type="email" className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="password">Password</label>
                            <input type="password" className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="password" autocomplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">

                            {/* <input className="form-check-input" type="checkbox" name="check_example" id="check_example" />
                                <label className="form-check-label" for="check_example">
                                    Keep me logged in
                                </label> */}
                            {/* <a href='#'>Forgot password?</a> */}
                            <a>
                                <label style={{ cursor: "pointer" }} onClick={forgetMethod} className="form-label" for="password">Forgot password?</label>
                            </a>


                        </div>
                        <div>
                            <button /* href="#" */ className="btn btn-primary w-full" style={{ backgroundColor: "#0db199", borderRadius: "10px" }}>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="my-6">
                        <small>Don't have an account?</small>
                        <a onClick={() => signUpMethod()} className="text-warning text-sm font-semibold" style={{ paddingLeft: "12px", cursor: "pointer" }}>Sign up</a>
                    </div>
                </div>
            </div>

            </FadeIn>
        </>
    )
}

export default Signin
