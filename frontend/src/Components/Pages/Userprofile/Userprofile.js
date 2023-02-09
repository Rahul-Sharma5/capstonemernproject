import React, { useState, useEffect } from 'react'
import './Userprofile.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASEURL } from '../../../Const/Const';
import jwt_decode from "jwt-decode";

const Userprofile = () => {

    const navigate = useNavigate()

    /*  const [update,setUpdate]=useState([]); */

    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [skill, setSkill] = useState('');

    const [experience, setExperience] = useState('');
    const [workexperience, setWorkexperience] = useState('');
    const [year, setYear] = useState('');
    const [university, setUniversity] = useState('');
    const [passyear, setPassyear] = useState('');
    const [percent, setPercent] = useState('');


    const showHome = () => {
        navigate("/home");
    }

    /* !  Patch Update */
    const updateuser = async (e) => {
        const token = localStorage.getItem('auth')
        var decoded = jwt_decode(token);
        var id = decoded.id;

        e.preventDefault();

        const response = await fetch(BASEURL.SET + `/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address, contact, gender, state, pincode, skill, experience, workexperience, year, university, passyear, percent
            })
        });


        if (response.ok) {
            /*  alert("Updated Success"); */
            toast.success('Updated Successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            navigate('/home');

        }

        if (!response.ok) {
            /* alert("failed"); */
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
            <div className='container mt-7'>
                {/* <h1 style={{ textAlign: "center" }}>This is User Profile Page</h1> */}
                <div style={{ flex: 1 }}>
                    <h2 className='text-center mt-3' style={{ fontFamily: 'poppins', fontWeight: '700', color: "#FF3366" }}> Job Application </h2>
                    <p className='text-center' style={{ fontFamily: 'poppins', color: "#2b54f8" }}>Please Fill Out the From Below to Submit Your Application</p>
                </div>

                <div class="container sections-wrapper py-2">
                    <div class="row">

                        <div class="primary col-lg-12 col-12">
                            <div style={{ borderRadius: '10px' }} class="card container mt-3 p-2 shadow  mb-3 ">

                                <div className="col-lg-12">
                                    <form onSubmit={updateuser} className="php-email-form mt-3 p-2">

                                        <div className="row gy-4">

                                            <div className="col-md-4">
                                                <input type="text" name="address" className="form-control" placeholder="Address" required
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4 ">
                                                <input type="number" className="form-control" name="contact" placeholder="Contact" required
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control" name="gender" placeholder="Gender" required
                                                    value={gender}
                                                    onChange={(e) => setGender(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <input type="text" name="state" className="form-control" placeholder="State" required
                                                    value={state}
                                                    onChange={(e) => setState(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <input type="text" className="form-control" name="pincode" placeholder="Pin Code" required
                                                    value={pincode}
                                                    onChange={(e) => setPincode(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <input type="text" className="form-control" name="skill" placeholder="Skills" required
                                                    value={skill}
                                                    onChange={(e) => setSkill(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-6">

                                                <label class="form-label" for="country">Experience</label><br />
                                                <div class="form-check form-check-inline ">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Experience" onChange={(e) => setExperience(e.target.value)}
                                                    />
                                                    <label class="form-check-label" for="inlineRadio1">Experience</label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Fresher" onChange={(e) => setExperience(e.target.value)} />
                                                    <label class="form-check-label" for="inlineRadio2">Fresher</label>
                                                </div>

                                            </div>


                                            {experience == "Experience" ? <>
                                                <div className="col-md-12">
                                                    <textarea className="form-control" name="workexperience" rows="6" placeholder="Work required Experience"
                                                        value={workexperience}
                                                        onChange={(e) => setWorkexperience(e.target.value)}
                                                    >
                                                    </textarea>
                                                </div>


                                                <div className="col-md-4">
                                                    <input type="number" name="role" className="form-control" placeholder="Experience required Years"
                                                        value={year}
                                                        onChange={(e) => setYear(e.target.value)}
                                                    />
                                                </div>

                                            </> : <>

                                                <div className="col-md-12">
                                                    <textarea className="form-control" disabled name="workexperience" rows="6" placeholder="Work required Experience"
                                                        value={workexperience}
                                                        onChange={(e) => setWorkexperience(e.target.value)}
                                                    >
                                                    </textarea>
                                                </div>


                                                <div className="col-md-4">
                                                    <input type="number" name="role" disabled className="form-control" placeholder="Experience required Years"
                                                        value={year}
                                                        onChange={(e) => setYear(e.target.value)}
                                                    />
                                                </div>

                                            </>}





                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control" name="universityname" required placeholder="University Name"
                                                    value={university}
                                                    onChange={(e) => setUniversity(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4 ">
                                                <input type="number" className="form-control" name="percent" placeholder="Percent" required
                                                    value={percent}
                                                    onChange={(e) =>  setPercent(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4 ">
                                                <label class="form-label" for="country">Passing Year</label><br />
                                                <input type="date" className="form-control" name="passyear" placeholder="Passing required Year"
                                                    value={passyear}
                                                    onChange={(e) => setPassyear(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-12 text-center">
                                                <button /* onClick={appliedshowForm} */ href="#" class="btn btn-sm btn-primary w-full w-lg-auto mt-2  mb-5 mt-3" >
                                                    Submit
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div style={{ marginLeft: "10px" }} className='mb-3'>
                    <button onClick={showHome} className='btn btn-sm btn-primary w-full w-lg-auto'> back</button>
                </div>

            </div>
        </>
    )
}

export default Userprofile
