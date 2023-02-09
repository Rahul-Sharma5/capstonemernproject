import React, { useState,useEffect } from 'react'
import './Landing.css'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup';
import {  useNavigate } from 'react-router-dom'
import ForgetPass from '../ForgetPass/ForgetPass';
import { FadeIn } from 'react-slide-fade-in';

const Landing = () => {

    const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false);
    const [forget, setForget] = useState(false);

    const naviagte= useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("auth")  
        if(token)
        {
          naviagte("/home")
        }
    
      },[])

    const showLogin = () => {
        setLogin(true)
        setSignup(false)
        setForget(false)
    }

    
    const signUpMethod = () => {
        setLogin(false)
        setSignup(true)
        setForget(false)
    }

    
    const forgetMethod = () => {
        setLogin(false)
        setSignup(false)
        setForget(true)
    }

    return (
        <>
            <div className="px-5 py-5 p-lg-0 bg-surface-primary">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-5 col-xl-4 p-12 p-xl-20 position-fixed start-0 top-0 h-screen overflow-y-hidden  d-none d-lg-flex flex-column" style={{ backgroundColor: "#14c2a3" }}>
                        {/* <!-- Logo --> */}
                        {/*       <a className="d-block" href="#">
        <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" className="h-10" alt="..."/>
      </a> */}
                        {/*  <!-- Title --> */}
                        <div className="mt-32 mb-20">
                            <h1 className="text-white ls-tight font-bolder display-6 mb-5">
                                Let’s Find The Perfect Job That You Deserved.
                            </h1>
                            <p className="text-white text-opacity-75">
                                Maybe some text here will help me see it better. Oh God. Oke, let’s do it then.
                            </p>
                        </div>
                        {/* <!-- Circle --> */}
                        <div className="w-56 h-56 bg-orange-500 rounded-circle position-absolute bottom-0 end-20 transform translate-y-1/3"></div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">

                        {login == true ? <>
                            <Signin signUpMethod={signUpMethod} forgetMethod={forgetMethod} />
                        </> :  <>                           
                        </>
                        }

                        {signup ? <>
                            <Signup showLogin={showLogin} />
                           </>:<></>

                        }
                        {forget ? <>
                            <FadeIn
                                from="right"
                                positionOffset={200}
                                triggerOffset={80}
                                delayInMilliseconds={10}
                            >
                                <ForgetPass />
                            </FadeIn>


                        </>:<></>

                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing
