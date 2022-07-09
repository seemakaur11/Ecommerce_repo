import React from 'react';
import floorChoose from '../images/floorChoose.jpg';
import HomeProduct from './HomeProduct';
import '../styles/Home.css';

function HomeFloor() {
    return (
        <section>
            <div className='container py-5'>
                <div className='row text-center pt-5'>
                    <h2 className='pt-5 HomeFloorText'>Why Choose Us As Your Flooring Company In Australia?</h2>
                </div>
                <div className='row pt-5 text-center'>
                    <div className='col-lg-3'>
                        <span className='homeFloorPara'><span className="spanText">1</span> We offer diverse flooring options to satisfy both your aesthetic and functional priorities.</span>
                        <span className='homeFloorPara pt-4'><span className="spanText">2</span>We prioritize durability and efficiency over everything else and therefore always offer flooring options of the highest quality.</span>
                        <span className='homeFloorPara pt-4'><span className="spanText">3</span>Timber, laminate, hybrid, or engineered whatever is the style that you had in mind, we offer a diverse selection in them all.</span>
                    </div>
                    <div className='col-lg-6'>
                        <img src={floorChoose} className="img-fluid" alt="floor-choose" />
                        <span className='homeFloorPara pt-5'><span className="spanText">4</span>The flooring services that we offer are holistic. You will find your choice of flooring with us and get expert help with the installation process and remodeling services for all your floors in need of an upgrade.</span>
                    </div>
                    <div className='col-lg-3'>
                        <span className='homeFloorPara'><span className="spanText">7</span> We offer diverse flooring options to satisfy both your aesthetic and functional priorities.</span>
                        <span className='homeFloorPara pt-4'><span className="spanText">6</span>We prioritize durability and efficiency over everything else and therefore always offer flooring options of the highest quality.</span>
                        <span className='homeFloorPara pt-4'><span className="spanText">5</span>Timber, laminate, hybrid, or engineered whatever is the style that you had in mind, we offer a diverse selection in them all.</span>
                    </div>
                </div>
            </div>
            <HomeProduct />
        </section>
    )
}

export default HomeFloor
