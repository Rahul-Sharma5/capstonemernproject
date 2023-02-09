import React, { useState, useEffect } from 'react'
import './ApplicantApplied.css'
import AppliedJobInfo from '../AppliedJobInfo/AppliedJobInfo'
import { FadeIn } from 'react-slide-fade-in';

const ApplicantApplied = () => {


    const [appliedcardshow, setappliedcardshow] = useState(true)
    const [appliedjobinfo, setappliedjobinfo] = useState(false)
    const [data, setId] = useState('')

    const appliedjobinfoshow = (data) => {
        setappliedjobinfo(!appliedjobinfo)
        setappliedcardshow(!appliedcardshow)
        setId(data)
    }


    /*  Get all applied Job Data  */
    const [appliedjobdata, Setappliedjobdata] = useState([]);
    const [clickedJob, setClickedJob] = useState([])

    const getapplieddata = async (e) => {

        const response = await fetch('http://localhost:5000/admin/allpost', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        Object.values(data).forEach(function
            (i) {
            Setappliedjobdata(i);
        })

    }

    useEffect(() => {
        getapplieddata();
    }, [])

    /*  Delete Employee Data  */

    const deletejobpost = async (id) => {
        /* console.log(id) */

        const res = await fetch(`http://localhost:5000/admin/delete-jobpost/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res.json();
        /* console.log(deletedata); */

        if (res.status === 422 || !deletedata) {
            console.log("error");
        } else {
            alert("Job deleted");
            /* window.location = '/home' */
        }

    }


    return (
        <>
            <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={400}
            >


                {appliedcardshow ? <>
                    {/* <h1 style={{ textAlign: "center" }}>This is applied Page</h1> */}


                    <div class="container sections-wrapper py-2">
                        <div class="row">

                            {appliedjobdata.map((value) => {
                                return (
                                    <div class="primary col-lg-4 col-12">

                                        {/* // ! Map Function // */}
                                        <div style={{ borderRadius: '15px', 'background': "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position: 'relative' }} class="card container mt-3 p-2 shadow  mb-5 ">
                                            <div class="card-body">
                                                <h3 style={{ fontSize: '15px', color: '#4a4a4a' }} className="text-muted mb-2 ">#</h3>
                                                <h3 style={{ color: "black" }} class="mb-2">{value.title}</h3>
                                                <span class="text-truncate me-3"><i class="fa-solid fa-briefcase me-2"></i>{value.experience}</span>
                                                <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{value.location}</span>
                                                <br />
                                                <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-clock me-2"></i>{value.empType}</span>
                                                <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-indian-rupee-sign me-2"></i>{value.salary}</span>
                                                {/* <span class="text-truncate me-0"><i class="fa-solid fa-file-import me-2"></i>Applied: 509</span> */}
                                                {/* <span class="d-block text-muted text-sm font-semibold">Monday Jan 20 , 2021</span> */}

                                                <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                                                    <button onClick={() => appliedjobinfoshow(value)} style={{ marginTop: "10px" }} href="#" class="btn btn-sm btn-primary w-full w-lg-auto">
                                                        More Details
                                                    </button>
                                                    <button onClick={() => deletejobpost(value._id)} type="button" class="btn btn-sm btn-square btn-danger text-nature-hover ">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}



                        </div>
                    </div>

                </> : <></>}
            </FadeIn>
            {appliedjobinfo ? <>  <AppliedJobInfo appliedjobinfoshow={appliedjobinfoshow} data={data} /></> : <></>}

        </>
    )
}

export default ApplicantApplied
