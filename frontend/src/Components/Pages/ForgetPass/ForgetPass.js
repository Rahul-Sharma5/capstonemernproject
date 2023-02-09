import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FadeIn } from 'react-slide-fade-in';

export default function ForgetPass() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [next, setNext] = useState(false);


    const updatepass = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/send-otp',

            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })

            })
        const data = await response.json()
        if (response.ok) {
            sendOtp(data.otp);
            setNext(!next)

        }

        if (!response.ok) {

            alert('user not found')
        }

        function sendOtp(otp) {

            emailjs.init('zhvzg-pslTtep9ybR');
            emailjs.send("service_eb2yz48", "template_8he67vf", {

                otp: otp,
                email: email

            });


        }


    }

    const confirmSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/submit-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp, password })

        })
        if (response.ok) {
            /* alert('password changed') */
            toast.success('password changed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.location = '/'
        }
        if (!response.ok) {
            /* alert('Expired or Invaild Otp') */
            toast.warn('Expired or Invaild Otp', {
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
        <div>

            <>
                {next ? <>
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
                                        Forget Password Recovery
                                    </h1>
                                </div>
                                <form onSubmit={confirmSubmit} >
                                    <div className="mb-3">
                                        <label className="form-label" for="email">Enter Received Otp</label>
                                        <input type="number" required className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="otp"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" for="email">New Password</label>
                                        <input type="text" required className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">

                                    </div>
                                    <div>
                                        <button className="btn btn-primary w-full" style={{ backgroundColor: "#0db199", borderRadius: "10px" }}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </FadeIn>
                </> :
                    <>
                        <div className="row">
                            <div className="col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0">
                                <div className="mt-5 mt-lg-5 mb-4 d-flex align-items-center d-lg-block">
                                    <h1 className="ls-tight font-bolder h2">
                                        Forget Password Recovery
                                    </h1>
                                </div>
                                <form onSubmit={updatepass} >
                                    <div className="mb-3">
                                        <label className="form-label" for="email">Email address</label>
                                        <input type="email" required className="form-control form-control-muted" style={{ borderRadius: "10px" }} id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className='mt-3'>
                                        <button className="btn btn-primary w-full" style={{ backgroundColor: "#0db199", borderRadius: "10px" }}>
                                            Next
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </>}



            </>

        </div>
    )
}
