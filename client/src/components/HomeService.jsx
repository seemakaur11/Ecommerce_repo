import React from 'react';
import '../styles/Home.css';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';
import service4 from '../images/service4.jpg';
import service5 from '../images/service5.jpg';
import service6 from '../images/service6.jpg';

function HomeService() {
    return (
        <div className='container py-5'>
            <div className='text-center'>
                <h2 className='homeServText'>Our Services</h2>
                <p className='homeServPara'>From modern, traditional to contemporary flooring options,
                    we are home to flooring options of all kinds.</p>
                <div className='row text-center py-4'>
                    <div className='col-md-3 servContainer'>
                        <img src={service1} className="serviceImg" alt="service1" />
                        <div className="overlayServ">Flooring</div>
                    </div>
                    <div className='col-md-3'>
                        <div className='servContainer'>
                            <img src={service2} className="serviceImg1" alt="service2" />
                            <div className="overlayServ1">Solid Timber</div>
                        </div>
                        <div className='pt-4 servContainer'>
                            <img src={service3} className="serviceImg1" alt="service3" />
                            <div className="overlayServ2">Hybrid</div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='servContainer'>
                            <img src={service4} className="serviceImg1" alt="service4" />
                            <div className="overlayServ1">Laminate</div>
                        </div>
                        <div className='pt-4 servContainer'>
                            <img src={service5} className="serviceImg1" alt="service5" />
                            <div className="overlayServ2">Engineered</div>
                        </div>
                    </div>
                    <div className='col-md-3 servContainer'>
                        <img src={service6} className="serviceImg" alt="service6" />
                        <div className="overlayServ" style={{ right: "4px" }}>Supply and Installation</div>
                    </div>
                    <div className='pt-5'>
                        <button className='viewServBtn'>VIEW ALL SERVICES</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeService