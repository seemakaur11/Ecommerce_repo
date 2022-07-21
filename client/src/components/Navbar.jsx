import React from 'react';
// import { Link } from "react-scroll";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

function Navbar({ auth: { isAuthenticated, loading }, logout }) {

    const authLinks = (
        <nav className="navbar navbar-expand-sm floorGroup p-3">
            <div className="container-fluid">
                <img src={logo} className="img-fluid mx-3" alt="alt" />
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" id="collapseBtn"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-3" id="navbarUl">
                        <li className="nav-item m-2">
                            <Link to='/' className="nav-link" id="sabLink" >HOME</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/about-us' className="nav-link" id="sabLink">ABOUT US</Link>
                        </li>
                        <div className="nav-item dropdown">
                            <Link to='/services' className="nav-link pt-3" id="sabLink">SERVICES</Link>
                            <div className="dropdown-content">
                                <a href="/flooring" className="dropdown-item">Flooring</a>
                                <a href="/supply-and-installation" className="dropdown-item">Supply And Installation</a>
                            </div>
                        </div>

                        <div className='nav-item dropdown'>
                            <Link to="/products" className="nav-link pt-3" id="sabLink">PRODUCTS</Link>
                            <div className="dropdown-content">
                                <a href="/laminate" className="dropdown-item">Laminate</a>
                                <a href="/hybrid" className="dropdown-item">Hybrid</a>
                                <a href="/engineered-flooring" className="dropdown-item">Engineered Flooring</a>
                                <a href="/parquetry-flooring" className="dropdown-item">Parquetry Flooring</a>
                            </div>
                        </div>
                        {/* <li className="nav-item m-2">
                            <Link to="/products" className="nav-link" id="sabLink">PRODUCTS</Link>
                        </li> */}
                        <li className="nav-item m-2">
                            <Link to='/gallery' className="nav-link" id="sabLink" >GALLERY</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/contact-us' className="nav-link" id="sabLink" >CONTACT US</Link>
                        </li>
                    </ul>
                </div>
                <div className='searchCollapse'>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <input className="card card-body" type="text" placeholder="Search" id="searchInput" />
                    </div>
                </div>
                <i className="fa-solid fa-magnifying-glass mx-3" id="seacrh_icon" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"></i>
                <div className='p-2'>
                    <a onClick={logout} href="/" className='logoutA'>
                        <i className='fas fa-sign-out-alt logoutIcon'></i>{' '}
                        <span className='hide-sm logoutBtn'>Logout</span></a>
                </div>
            </div>
        </nav>
    );
    const guestLinks = (
        <nav className="navbar navbar-expand-sm floorGroup p-3">
            <div className="container-fluid">
                <img src={logo} className="img-fluid mx-3" alt="alt" />
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" id="collapseBtn"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-4" id="navbarUl">
                        <li className="nav-item m-2">
                            <Link to='/' className="nav-link" id="sabLink" >HOME</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/about-us' className="nav-link" id="sabLink">ABOUT US</Link>
                        </li>
                        <div class="nav-item dropdown">
                            <Link to='/services' className="nav-link pt-3" id="sabLink">SERVICES</Link>
                            <div class="dropdown-content">
                                <a href="/flooring" className="dropdown-item">Flooring</a>
                                <a href="/supply-and-installation" className="dropdown-item">Supply And Installation</a>
                            </div>
                        </div>
                        <div className='nav-item dropdown'>
                            <Link to="/products" className="nav-link pt-3" id="sabLink">PRODUCTS</Link>
                            <div className="dropdown-content">
                                <a href="/laminate" className="dropdown-item">Laminate</a>
                                <a href="/hybrid" className="dropdown-item">Hybrid</a>
                                <a href="/engineered-flooring" className="dropdown-item">Engineered Flooring</a>
                                <a href="/parquetry-flooring" className="dropdown-item">Parquetry Flooring</a>
                            </div>
                        </div>
                        {/* <li className="nav-item m-2">
                            <Link to="/products" className="nav-link" id="sabLink">PRODUCTS</Link>
                        </li> */}
                        <li className="nav-item m-2">
                            <Link to='/gallery' className="nav-link" id="sabLink" >GALLERY</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/contact-us' className="nav-link" id="sabLink" >CONTACT US</Link>
                        </li>
                    </ul>
                </div>
                <div className='searchCollapse'>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <input className="card card-body" type="text" placeholder="Search" id="searchInput" />
                    </div>
                </div>
                <div className='searchIcon'>
                    <i className="fa-solid fa-magnifying-glass p-3" id="seacrh_icon" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"></i>
                    <i className="fa-solid fa-user userIcon"></i><Link to='/login' className='signLink p-3'>Login</Link>
                </div>
            </div>
        </nav>
    )
    return (
        <section className="">
            <div id="mainContent"></div>
            {!loading && (
                <div>{isAuthenticated ? authLinks : guestLinks}</div>
            )}
        </section>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);