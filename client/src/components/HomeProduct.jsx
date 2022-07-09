import React, { useState } from 'react';
import homeProduct from '../images/homeProduct.jpg';
import { pressSlider } from './SliderList';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/Home.css';
import HomeService from './HomeService';

function HomeProduct() {
    const [sliderRef, setSliderRef] = useState(null)
    const settings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div>
            <section style={{ backgroundImage: `url(${homeProduct})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
                <div className='container py-5'>
                    <div className='text-center pt-5'>
                        <h2 className='browserH2'>Browse Our Products</h2>
                    </div>
                    <div className='controls'>
                        <button onClick={sliderRef?.slickNext} className="arrowBtn">
                            <FaChevronRight />
                        </button>
                        <button onClick={sliderRef?.slickPrev} className="arrowBtn">
                            <FaChevronLeft />
                        </button>
                    </div>
                    <div className='py-5'>
                        <Slider ref={setSliderRef} {...settings}>
                            {pressSlider.map(obj => {
                                return (
                                    <div className='p-2'>
                                        <div key={obj.id} className="card">
                                            <img src={obj.image} className="imgSlider justify-content-center m-1" alt="product" />
                                            <div className='card-body-title text-center'>
                                                <h4 className='pressText'>{obj.text}</h4>
                                                <div className='slidePressBtn pt-4'>
                                                    <button className='pressBtn'>READ MORE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
            <HomeService />
        </div>
    )
}

export default HomeProduct