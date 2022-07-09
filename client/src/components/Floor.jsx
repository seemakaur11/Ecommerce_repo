import React from 'react';
import '../styles/Service.css';
import homeAbout from '../images/about/homeAbout.jpg';
import service3 from '../images/service/service3.jpg';
import service4 from '../images/service/service4.jpg';
import service5 from '../images/service/service5.jpg';
import service6 from '../images/service/service6.jpg';
import service7 from '../images/service/service7.jpg';
import service8 from '../images/service/service8.jpg';

function Floor() {
    return (
        <div>
            {/* main flooring section */}
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='text-center'><h1 className='aboutTitle'>FLOORING</h1></div>
                </div>
            </section>
            {/* first floor section */}
            <section className='pt-5'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-lg-4 m-0 p-0'>
                            <img src={service3} className='serviceImg3' alt='service3' />
                        </div>
                        <div className='col-lg-8' style={{ backgroundColor: "#f5f5f5" }}>
                            <h2 className='pt-5 mx-5 laminateText'>Laminate Flooring</h2>
                            <p className='laminatePara mx-5 py-3'>Want a wooden effect but not exactly a wooden floor?
                                Then laminate flooring is the one that will meet your
                                standards. Made of synthetic materials that are fused
                                together through a lamination process to simulate a wooden
                                effect, laminate flooring is the best choice if you are looking
                                for easy-to-install and maintain flooring options. From barn, gray,
                                Canyon oak to cherry, they are available in a variety of colors and
                                can be easily customized to meet the overall vibe of your home.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* second floor section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8' style={{ backgroundColor: "black" }}>
                            <h2 className='pt-5 mx-5 laminateText1'>Hybrid Flooring</h2>
                            <p className='laminatePara1 mx-5 py-3'>
                                If you want the best of both worlds for your
                                space then hybrid flooring is your best pick. They
                                are made by combining laminate and vinyl and therefore
                                are extremely hard-wearing and resilient. They are ideal
                                for both commercial and residential spaces as along with
                                a decorative layer that imitates wood, they are resistant
                                to high impact and are waterproof.</p>
                        </div>
                        <div className='col-lg-4 m-0 p-0'>
                            <img src={service4} className='serviceImg3' alt='service4' />
                        </div>
                    </div>
                </div>
            </section>
            {/* third section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 p-0 m-0'>
                            <img src={service5} className='serviceImg3' alt='service5' />
                        </div>
                        <div className='col-lg-8' style={{ backgroundColor: "#f5f5f5" }}>
                            <h2 className='pt-5 mx-5 laminateText'>Engineered Flooring</h2>
                            <p className='laminatePara mx-5 py-3'>if you want the timely effect of wood but want a more
                                durable and easy-to-maintain option for your home or
                                workspace then you can consider engineered wood flooring.
                                They are made of multi-layers of plywood and hardwood and
                                are therefore resistant to normal warping. So, if you wish
                                to bring the classy appearance of wood to your space minus
                                its small drawbacks then engineered flooring is the one that
                                will give you that perfect finish.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* fourth floor section */}
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8' style={{ backgroundColor: "black" }}>
                            <h2 className='pt-5 mx-5 laminateText1'>Solid Timber</h2>
                            <p className='laminatePara1 mx-5 py-3'>
                                When it comes to solid timber flooring there are a
                                plethora of options available and are definitely the
                                most preferred choice for modern structures of all kinds.
                                If you are looking to bring class, elegance, durability,
                                and an old-world charm to your space, then solid timber
                                is your best pick. Depending on the image that you have
                                in mind, you can choose from a number of designs and styles
                                that will lift the aesthetics of your space while staying
                                flawless for years to come.</p>
                        </div>
                        <div className='col-lg-4 m-0 p-0'>
                            <img src={service6} className='serviceImg3' alt='service6' />
                        </div>
                    </div>
                </div>
            </section>
            {/* fifth floor section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 m-0 p-0'>
                            <img src={service7} className='serviceImg3' alt='service7' />
                        </div>
                        <div className='col-lg-8' style={{ backgroundColor: "#f5f5f5" }}>
                            <h2 className='pt-5 mx-5 laminateText'>Parquetry Flooring</h2>
                            <p className='laminatePara mx-5 py-3'>Do you have an eye for hardwood
                                floors arranged in a geometrical pattern? If yes,
                                then parquetry flooring is the one ideal for your space.
                                Bring together the natural touch of wood and the modern
                                touch of geometrical patterns with our parquetry floors.
                                From Canadian, American, and European oak, our flooring
                                comes in all materials of your choice, and from patterns
                                like Chevron, Herringbone, Block, etc., you can choose the
                                one that fits your space.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* sixth floor section */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8' style={{ backgroundColor: "black" }}>
                            <h2 className='pt-5 mx-5 laminateText1'>Chevron Flooring</h2>
                            <p className='laminatePara1 mx-5 py-3'>
                                Chevron Flooring is a beautiful zig-zag floor
                                pattern made of the highest quality timber
                                that naturally stands out and gives your
                                interiors and exteriors a spacious look.
                                They are most popularly used when you wish
                                your small space to look bigger and spacious.
                                So, if that is what you expect from your
                                flooring then chevron flooring is the option
                                that you should consider.</p>
                        </div>
                        <div className='col-lg-4 m-0 p-0'>
                            <img src={service8} className='serviceImg3' alt='service8' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Floor