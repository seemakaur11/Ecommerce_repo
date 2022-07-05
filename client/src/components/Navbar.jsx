import React from 'react';
import { Link } from "react-scroll";
import logo from '../images/logo.png';

function Navbar() {
    return (
        <section className="">
            <div id="mainContent"></div>
            <nav className="navbar navbar-expand-sm floorGroup">
                <div className="container-fluid">
                    <img src={logo} className="img-fluid ms-3" alt="alt" />
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" id="collapseBtn"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto mb-3 mb-lg-0 mx-5" id="navbarUl">
                            <li className="nav-item m-2">
                                <Link className="nav-link" id="sabLink" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={100}>HOME</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link" id="sabLink" to="about" spy={true} smooth={true} offset={-100} duration={100}>ABOUT US</Link>
                            </li>
                            <li className="nav-item dropdown m-2">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="sabLink" to="services" spy={true} smooth={true} offset={-100} duration={100}>SERVICES</Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/" >Flooring</a></li>
                                    <li><a className="dropdown-item" href="/" >Supply And Installation</a></li>
                                </ul>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link" id="sabLink" to="specials" spy={true} smooth={true} offset={-100} duration={100}>PRODUCTS</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link" id="sabLink" to="events" spy={true} smooth={true} offset={-100} duration={100}>GALLERY</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link" id="sabLink" activeClass="active" to="chefs" spy={true} smooth={true} offset={-100} duration={100}>CONTACT US</Link>
                            </li>
                        </ul>
                        <div className='searchCollapse'>
                            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                <input className="card card-body" type="text" placeholder="Search" id="searchInput" />
                            </div>
                        </div>
                        <i className="fa-solid fa-magnifying-glass mx-3" id="seacrh_icon" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"></i>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar