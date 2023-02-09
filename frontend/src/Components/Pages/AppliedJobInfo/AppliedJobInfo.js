import React, { useEffect, useState } from 'react'
import './AppliedJobInfo.css'
import { useNavigate } from 'react-router-dom'
import Adminnavbar from '../Adminnavbar/Adminnavbar';
import Modal from 'react-modal';
import { FadeIn } from 'react-slide-fade-in';


const AppliedJobInfo = ({ appliedjobinfoshow, data }) => {


    const navigate = useNavigate();

    const [appliedjob, Setappliedjob] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [tempUser, setTempuser] = useState([])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    async function openModal(value) {
        setIsOpen(true);

        const response = await fetch(`http://localhost:5000/viewuser/${value.userid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const userData = await response.json();
        if (response.ok) {

            setTempuser(userData.result)

        }

        if (!response.ok) {

            alert('Something went Wrong')

        }



    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }


    const showHome = () => {
        navigate("/adminhome");
    }

    const fetching = async (id) => {

        const response = await fetch(`http://localhost:5000/applied/viewapplied/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        Object.values(data).forEach(function
            (i) {
            Setappliedjob(i);

        })
    }



    useEffect(() => {

        fetching(data._id);

    }, [data])


    return (

        <>

            <div className='container'>
                {/* <Adminnavbar/>  */}
                <div className=' container'>
                    <div className="card shadow-2" style={{ borderRadius: '15px', 'background': "linear-gradient( 274.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position: 'relative' }}>
                        <div style={{ position: 'relative' }} className="p-2">
                            <img style={{ height: '300px', 'objectFit': 'cover' }} alt="..." src="https://i.pinimg.com/originals/f6/96/3f/f6963f82d35a8432cd3d1a9736e0e524.jpg" className="card-img" />

                            <div style={{ position: 'absolute', bottom: '-10%', left: '5%' }} >
                                <img alt="Avatar" style={{ width: '50%', objectFit: 'fill' }} className="rounded-circle" src="https://img.freepik.com/free-vector/businesswoman-working-writing-document-paper-character-people-cartoon-flat-design_40876-3339.jpg?w=256" />
                            </div>
                        </div>

                        <div class="card-body mt-5">
                            <h3 style={{ fontSize: '15px', color: '#4a4a4a' }} className="text-muted mb-2 ">User Id: {data._id}</h3>
                            <h3 style={{ color: "black" }} class="mb-2"> {data.title}</h3>
                            <span class="text-truncate me-3"><i class="fa-solid fa-briefcase me-2"></i> {data.experience}</span>
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{data.location}</span>
                            <br />
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-clock me-2"></i>{data.empType}</span>
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-indian-rupee-sign me-2"></i>{data.salary}</span>
                            {/* <span class="text-truncate me-0"><i class="fa-solid fa-file-import me-2"></i>Applied: 509</span> */}
                            <span class="d-block text-muted text-sm font-semibold">Monday Jan 20 , 2021</span>

                            {/*  */}
                        </div>
                    </div>
                </div>



                <div class="d-flex flex-column flex-lg-row container mt-5 ">
                    <div class=" flex-grow-1 ">
                        <main class="py-2">
                            <div class="container-fluid ">
                                <div class="card mb-7 shadow-3 w-full w-lg-auto" style={{ borderRadius: '15px', 'background': "linear-gradient( 274.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position: 'relative' }}>
                                    <div class="card-header">
                                        <h5 class="mb-0">Applied</h5>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-hover table-nowrap">
                                            <thead class="table-light">
                                                <tr>
                                                    <th scope="col">User Id</th>
                                                    <th scope="col">User Name</th>
                                                    <th scope="col">Job Title</th>
                                                    <th scope="col">Location</th>
                                                    {/* <th scope="col">Offer</th>
                                                <th scope="col">Meeting</th> */}
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appliedjob.map((value) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {value.userid}
                                                            </td>

                                                            <td>
                                                                {value.username}
                                                            </td>

                                                            <td>
                                                                {data.title}
                                                            </td>

                                                            <td>
                                                                <span class="badge badge-lg badge-dot">
                                                                    <i class="bg-success"></i>{data.location}
                                                                </span>
                                                            </td>
                                                            <td class="text-end">
                                                                <a onClick={() => openModal(value)} class="btn btn-sm btn-danger">More Details</a>

                                                               

                                                                
                                                                <Modal
                                                                    isOpen={modalIsOpen}
                                                                    onAfterOpen={afterOpenModal}
                                                                    onRequestClose={closeModal}
                                                                    style={customStyles}
                                                                    contentLabel="Example Modal"
                                                                >

                                                                    {/* <button onClick={closeModal}>close</button> */}

                                                                    <FadeIn
                                                                    from="top"
                                                                    positionOffset={400}
                                                                    triggerOffset={400}
                                                                    delayInMilliseconds={200}
                                                                >
                                                                    <div class="modal-header">
                                                                        <h2 class="modal-title">User Information</h2>

                                                                    </div>
                                                                    <div>
                                                                        <h5 className='mt-2'>Name: {tempUser.name}</h5>
                                                                        <h5 className='mt-1'>Email: {tempUser.email}</h5>
                                                                        <h5 className='mt-1'>Address: {tempUser.address}</h5>
                                                                        <h5 className='mt-1'>Contact: {tempUser.contact}</h5>
                                                                        <h5 className='mt-1'>Experience: {tempUser.experience}</h5>
                                                                        <h5 className='mt-1'>Passing Year: {tempUser.passyear}</h5>
                                                                        <h5 className='mt-1'>Percentage: {tempUser.percent}</h5>
                                                                        <h5 className='mt-1'>Pin Code: {tempUser.pincode}</h5>
                                                                        <h5 className='mt-1'>Skills: {tempUser.skill}</h5>
                                                                        <h5 className='mt-1'>State: {tempUser.state}</h5>
                                                                        <h5 className='mt-1'>University: {tempUser.university}</h5>
                                                                        <h5 className='mt-1'>Work Experience: {tempUser.workexperience}</h5>
                                                                        <h5 className='mt-1'>Experience Year: {tempUser.year}</h5>
                                                                    </div>
                                                                    <button onClick={closeModal} type="button" class="btn btn-sm btn-danger mt-3" data-bs-dismiss="modal">Close</button>

                                                                    </FadeIn>
                                                                </Modal>
                                                                

                                                            </td>
                                                        </tr>

                                                    )
                                                })}


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>


                <div /* style={{ marginLeft: "5px" }} */ className='mb-3'>
                    <button onClick={showHome} className='btn btn-sm btn-primary w-full w-lg-auto'> back</button>
                </div>

            </div >



        </>
    )
}

export default AppliedJobInfo
