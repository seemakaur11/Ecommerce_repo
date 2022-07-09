import React from 'react';
import '../styles/Service.css';
import homeAbout from '../images/about/homeAbout.jpg';
import bgInstall from '../images/service/bgInstall.jpg';
import installImg from '../images/service/installImg.png';

function SupplyAndInstall() {
    return (
        <div>
            {/* main supply section */}
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='row text-center'><h1 className='aboutTitle pt-3'>SUPPLY AND INSTALLATION</h1></div>
                </div>
            </section>
            {/* first supply setion */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='row text-center pt-4'>
                        <h6 className='installText'>From the finding of the right flooring
                            options to having floors that are ready
                            to be walked upon, the process is quite
                            long and hard to tread but we make this
                            journey short, convenient, and efficient
                            with our floor installation services.</h6>
                        <p className='installPara pt-4'>We at Global Floor Group are trusted suppliers
                            of flooring options of all kinds and we are
                            also an expert team of floor installers dedicated
                            to offering you a premium and picture-perfect
                            flooring experience.</p>
                        <p className='installPara'>From the moment you enter our showroom
                            in search of the right floor for your space,
                            our assistance begins. We will help you choose
                            the best flooring option depending upon priorities
                            and then bring the chosen material to your space and
                            begin the process of installation.</p>
                    </div>
                </div>
            </section>
            {/* second supply section */}
            <section style={{ backgroundImage: `url(${bgInstall})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
                <div className='container supplyContainer py-5'>
                    <div className='row py-5'>
                        <div className='col-lg-6 m- auto'></div>
                        <div className='col-lg-6 supplyTeam'>
                            <h3 className='supplyTeamText'>A Team of Expert Floor Installers in Australia</h3>
                            <p className='supplyTeamPara pt-3'>When it comes to installation, our expert floor installers follow
                                Australian standards to the highest degree and are fully equipped
                                and licensed to undertake your installation with utmost care. We
                                know unless laid well, a floor can never give off that perfect vibe,
                                and therefore we always undertake the work with utmost care and efficiency.
                                With us, floor installation projects of any scale, involving any material
                                are taken care of while properly adhering to safety standards so that the
                                work proceeds smoothly and your floors stand strong and beautiful for years
                                to come.</p>
                        </div>
                    </div>
                </div>

            </section>
            {/* third supply section */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='text-center pt-4'><h3 className='installText11'>Building Foundation for Your Spaces With Floor Supply and Installation Services</h3></div>
                        <div className='col-lg-6'>
                            <img src={installImg} className="img-fluid pt-4" alt="install" />
                        </div>
                        <div className='col-lg-6 pt-4'>
                            <p className='installPara11'>When it comes to floor installation there is nothing
                                like one method that fits all. Depending on the material
                                used, the complexity of the installation changes and so
                                does the method used. Our experts at Global Floor Group
                                are well-aware of these distinctions and undertake installations
                                after properly inspecting the area and the flooring material.</p>
                            <p className='installPara11'>When you select a flooring material with us, we will
                                guide you through the installation process and the
                                cost involved so that you can make an informed choice.
                                From solid timber flooring that is the hardest to install
                                laminate floors that come on the easier side, we have the
                                expertise to proceed with them all efficiently. So, no matter
                                how tough the installation work is, you can expect nothing but
                                the best service from us. To know more about different materials
                                and their installation procedures, get in touch with our experts
                                at Global Floor Group today.</p>
                            <div className='py-4'>
                                <button className='installContactBtn'>CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SupplyAndInstall