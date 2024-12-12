import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer bg-overlay">
                <div className="footer-main">
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* About Us Section */}
                            <div className="col-lg-4 col-md-6 footer-widget footer-about">
                                <h3 className="widget-title">About Us</h3>
                                <img loading="lazy" width="200px" className="footer-logo" src="images/footer-logo.png" alt="Maritime Center" />
                                <p>At our Maritime Education and Training Center, we are dedicated to fostering excellence in maritime
                                    skills and knowledge. Our programs prepare the next generation of seafarers and maritime professionals
                                    with industry-leading training.</p>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="https://facebook.com/maritimecenter" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="https://twitter.com/maritimecenter" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="https://instagram.com/maritimecenter" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="https://linkedin.com/company/maritimecenter" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a></li>
                                    </ul>
                                </div>{/* Footer social end */}
                            </div>{/* Col end */}
                            {/* Working Hours Section */}
                            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                                <h3 className="widget-title">Working Hours</h3>
                                <div className="working-hours">
                                    We are open 7 days a week to ensure our trainees have flexible access to courses and facilities.
                                    <br /><br /> Monday - Friday: <span className="text-right">08:00 - 18:00</span>
                                    <br /> Saturday: <span className="text-right">09:00 - 14:00</span>
                                    <br /> Sunday and holidays: <span className="text-right">10:00 - 13:00</span>
                                </div>
                            </div>{/* Col end */}
                            {/* Services Section */}
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                                <h3 className="widget-title">Programs and Services</h3>
                                <ul className="list-arrow">
                                    <li><a href="service-single.html">Maritime Safety Training</a></li>
                                    <li><a href="service-single.html">Navigation and Seamanship</a></li>
                                    <li><a href="service-single.html">Engine Room Operations</a></li>
                                    <li><a href="service-single.html">Port and Logistics Management</a></li>
                                    <li><a href="service-single.html">Certification and Licensing</a></li>
                                </ul>
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>{/* Footer main end */}
                {/* Copyright Section */}
                <div className="copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="copyright-info text-center text-md-left">
                                    <span>Copyright ©
                                        , Designed &amp; Developed by Maritime Education Center
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-menu text-center text-md-right">
                                    <ul className="list-unstyled">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/team">Our Team</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/news">News</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* Row end */}
                        <div id="back-to-top" data-spy="affix" data-offset-top={10} className="back-to-top position-fixed">
                            <button className="btn btn-primary" title="Back to Top">
                                <i className="fa fa-angle-double-up" />
                            </button>
                        </div>
                    </div>{/* Container end */}
                </div>{/* Copyright end */}
            </footer>
        </>
    );
};