import React from 'react'
import homeAbout from '../images/about/homeAbout.jpg';
import service1 from '../images/service/service1.jpg';
import service2 from '../images/service/service2.jpg';
import lam_icon1 from '../images/lam_icon1.png';
import lam_icon2 from '../images/lam_icon2.png';
import lam_icon3 from '../images/lam_icon3.png';
import lam_icon4 from '../images/lam_icon4.png';
import '../styles/Service.css';

function Services() {
    return (
        <div>
            {/* main service section */}
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='text-center'><h1 className='aboutTitle'>SERVICES</h1></div>
                </div>
            </section>
            {/*second service section */}
            <section style={{ backgroundColor: "#F2F5F7" }}>
                <div className='container py-5'>
                    <div className='row pt-5'>
                        <div className='col-lg-6 py-5'>
                            <h2 className='serviceText'>Our Main Services</h2>
                            <div className='py-4'>
                                <div className='borderBtn'>
                                    <p className='servicePara'>From modern, traditional to contemporary
                                        flooring options, we are home to flooring
                                        options of all kinds.</p>
                                </div>
                            </div>
                            <p className='servicePara11'>May you be in search of the right floor
                                to give your stairways that sleek finish,
                                to create perfect pathways, living spaces
                                with a modern undertone, or even spaces that
                                shine with that old-world brilliance, we have
                                it all for a guaranteed satisfactory experience.
                                But our assistance doesn’t end with you finding the
                                right match but extends to helping you install and also
                                maintain your floors. So, holistic assistance is what you
                                sign up for when you choose to engage with us.</p>
                        </div>
                        <div className='col-lg-6 py-5'>
                            <img src={service1} className="img-fluid" alt="service" />
                        </div>
                    </div>
                </div>
            </section>
            {/* third service section */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='text-center'>
                        <h2>Flooring</h2>
                    </div>
                    <div className='row pt-3'>
                        <div className='col-lg-3 m-auto text-center cardImg1'>
                            <img src={lam_icon4} className="lamImg" alt="lam_icon4" />
                            <h6 className='pt-3 cardTitle1'>Solid Timber</h6>
                            <p className='cardPara1'>When it comes to solid timber flooring there are
                                a plethora of options available and are definitely
                                the most preferred choice for modern structures of
                                all kinds.</p>
                        </div>
                        <div className='col-lg-3 m-auto text-center cardImg1'>
                            <img src={lam_icon1} className="lamImg" alt="lam_icon1" />
                            <h6 className='pt-3 cardTitle1 pt-5'>Laminate Flooring</h6>
                            <p className='cardPara1 pt-3'>Want a wooden effect but not exactly a
                                wooden floor? Then laminate flooring is the one that will meet
                                your standards.</p>
                        </div>
                        <div className='col-lg-3 m-auto text-center cardImg1'>
                            <img src={lam_icon2} className="lamImg" alt="lam_icon2" />
                            <h6 className='pt-3 cardTitle1 pt-5'>Hybrid Flooring</h6>
                            <p className='cardPara1 pt-5'>If you want the best of both worlds for your space then hybrid flooring is your best pick.</p>
                        </div>
                        <div className='col-lg-3 m-auto text-center cardImg1'>
                            <img src={lam_icon3} className="lamImg" alt="lam_icon1" />
                            <h6 className='pt-3 cardTitle1'>Engineered Flooring</h6>
                            <p className='cardPara1'>If you want the timely effect of wood
                                but want a more durable and easy-to-maintain option for your
                                home or workspace then you can consider engineered wood flooring.</p>
                        </div>
                        <div className='text-center py-5'>
                            <button className='serviceFloorBtn'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* fourth service section */}
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6  m-0 p-0'>
                            <img src={service2} className="fourthSerImg" alt="service2" />
                        </div>
                        <div className='col-lg-6' style={{ backgroundColor: "#f5f5f5 " }}>
                            <h2 className='pt-5 mx-5 supplyText'>Supply And Installation</h2>
                            <p className='supplyPara mx-5 py-3'>From the finding of the right flooring
                                options to having floors that are ready
                                to be walked upon, the process is quite long
                                and hard to tread but we make this journey short,
                                convenient, and efficient with our floor installation
                                services. We at Global Floor Group are trusted suppliers
                                of flooring options of all kinds and we are also an expert
                                team of floor installers dedicated to offering you a premium
                                and picture-perfect flooring experience</p>
                            <button className='serviceFloorBtn mx-5'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services