import React from 'react'
import './Form.css'
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from 'react-slide-fade-in';

const Form = ({ showForm, data }) => {

    const navigate = useNavigate();


    const apply = async (id) => {

        const token = localStorage.getItem('auth')
        var decoded = jwt_decode(token);
        var userid = decoded.id;

        const response = await fetch(`http://localhost:5000/viewuser/${userid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const userData = await response.json();
        if (response.ok) {

            if (userData.result.skill == undefined) {
                /* alert('Fill Aditional Details First') */
                toast.warn('Fill Aditional Details First', {
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
            if (userData.result.skill != undefined) {

                afterConfirm(id)
            }

        }

        if (!response.ok) {

            /* alert('Something went Wrong') */
            toast.warn('Something went Wrong', {
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


    const afterConfirm = async (id) => {

        const token = localStorage.getItem('auth')
        var decoded = jwt_decode(token);
        var userid = decoded.id;
        var username = decoded.name;

        const response = await fetch(`http://localhost:5000/applied/job`, {

            method: 'POST',
            statusCode: 200,
            headers: {
                "origin": "*",
                "optionsSuccessStatus": 200,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',

            },
            body: JSON.stringify({ "jobid": id, "userid": userid, "username": username })

        })


        if (response.ok) {
            /* alert("success"); */
            toast.success('Applied for this job', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            /* navigate('/home') */

        }

        if (response.ok == false) {
            toast.warn('Already Applied', {
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
        /* if (response.ok) {
            alert("Applied for this job")
        }
        if (response.ok == false) {
            alert("Already Applied")
        } */



    }

    return (
        <>
            <FadeIn
                from="top"
                positionOffset={400}
                triggerOffset={400}
                delayInMilliseconds={200}
            >
                <div className='container'>
                    <div class="container sections-wrapper py-1">
                        <div class="row">
                            <div class="primary col-lg-8 col-12">
                                <section class="about section">
                                    <div class="section-inner shadow-2 rounded">
                                        <div class="content ">

                                            <h3 style={{ color: "black" }} class="mb-2">{data.title}</h3>
                                            <div d-flex align-items-center>
                                                <span class="text-truncate me-3"><i class="fa-solid fa-briefcase me-2"></i>{data.experience}</span>
                                                <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-clock me-2"></i>{data.empType}</span>
                                                <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-indian-rupee-sign me-2"></i>{data.salary}</span>
                                            </div>

                                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{data.location}</span>
                                            <span class="text-truncate me-3"><i class="fa-solid fa-calendar-days me-2"></i> Monday Jan 20 , 2021</span>
                                            {/*  <button type="button" class="btn btn-success" style={{ float: "right" }}>Apply</button> */}
                                        </div>
                                        <div class="content d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div class="d-flex ">
                                                <button onClick={() => apply(data._id)} class="btn btn-sm btn-primary w-full w-lg-auto mt-2" href="">Apply Now</button>
                                            </div>

                                        </div>
                                    </div>

                                </section>

                                <section class="experience section">
                                    <div class="section-inner shadow-2 rounded">
                                        <h2 class="heading">Job description</h2>
                                        <div class="content">
                                            <div class="item">
                                                <h3 class="title">Job description - </h3>
                                                <p style={{ whiteSpace: 'pre-space' }}>{data.description}</p>
                                            </div>
                                            <div class="item">
                                                <h3 class="title">Qualification Required - </h3>
                                                <p style={{ whiteSpace: 'pre-space' }}>{data.qualification}</p>
                                            </div>

                                            <div class="item">
                                                <h2 class="title">Role</h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.role}</span>
                                                    </li>
                                                </ul>

                                                <h2 class="title">Industry Type</h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.industryType}</span>
                                                    </li>
                                                </ul>
                                                <h2 class="title">Department</h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.department}</span>
                                                    </li>
                                                </ul>
                                                <h2 class="title">Employment Type</h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.empType}</span>
                                                    </li>
                                                </ul>
                                                <h2 class="title">Role Category</h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.category}</span>
                                                    </li>
                                                </ul>
                                                <h2 class="title">Education - </h2>
                                                <ul>
                                                    <li>
                                                        <span>{data.education}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div class="secondary col-lg-4 col-12">

                                <aside class="education aside section">
                                    <div class="section-inner shadow-2 rounded">
                                        <h5 class="heading">Upload {/* Your &amp; */} Resume</h5>
                                        {/* <h2 class="heading">About Company</h2> */}
                                        <div class="content">
                                            <div class="">
                                                <label class="form-label" for="input_file">PDF &amp; Docs file</label>
                                                <input type="file" class="form-control" id="input_file" placeholder="Your email" />
                                            </div>

                                        </div>
                                    </div>
                                </aside>

                                <aside class="education aside section">
                                    <div class="section-inner shadow-2 rounded">
                                        <h2 class="heading">Benefits &amp; Perks</h2>
                                        {/* <h2 class="heading">About Company</h2> */}
                                        <div class="content">
                                            <div class="item">
                                                <h3 class="title"><i class="fa-solid fa-house"></i> Work From Home</h3>
                                                {/* <h4 class="university">University College London <span class="year">(2017-2018)</span></h4> */}
                                            </div>
                                            <div class="item">
                                                <h3 class="title"><i class="fa-solid fa-briefcase-medical"></i> Health Insurence</h3>
                                                {/* <h4 class="university">University of Bristol <span class="year">(2013-2017)</span></h4> */}
                                            </div>
                                            <div class="item">
                                                <h3 class="title"><i class="fa-solid fa-mug-saucer"></i> Cafeteria</h3>
                                                {/* <h4 class="university">University of Bristol <span class="year">(2013-2017)</span></h4> */}
                                            </div>
                                            <div class="item">
                                                <h3 class="title"><i class="fa-solid fa-car"></i> Transport</h3>
                                                {/* <h4 class="university">University of Bristol <span class="year">(2013-2017)</span></h4> */}
                                            </div>
                                            <div class="item">
                                                <h3 class="title"><i class="fa-sharp fa-solid fa-film"></i> Movie Tickets</h3>
                                                {/* <h4 class="university">University of Bristol <span class="year">(2013-2017)</span></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                <aside class="testimonials aside section">
                                    <div class="section-inner shadow-2 rounded">
                                        <h2 class="heading">About Company</h2>
                                        <div class="content">
                                            <div class="item">
                                                <blockquote class="quote">
                                                    <p><i class="fas fa-quote-left"></i>{data.aboutcompany}</p>
                                                </blockquote>
                                                <p class="source"><span class="name">{data.hrname}</span><br /><span class="title">Company HR</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </aside>

                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: "10px" }} className='mb-3'>
                        <button onClick={showForm} className='btn btn-sm btn-primary w-full w-lg-auto'> back</button>
                    </div>
                </div>
            </FadeIn>
            <footer class="footer">
                <div class="container text-center">
                    <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart"></i> by Rahul</small>
                </div>
            </footer>
        </>
    )
}

export default Form
