import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchjobLists } from '../../../service/Slice/JobSlice'
import Search from '../../Search/Search'
import { FadeIn } from 'react-slide-fade-in';

const Home = () => {


  const [postjobdata, SetPostjobdata] = useState([]);
  /* const [onejobdata, setOnejobdata] = useState([]); */

  const [home, setHome] = useState(true)
  const [formView, setformView] = useState(false)

  const { jobListsData } = useSelector((state) => state.Job)
  const dispatch = useDispatch();

  const [query, setQuery] = useState('')

  /*  const [search, setSearch] = useState(false) */

  useEffect(() => {

    dispatch(fetchjobLists())

    Object.values(jobListsData).forEach(function
      (i) {
      SetPostjobdata(i);
    })

  }, [jobListsData])



  // !  Get View all Job Data by ID  //
  const [getjobviewdata, setGetjobviewdata] = useState([]);

  const getdatabyid = async (data) => {
    setformView(!formView)
    setHome(!home)
    setGetjobviewdata(data)
  }


  // ! Show Home Page & Form View Page //

  const showForm = () => {
    setformView(!formView)
    setHome(!home)
  }

  const navigate = useNavigate()

  // localstorage.setItem("key","value") // expcept
  //localstorage.getItem("key") //return type any

  useEffect(() => {
    const token = localStorage.getItem('auth')

    if (token) {

      var decoded = jwt_decode(token);

      if (decoded.userType == 'User') {
        console.log(decoded)
        navigate("/home")
      }
      if (decoded.userType == 'Admin') {
        console.log(decoded)
        navigate("/adminhome")
      }

    } else {
      navigate("/")
    }
  }, []);



  return (
    <>

      <Navbar />

      {/* Home Section Start */}



      {home ? <>

        <FadeIn
          from="top"
          positionOffset={400}
          triggerOffset={400}
          delayInMilliseconds={200}
        >
          <div className='container'>
            <div style={{ flex: 1 }}>
              <h2 className='text-center mt-3' style={{ fontFamily: 'poppins', fontWeight: '700', color: "#FF3366" }}> Find your dream job now </h2>
              <p className='text-center' style={{ fontFamily: 'poppins', color: "#2b54f8" }}>2 lakh+ jobs for you to explore</p>
            </div>

            <div class="row">
              <div class="col-md-3 mt-3">
                <div class="input-group rounded">
                  <input type="search" style={{ 'background': "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position: 'relative', color: "#000" }} class="form-control rounded py-2 rounded-pill mr-1 pr-5" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                  />
                  {/* <span class="input-group-append">
                  <button class="btn rounded-pill border-0 ml-n5" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </span> */}
                </div>
              </div>
            </div>



            {/*  <form>
            <input className='form-control' type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
          </form> */}

            {query.length > 0 ? <>

              <Search query={query} getdatabyid={getdatabyid} postjobdata={postjobdata} />
            </> : <>
              <div class="container sections-wrapper py-2">
                <div class="row">

                  <div class="primary col-lg-9 col-12">
                    {/* // ! Map function // */}
                    {postjobdata.map((value) => {
                      return (
                        <div style={{ borderRadius: '15px', 'background': "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )", position: 'relative', backgroundColor: 'a9c9ff' }} class="card container mt-3 p-2 shadow  mb-5 ">
                          <div class="card-body">
                            <h3 style={{ color: "#FF3366" }} class="mb-2">{value.title}</h3>
                            <span class="text-truncate me-3"><i class="fa-solid fa-briefcase me-2"></i>{value.experience}</span>
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{value.location}</span>
                            <br />
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-clock me-2"></i>{value.empType}</span>
                            <span class="text-truncate me-3"><i class="fa-sharp fa-solid fa-indian-rupee-sign me-2"></i>{value.salary}</span>
                            <span class="text-truncate me-0"><i class="fa-solid fa-file-import me-2"></i>Applied: 09</span>
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
                    })}


                  </div>

                  <div class="secondary col-lg-3 col-12 mt-3"  >
                    <aside class="testimonials aside section shadow-3" /* style={{ borderRadius: '15px'}} */>
                      <div class="section-inner rounded">
                        <h2 class="heading">About</h2>
                        <div class="content">
                          <div class="item">
                            <blockquote class="quote">
                              <p><i class="fas fa-quote-left"></i> Rahul Sharma is an excellent Full Stack Developer and he is passionate about what he does. You can totally count on him to deliver your projects!</p>
                            </blockquote>
                            <p class="source"><span class="name">Developed By</span><br /><span class="title">Rahul Sharma</span></p>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>

                </div>
              </div>
            </>}


          </div>
        </FadeIn>
      </> : <></>}


      {formView ? <>  <Form showForm={showForm} data={getjobviewdata} /></> : <></>}


    </>
  )
}

export default Home
