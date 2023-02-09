import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Faq.css'

const Faq = () => {

    const navigate = useNavigate()

    const showHome = () => {
        navigate("/home");
    }

    useEffect(() => {
        const token = localStorage.getItem('auth')
        if (token) {
        } else {
            navigate("/")
        }
    }, []);

    return (
        <>
            <div className="helpcontainer container">

                <div className="helpinfo">
                    <h1 className="text-left mb-4 pb-2 text-dark fw-bold">Frequently asked questions</h1>
                    <p className="text-left fs-20 me-20 mb-5">
                        Here are some of the most frequent questions we get from our customers.
                        <br></br>
                        <br></br>
                        If you have any further questions, get in touch with our friendly team😃
                    </p>

                </div>

                <div /* style={{ marginLeft: "10px" }} */ className='mb-3'>
                    <button onClick={showHome} className=' btn btn-sm btn-primary w-full w-lg-auto'>back</button>
                </div>

                <div className="helpquestions">
                    <div className="accordion" id="accordionExampleY">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOneY">
                                <button className="accordion-button" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
                                    <i className="fas fa-paper-plane text-dark pe-2"></i><b>Est veniam consequat cupidatat minim?</b>
                                </button>
                            </h2>
                            <div id="collapseOneY" className="accordion-collapse collapse show" aria-labelledby="headingOneY"
                                data-mdb-parent="#accordionExampleY">
                                <div className="accordion-body">
                                    <strong>Absolutely Anything!!!</strong> Duis pariatur consectetur qui incididunt esse officia sint pariatur exercitation. Culpa id eiusmod aute voluptate. Occaecat magna dolor id reprehenderit consectetur incididunt incididunt anim proident et veniam laboris tempor. Enim dolore ea amet mollit sint Lorem velit incididunt sunt est aliquip consequat. Aliquip Lorem id proident sunt mollit mollit sunt duis labore aute. Est veniam consequat cupidatat minim. Velit qui officia eu id excepteur proident sit et est.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwoY">
                                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
                                    <i className="fas fa-pen-alt text-dark pe-2"></i><b>Velit qui officia eu id excepteur proident sit et est?</b>
                                </button>
                            </h2>
                            <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY"
                                data-mdb-parent="#accordionExampleY">
                                <div className="accordion-body">
                                    <strong>Ofcourse...!</strong> Duis pariatur consectetur qui incididunt esse officia sint pariatur exercitation. Culpa id eiusmod aute voluptate. Occaecat magna dolor id reprehenderit consectetur incididunt incididunt anim proident et veniam laboris tempor. Enim dolore ea amet mollit sint Lorem velit incididunt sunt est aliquip consequat. Aliquip Lorem id proident sunt mollit mollit sunt duis labore aute. Est veniam consequat cupidatat minim. Velit qui officia eu id excepteur proident sit et est.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThreeY">
                                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
                                    <i className="fas fa-user text-dark pe-2"></i><b>Lorem velit incididunt sunt est aliquip consequat?</b>
                                </button>
                            </h2>
                            <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY"
                                data-mdb-parent="#accordionExampleY">
                                <div className="accordion-body">
                                    <strong>Minimum 3 Months....</strong> Duis pariatur consectetur qui incididunt esse officia sint pariatur exercitation. Culpa id eiusmod aute voluptate. Occaecat magna dolor id reprehenderit consectetur incididunt incididunt anim proident et veniam laboris tempor. Enim dolore ea amet mollit sint Lorem velit incididunt sunt est aliquip consequat. Aliquip Lorem id proident sunt mollit mollit sunt duis labore aute. Est veniam consequat cupidatat minim. Velit qui officia eu id excepteur proident sit et est.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFourY">
                                <button className="accordion-button" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseFourY" aria-expanded="true" aria-controls="collapseFourY">
                                    <i className="fas fa-rocket text-dark pe-2"></i><b> Lorem id proident sunt mollit mollit sunt?</b>
                                </button>
                            </h2>
                            <div id="collapseFourY" className="accordion-collapse collapse " aria-labelledby="headingFourY"
                                data-mdb-parent="#accordionExampleY">
                                <div className="accordion-body">
                                    <strong>Duis pariatur consectetur qui incididunt esse officia sint pariatur exercitation. Culpa id eiusmod aute voluptate. Occaecat magna dolor id reprehenderit consectetur incididunt incididunt anim proident et veniam laboris tempor. Enim dolore ea amet mollit sint Lorem velit incididunt sunt est aliquip consequat. Aliquip Lorem id proident sunt mollit mollit sunt duis labore aute. Est veniam consequat cupidatat minim. Velit qui officia eu id excepteur proident sit et est.</strong>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFiveY">
                                <button className="accordion-button" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseFiveY" aria-expanded="true" aria-controls="collapseFiveY">
                                    <i className="fas fa-home text-dark pe-2"></i><b>Lorem velit incididunt sunt est aliquip consequat?</b>
                                </button>
                            </h2>
                            <div id="collapseFiveY" className="accordion-collapse collapse " aria-labelledby="headingFiveY"
                                data-mdb-parent="#accordionExampleY">
                                <div className="accordion-body">
                                    <strong></strong>We are happy to help you get a duplicate Voucher in case you have lost your original one.
                                    You can use the virtual chat assistant for this purpose. Here’s how:<br></br>
                                    1. Select the Voucher value & quantity you want to send them.<br></br>
                                    2. Check the box saying “I am Gyfting.”<br></br>
                                    3. Choose your message, occasion and mention the contact details of the recipient.<br></br>
                                    4. Make the payment through available methods.<br></br><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Faq
