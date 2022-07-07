import React from 'react';
import homeAbout from '../images/homeAbout.jpg';
import '../styles/Home.css';
import HomeFloor from './HomeFloor';

function HomeAbout() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
                <div className='container py-5'>
                    <div className='row pt-5'>
                        <h1 className='pt-5 homeAboutText'>About Our Company</h1>
                        <p className='homeAboutPara py-3'>We are Global Floor Group, a name that you can trust
                            with all your flooring needs in Australia. A modern
                            space has diverse flooring needs and catering to them
                            all is our Australian-owned and operated flooring company
                            based out of Truganina. We have a wide assortment of floor
                            designs and colors from which you can pick the ones that go best
                            with the vibe and needs of your home or commercial space.</p>
                    </div>
                    <div className='borderBtn ms-5'>
                        <p className='borderPara'>We don’t limit ourselves to just offering flooring options
                            but cover both installations and<br /> maintenance under the umbrella
                            of flooring services that we offer. So, whatever your flooring <br />needs
                            in Australia might be, you can trust us to efficiently cater to them all.</p>
                    </div>
                    <div className='row py-5'>
                        <div className='col-md-5 floorCard'>
                            <div className='text-center py-3'>
                                <i className="fad fa-th floorIcon" aria-hidden="true"></i>
                                <p className='floorText pt-3'>All the Flooring Services You Need Under One Roof</p>
                            </div>
                        </div>
                        <div className='col-md-5 m-auto floorCard'>
                            <div className='text-center py-3'>
                                <i className="fad fa-bring-forward floorIcon" aria-hidden="true"></i>
                                <p className='floorText pt-3'>A quality that offers strong footing options for your space</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <HomeFloor />
        </div>
    )
}

export default HomeAbout