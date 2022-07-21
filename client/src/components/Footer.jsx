import React, { useState } from 'react';
import logo1 from '../images/logo1.png';
import mLogo from '../images/mLogo.png';
import '../styles/Footer.css'

function Footer() {

    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <section className='pt-5'>
            <div style={{ backgroundColor: "black" }}>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-md-3 pt-5'>
                            <img src={logo1} className="logoFooter py-4" />
                            <p className='footerP'>Model your home and workspace into your dream space with Global Floor Group.
                                We are Global Floor Group, a flooring company in Truganina, and an answer
                                to all your flooring needs.</p>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <div className='row'>
                                <div className='col-md-4 pt-5'>
                                    <h2 className='py-3 footerLink'>Useful Links</h2>
                                    <div className=''>
                                        <p className='footerPara'>Laminate</p>
                                        <p className='footerPara'>Hybrid</p>
                                        <p className='footerPara'>Engineered Flooring</p>
                                        <p className='footerPara'>Solid Timber</p>
                                    </div>
                                </div>
                                <div className='col-md-4 pt-5'>
                                    <h2 className='py-3 footerLink'>More Links</h2>
                                    <div className=''>
                                        <p className='footerPara'>About Us</p>
                                        <p className='footerPara'>Products</p>
                                        <p className='footerPara'>Services</p>
                                        <p className='footerPara'>Flooring</p>
                                        <p className='footerPara'>Supply and Installation</p>
                                    </div>
                                </div>
                                <div className='col-md-4 pt-5'>
                                    <h2 className='py-3 footerLink mx-2'>Contact Us</h2>
                                    <p className='footerPara d-flex'><i className='fas fa-map-marker-alt footerIcon m-3'></i>Unit 12/215 Palmers Rd, Truganina, 3029, Victoria</p>
                                    <p className='footerPara'><i className='fas fa-phone-volume footerIcon m-3'></i>03 9394 1758</p>
                                    <p className='footerPara d-flex'><i className='fas fa-envelope footerIcon m-auto mx-3'></i>info@globalfloorgroup.com.au</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <hr style={{ border: "1px solid white" }} />
                        </div>
                        <div className='text-center py-2'>
                            <p className='copyRight'>Copyright © 2022 Global Floor Group |
                                <a href="/" className='copyRightLink m-2'>Web Design Melbourne -
                                    <img src={mLogo} className="img-fluid" />
                                    Make My Website
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* topScrollBtn */}
            <i className="fa-solid fa-angle-up" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} id="scrollBtn"></i>
        </section>
    )
}

export default Footer