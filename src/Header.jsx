import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="top-info text-center text-md-left">
                                <li><i className="fas fa-map-marker-alt" />
                                    <p className="info-text">9051 Constra Incorporate, USA</p>
                                </li>
                            </ul>
                        </div>
                        {/*/ Top info end */}
                        <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                            <ul className="list-unstyled">
                                <li>
                                    <a title="Facebook" href="https://facebbok.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-facebook-f" /></span>
                                    </a>
                                    <a title="Twitter" href="https://twitter.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-twitter" /></span>
                                    </a>
                                    <a title="Instagram" href="https://instagram.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-instagram" /></span>
                                    </a>
                                    <a title="Linkdin" href="https://github.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-github" /></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*/ Top social end */}
                    </div>
                    {/*/ Content row end */}
                </div>
                {/*/ Container end */}
            </div>
            <header id="header" className="header-one">
                <div className="bg-white">
                    <div className="container">
                        <div className="logo-area">
                            <div className="row align-items-center">
                                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                    <a className="d-block" href="index-2.html">
                                        <img loading="lazy" src="images/logo.png" alt="Constra" />
                                    </a>
                                </div>{/* logo end */}
                                <div className="col-lg-9 header-right">
                                    <ul className="top-info-box">
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Call Us</p>
                                                    <p className="info-box-subtitle"><a href="tel:(+9) 847-291-4353">(+9) 847-291-4353</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Email Us</p>
                                                    <p className="info-box-subtitle"><a href="mailto:office@Constra.com">office@Constra.com</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="last">
                                            <div className="info-box last">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Global Certificate</p>
                                                    <p className="info-box-subtitle">ISO 9001:2017</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-get-a-quote">
                                            <a className="btn btn-primary" href="contact.html">Get A Quote</a>
                                        </li>
                                    </ul>{/* Ul end */}
                                </div>{/* header right end */}
                            </div>{/* logo area end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>
                <div className="site-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div id="navbar-collapse" className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav mr-auto">
                                            <li className="nav-item dropdown">
                                                <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Home</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down" /></a>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/team">Our Team</Link></li>
                                                    <li><Link to="/testimonial">Testimonials</Link></li>
                                                    <li><Link to="/faq">Faq</Link></li>
                                                    {/* <li><Link to="pricing.html">Pricing</Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="/projects" className="nav-link dropdown-toggle" data-toggle="dropdown">Projects</Link>
                                                {/* <ul className="dropdown-menu" role="menu">
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="projects-single.html">Projects Single</a></li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="/services" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</Link>
                                                {/* <ul className="dropdown-menu" role="menu">
                                                    <li><a href="services.html">Services All</a></li>
                                                    <li><a href="service-single.html">Services Single</a></li>
                                                </ul> */}
                                            </li>
                                            {/* <li className="nav-item dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down" /></a>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="typography.html">Typography</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                    <li className="dropdown-submenu">
                                                        <a href="#!" className="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#!">Child Menu 1</a></li>
                                                            <li><a href="#!">Child Menu 2</a></li>
                                                            <li><a href="#!">Child Menu 3</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li className="nav-item dropdown">
                                                <Link to="/news" className="nav-link dropdown-toggle" data-toggle="dropdown">News</Link>
                                                {/* <ul className="dropdown-menu" role="menu">
                                                    <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                                                    <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                                                    <li><a href="news-single.html">News Single</a></li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact_US</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/*/ Col end */}
                        </div>
                        {/*/ Row end */}
                        <div className="nav-search">
                            <span id="search"><i className="fa fa-search" /></span>
                        </div>{/* Search end */}
                        <div className="search-block" style={{ display: 'none' }}>
                            <label htmlFor="search-field" className="w-100 mb-0">
                                <input type="text" className="form-control" id="search-field" placeholder="Type what you want and enter" />
                            </label>
                            <span className="search-close">×</span>
                        </div>{/* Site search end */}
                    </div>
                    {/*/ Container end */}
                </div>
                {/*/ Navigation end */}
            </header>


        </>
    );
};