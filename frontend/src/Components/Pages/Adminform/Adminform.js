import React, { useState } from 'react'
import './Adminform.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminform = () => {
  const navigate= useNavigate();

 const [title, setTitle] = useState("");
 const [experience, setExperience] = useState("");
 const [empType, setEmpType] = useState("");
 const [salary, setSalary] = useState("");
 const [location, setLocation] = useState("");
 const [description, setDescription] = useState("");
 const [qualification, setQualification] = useState("");
 const [role, setRole] = useState("");
 const [industryType, setIndustryType] = useState("");
 const [department, setDepartment] = useState("");
 const [category, setCategory] = useState("");
 const [education, setEducation] = useState("");
 const [hrname, setHrname] = useState("");
 const [aboutcompany, setAboutcompany] = useState("");


 const addJob = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/admin/addpost', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, experience, empType, salary, location, description, qualification, role, industryType, department, category, education, aboutcompany, hrname })

  })

  if (response.ok) {
       /* alert("success"); */
      navigate('/');
      toast.success('success', {
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
    <div className='container'>
      {/* <h1 style={{ textAlign: "center" }}>This is Admin home Page view</h1> */}

      <div class="container sections-wrapper py-2">
        <div class="row">

          <div class="primary col-lg-12 col-12">
            <div style={{ borderRadius: '10px' }} class="card container mt-3 p-2 shadow  mb-3 ">

              <div className="col-lg-12">
                <form onSubmit={addJob} /* action="forms/contact.php" */ className="php-email-form mt-3 p-2">

                  <div className="row gy-4">

                    <div className="col-md-4">
                      <input type="text" name="title" className="form-control" placeholder="Job Title" required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="expirence" placeholder="Expirence" required
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="empType" placeholder="Employment Type" required
                      value={empType}
                      onChange={(e) => setEmpType(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6">
                      <input type="number" name="salary" className="form-control" placeholder="Salary" required
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input type="text" className="form-control" name="city" placeholder="Job City" required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    <div className="col-md-12 ">
                      <textarea className="form-control" name="description" rows="6" placeholder="Job description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                        required>
                      </textarea>
                    </div>

                    <div className="col-md-12 ">
                      <textarea className="form-control" name="qualification" rows="6" placeholder="Qualification Required"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                        required>
                      </textarea>
                    </div>

                    <div className="col-md-4">
                      <input type="text" name="role" className="form-control" placeholder="Role" required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="industryType" placeholder="Industry Type" required
                      value={industryType}
                      onChange={(e) => setIndustryType(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="department" placeholder="Department" required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="category" placeholder="Employment Category" required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="education" placeholder="Education" required
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4 ">
                      <input type="text" className="form-control" name="hrname" placeholder="HR Name" required
                      value={hrname}
                      onChange={(e) => setHrname(e.target.value)}
                      />
                    </div>

                    <div className="col-md-12 ">
                      <textarea className="form-control" name="qualification" rows="6" placeholder="About Company"
                      value={aboutcompany}
                      onChange={(e) => setAboutcompany(e.target.value)}
                        required>
                      </textarea>
                    </div>

                    <div className="col-md-12 text-center">
{/*                       <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div> */}

                      
                      <button /* onClick={appliedshowForm} */ href="#" class="btn btn-sm btn-primary w-full w-lg-auto mt-2  mb-5 mt-3" >
                        Published
                      </button>
                    </div>

                  </div>
                </form>
              </div>


            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Adminform
