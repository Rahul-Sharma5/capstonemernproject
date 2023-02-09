import React, { useState } from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import './Adminhome.css'
import Adminform from '../Adminform/Adminform'
import ApplicantApplied from '../ApplicantApplied/ApplicantApplied'

const Adminhome = () => {

    const [adminhome, setadminhome] = useState(true)
    const [adminformView, setadminformView] = useState(false)

    const [appliedformView, setappliedformView] = useState(false)

    const adminshowForm = () => {
        setadminformView(!adminformView)
        setadminhome(!adminhome)

    }

    const appliedshowForm = () =>{
        setappliedformView(!appliedformView)
        setadminhome(!adminhome)
    }

    return (
        <>
            <Adminnavbar />
            {/* <ApplicantApplied/> */}

            {adminhome ? <>

                <div>
                    <section class="position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover hero">
                        {/* <!-- Overlay --> */}
                        <span class="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80"></span>
                        {/* <!-- Content --> */}
                        <div class="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
                            <div class="row row-grid align-items-center">
                                <div class="col-lg-8 text-center text-lg-start">
                                    {/* <!-- Title --> */}
                                    <h1 class="ls-tight font-bolder display-5 text-white mb-5">
                                        We can make your future better
                                    </h1>
                                    {/* <!-- Text --> */}

                                    <p class="lead text-white text-opacity-75 mb-10 w-lg-2/3">
                                        Empowering The Leader of Tomorrow Pariatur aute id fugiat qui eiusmod officia est cillum cupidatat labore in excepteur adipisicing laboris.
                                    </p>
                                    {/* <!-- Buttons --> */}
                                    {/*                                 <div class="mx-n2">
                                    <button onClick={adminshowForm} href="#" class="btn btn-lg btn-success shadow-sm mx-2 px-lg-8">
                                        Add Jobs
                                    </button>
                                </div> */}
                                    <div class="mt-10 mx-n2">
                                        <button onClick={adminshowForm} href="#" class="btn btn-lg btn-success shadow-sm mx-2 px-lg-8">
                                            Add Jobs
                                        </button>

                                        <button onClick={appliedshowForm} href="#" class="btn btn-lg btn-neutral shadow-sm mx-2 px-lg-8" style={{color: "black"}}>
                                            Jobs Applied
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </> : <></>}

            {adminformView ? <>  <Adminform adminshowForm={adminshowForm} /></> : <></>}

            {appliedformView ? <> <ApplicantApplied adminshowForm={appliedshowForm} /></> : <></> }

        </>
    )
}

export default Adminhome
