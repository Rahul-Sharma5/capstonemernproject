import React from 'react'


export default function Search({ query, getdatabyid, postjobdata }) {
    return (
        <div>

            <div class="container sections-wrapper py-2">
                <div class="row">

                    <div class="primary col-lg-9 col-12">

                        {postjobdata.filter(data => {
                            if (data.title.toLowerCase().includes(query.toLowerCase()) || data.location.toLowerCase().includes(query.toLowerCase())) {
                                return data;
                            }
                        }).map((value, _id) => {
                            return (
                                <div key={_id} style={{ borderRadius: '15px', 'background':"linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position:'relative', backgroundColor: 'a9c9ff'}} class="card container mt-3 p-2 shadow  mb-5 ">
                                    <div class="card-body">
                                        <h3 style={{ color: "black" }} class="mb-2">{value.title}</h3>
                                        <span class="text-truncate me-3"><i class="fa-solid fa-briefcase me-2"></i>{value.experience}</span>
                                        <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{value.location}</span>
                                        <br />
                                        <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-clock me-2"></i>{value.empType}</span>
                                        <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-indian-rupee-sign me-2"></i>{value.salary}</span>
                                        <span class="text-truncate me-0"><i class="fa-solid fa-file-import me-2"></i>Applied: 509</span>
                                        <span class="d-block text-muted text-sm font-semibold">Monday Jan 20 , 2021</span>

                                        <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                                            <button style={{ marginTop: "10px", height: "40px", width: "auto" }} href="#" /* onClick={showForm} */ class="btn btn-sm btn-primary w-full w-lg-auto"
                                                onClick={() => getdatabyid(value)}>
                                                More Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }




                    </div>



                </div>
            </div>

        </div>
    )
}
