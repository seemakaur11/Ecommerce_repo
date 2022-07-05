import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../styles/Home.css";
import lam_icon1 from '../images/lam_icon1.png';
import lam_icon2 from '../images/lam_icon2.png'
import lam_icon3 from '../images/lam_icon3.png'
import lam_icon4 from '../images/lam_icon4.png'
import { SliderList } from './SliderList';
import HomeAbout from './HomeAbout';

function Home() {
    return (
        <div>
            <section className='homeSection'>
                <div className='container py-5'>
                    <OwlCarousel items={1} className="owl-theme" loop margin={8} autoplay={true} >
                        {
                            SliderList.map((obj) => {
                                const { id, image, text, link1, link2 } = obj;
                                return (
                                    <div className='row pt-5' key={id}>
                                        <div className='col-md-2'>
                                            <h4 className='sliderText'>{text}</h4>
                                        </div>
                                        <div className='col-md-8'>
                                            <img src={image} alt="slide1" />
                                        </div>
                                        <div className='col-md-2'>
                                            <div>
                                                <h4 className='sliderText'>{link1}</h4>
                                                <h4 className='sliderText11'>{link2}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    <div className='row'>
                        <div className='col-md-3 py-5'>
                            <h3 className='pt-5 popularText'>Popular Categories</h3>
                            <p className='popularPara'>Holistic flooring solutions for all your flooring needs in Australia.</p>
                        </div>
                        <div className='col-md-9'>
                            <div className='row pt-5 '>
                                <div className='col-md-2 m-auto cardImg'>
                                    <img src={lam_icon1} className="lamImg" alt="lam_icon1" />
                                    <h6 className='pt-3 cardTitle'>Laminate Flooring</h6>
                                </div>
                                <div className='col-md-2 m-auto cardImg'>
                                    <img src={lam_icon2} className="lamImg" alt="lam_icon2" />
                                    <h6 className='pt-3 cardTitle'>Hybrid Flooring</h6>
                                </div>
                                <div className='col-md-2 m-auto cardImg'>
                                    <img src={lam_icon3} className="ilamImg" alt="lam_icon3" />
                                    <h6 className='pt-3 cardTitle'>Engineered Flooring</h6>
                                </div>
                                <div className='col-md-2 m-auto cardImg'>
                                    <img src={lam_icon4} className="lamImg" alt="lam_icon4" />
                                    <h6 className='cardTitle'>Solid Timber and Parquetry Flooring</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeAbout />
        </div>

    )
}
export default Home
