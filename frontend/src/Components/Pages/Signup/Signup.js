import React, { useState } from 'react'
import './Signup.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASEURL } from '../../../Const/Const';
import { FadeIn } from 'react-slide-fade-in';

const Signup = ({ showLogin }) => {



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");

    const signupUser = async (e) => {
        e.preventDefault();
        const response = await fetch(BASEURL.SET + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, userType })

        })

        if (response.ok) {
            /* alert("success"); */
            toast.success('User Registered Successfully', {
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
            {/*  Signup Form */}
            <FadeIn
                from="right"
                positionOffset={200}
                triggerOffset={80}
                delayInMilliseconds={10}
            >
                <div className="row">
                    <div className="col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0">
                        <div className="mt-5 mt-lg-5 mb-4 d-flex align-items-center d-lg-block">
                            <h1 className="ls-tight font-bolder h2">
                                Welcome User!
                            </h1>
                        </div>
                        <form onSubmit={signupUser}>
                            <div>

                                <label class="form-label" for="country">User Type</label><br />
                                <div class="form-check form-check-inline ">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" required id="inlineRadio1" value="Admin" onChange={(e) => setUserType(e.target.value)} />
                                    <label class="form-check-label" for="inlineRadio1">Admin</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="User" onChange={(e) => setUserType(e.target.value)} />
                                    <label class="form-check-label" for="inlineRadio2">User</label>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="email">Name</label>
                                <input type="name" className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="email"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            {/* <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="check_example" id="check_example" />
                                <label className="form-check-label" for="check_example">
                                    Keep me logged in
                                </label>
                            </div>
                        </div> */}
                            <div>
                                <button href="#" className="btn btn-primary w-full" style={{ backgroundColor: "#0db199", borderRadius: "10px" }}>
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <div className="my-6">
                            <small>Don't have an account?</small>
                            <a onClick={() => showLogin()} className="text-warning text-sm font-semibold" style={{ paddingLeft: "12px", cursor: "pointer" }}>Signin</a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </>
    )
}

export default Signup
