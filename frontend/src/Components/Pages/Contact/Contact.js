import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const showHome = () => {
        navigate("/home");
    }



    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Address</h3>
                                        <p>Patna, Bihar<br />India</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-clock"></i>
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                    </div>
                                </div>

                                <div style={{ marginLeft: "10px" }} className='mb-3'>
                                    <button onClick={showHome} className='btn btn-sm btn-primary w-full w-lg-auto'> back</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form method="POST"/* action="forms/contact.php" */ className="php-email-form">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required
                                        /*  value={userData.name}
                                         onChange={handleInputs} */
                                        />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required
                                        /*  value={userData.email}
                                         onChange={handleInputs} */
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="number" className="form-control" name="phone" placeholder="Your Phone Number" required
                                        /* value={userData.phone}
                                        onChange={handleInputs} */
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message"
                                            /* value={userData.message}
                                            onChange={handleInputs} */
                                            required>
                                        </textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit" /* onClick={contactForm} */>Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
