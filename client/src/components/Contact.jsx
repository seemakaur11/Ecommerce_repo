import React from 'react'
import '../styles/Gallery.css';
import homeAbout from '../images/about/homeAbout.jpg';

function Contact() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='row text-center'>
                        <h1 className='galleryTitle'>CONTACT US</h1>
                    </div>
                </div>
            </section>
            {/* first contact section */}
            <section style={{ background: 'aliceblue' }} className="py-5">
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-lg-3 m-auto'></div>
                        <div className='col-lg-3'>
                            <div className='py-5'>
                                <i className='fab fa-facebook-f contactIcon'></i>
                                <div className='pt-4'>
                                    <h6 className='contactText'>Facebook</h6>
                                </div>
                                <p className='contactPara'>JOIN THE CONVERSATION</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='py-5'>
                                <i className='fab fa-instagram contactIcon'></i>
                                <div className='pt-4'>
                                    <h6 className='contactText'>Instagram</h6>
                                </div>
                                <p className='contactPara'>LATEST IMAGES</p>
                            </div>
                        </div>
                        <div className='col-lg-3 m-auto'></div>
                    </div>
                </div>
            </section>
            {/* second contact section */}
            <section className='py-5'>
                <div className='container py-3'>
                    <div className='row'>
                        <h2 className='text-center touchText'>Get in Touch</h2>
                    </div>
                </div>
                <div className='container pt-5' style={{ background: "black" }}>
                    <div className='row py-5'>
                        <div className='col-lg-6 pt-5'>
                            <div className='d-flex touchMain'>
                                <i className="fa-solid fa-phone contactTouchIcon"></i>
                                <h3 className='contactTouchText ms-5'>Call Us:<p className='contactTouchPara pt-3'>03 9394 1758</p></h3>
                            </div>
                            <div className='ms-5'><hr style={{ border: "1px solid white", width: "80%", height: "1px" }} /></div>
                            <div className='d-flex touchMain pt-3'>
                                <i className="fas fa-envelope contactTouchIcon"></i>
                                <h3 className='contactTouchText ms-5'>Email Us:<p className='contactTouchPara pt-3'>info@globalfloorgroup.com.au</p></h3>
                            </div>
                            <div className='ms-5'><hr style={{ border: "1px solid white", width: "80%", height: "1px" }} /></div>
                            <div className='d-flex touchMain pt-3'>
                                <i className="fas fa-map-marked-alt contactTouchIcon"></i>
                                <h3 className='contactTouchText ms-5'>Find Us: <p className='contactTouchPara pt-3'>Unit 12/215 Palmers Rd, Truganina, 3029, Victoria</p></h3>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-5'>
                            <input type="text" placeholder='name' name="name" className='contactTouchInput p-2 m-2' />
                            <input type="text" placeholder='name' name="name" className='contactTouchInput p-2 m-2' />
                            <input type="text" placeholder='name' name="name" className='contactTouchInput p-2 m-2' />
                            <textarea type="text" placeholder='message' className='contactTouchMessage p-2 m-2'></textarea>
                            <div className='ms-2 pt-4'>
                                <button className='contactTouchSubmit'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* third contact section */}
            <section className='pt-5'>
                <div className='container-fluid pt-5'>
                    <div className='row'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.9615207314328!2d144.74324441468218!3d-37.83778667974803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6898395db779f%3A0x4a3cbfaa859196b3!2sShop%2012%2F215%20Palmers%20Rd%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1657645388527!5m2!1sen!2sin" title="australia" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact