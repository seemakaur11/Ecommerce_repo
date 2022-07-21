import React from 'react';
import '../styles/Gallery.css';
import homeAbout from '../images/about/homeAbout.jpg';
import { galleryList } from './GalleryList';

function Gallery() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='row text-center'>
                        <h1 className='galleryTitle'>GALLERY</h1>
                    </div>
                </div>
            </section>
            <div className='container py-5'>
                <div className='row pt-5'>
                    {galleryList.map((obj) => {
                        const { image, id } = obj;
                        return (
                            <div className='col-lg-4 p-2' key={id}>
                                <img src={image} className="img-fluid" alt="gallery" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Gallery

