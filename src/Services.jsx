import React from "react";

export const Services = () => {
    return (
        <>
        <div id="banner-area" className="banner-area" style={{backgroundImage: 'url(images/boat-3480914_1920.jpg)'}}>
        <div className="banner-text">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="banner-heading">
                    <h1 className="banner-title">Service</h1>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Services</a></li>
                        <li className="breadcrumb-item active" aria-current="page">All Services</li>
                    </ol>
                    </nav>
                </div>
                </div>{/* Col end */}
            </div>{/* Row end */}
            </div>{/* Container end */}
        </div>{/* Banner text end */}
        </div>
        {/* Banner area end */}


        <section id="main-container" className="main-container pb-2">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">Comprehensive Maritime Training</a></h3>
                    <p>Empower yourself with industry-leading courses covering navigation, safety protocols, and advanced maritime technologies to excel at sea.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">State-of-the-Art Simulations</a></h3>
                    <p>Experience hands-on learning with our cutting-edge simulators designed to replicate real-life maritime scenarios for enhanced skills.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">Safety and Survival Training</a></h3>
                    <p>Master essential safety techniques and survival skills to navigate challenging maritime conditions confidently and effectively.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">Leadership &amp; Crew Management</a></h3>
                    <p>Build leadership and teamwork skills essential for efficient crew management and successful maritime operations.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">Advanced Navigation Techniques</a></h3>
                    <p>Learn modern navigation strategies, including electronic charting systems and radar usage, for safer maritime travel.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                    <img loading="lazy" className="w-100" src="images/services/Happy mariner- Main image.png" alt="maritime-education" />
                </div>
                <div className="d-flex">
                    <div className="ts-service-info">
                    <h3 className="service-box-title"><a href="service-single.html">Regulatory Compliance &amp; Certifications</a></h3>
                    <p>Stay updated with international maritime regulations and achieve globally recognized certifications for career advancement.</p>
                    <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right" /> Learn more</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        </>
    );
};