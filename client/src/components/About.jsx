import React from 'react'
import homeAbout from '../images/about/homeAbout.jpg';
import aboutFloor from '../images/about/aboutFloor.jpg';
import fifthImg from '../images/about/fifthImg.png';
import '../styles/About.css';


function About() {
    return (
        <div>
            {/* main about section */}
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='text-center'><h1 className='aboutTitle'>ABOUT US</h1></div>
                </div>
            </section>
            {/* second about section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='text-center pt-5'>
                        <h6 className='pt-4 aboutTitle11'>Model your home and workspace into your dream space with Global Floor Group.</h6>
                        <p className='aboutPara11'>We are Global Floor Group, a flooring company in Truganina,
                            and an answer to all your flooring needs. As a building owner
                            in Truganina, you might have a clear vision regarding what each
                            corner of your home or commercial space might look like, and with
                            our flooring services we help turn one part of this vision into a reality.
                            From Parquetry, Chevron, Laminate, Hybrid, to Engineered flooring we have
                            an assorted collection of them all from which you can find the ones that fit your space well.</p>
                    </div>
                </div>
            </section>
            {/* third about section */}
            <section className='py-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 m-0 p-0'>
                            <div style={{ backgroundColor: "black" }}>
                                <h3 className='floorText12'>All the Flooring <br />Services You Need <br />Under One Roof</h3>
                            </div>
                        </div>
                        <div className='col-lg-4 m-0 p-0'>
                            {/* <div className='borderImg'></div> */}
                            <img src={aboutFloor} className="floorImg" alt="about-floor" />
                        </div>
                        <div className='col-lg-4 m-0 p-0'>
                            <div style={{ backgroundColor: "#f5f5f5" }}>
                                <p className='floorPara22 mx-5'>One place to find the best flooring options,
                                    a different one to avail of installation services,
                                    and a different one when looking for maintaining /
                                    remodeling your floors. Change this narrative with Global
                                    Floor Group as we offer all the flooring services under one
                                    roof. Our assistance doesn’t end with just providing you with
                                    flooring options, we specialize in end-to-end management by
                                    offering expert installation and maintenance services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* four about section */}
            <section className='m-5 p-3' style={{ backgroundColor: "#f5f5f5" }}>
                <div className='container'>
                    <div className='text-center'>
                        <p className='fourPara'>So, voice your flooring concerns with us, and have them all
                            answered in the most efficient manner. For the efficient
                            laying of your floors, expertise and skills are a must and
                            we bring both to the picture with our expert team that has been
                            delivering flooring installations services for years now. So, floors
                            fit for your space, and floor installation experts fit to offer services
                            that meet the Australian standards, find both with us at Global Floor Group</p>
                    </div>
                </div>
            </section>
            {/* fifth about section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={fifthImg} className="img-fluid" alt="fifthImg" />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className='fifthTitle mx-4'>A quality that offers strong footing options for your space</h2>
                            <p className='fifthPara pt-3 mx-4'>We are a brand known for sourcing the best quality products
                                from reputable suppliers and offering efficient floor
                                installation and remodeling services that leaves no space
                                for errors. We offer the best in terms of durability, functionality,
                                style, and aesthetic and therefore our flooring options are both good
                                to your eye and friendly to your pocket. We offer flooring ideas, options,
                                and services for a better living and help the world beneath your feet shine
                                brightly and beautifully.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;