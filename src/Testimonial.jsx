import React from "react";

export const Testimonial = () => {
    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(images/banner/team-page-title-bg.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Testimonials</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>{/* Banner text end */}
            </div>{/* Banner area end */}

            <section id="main-container" className="main-container">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h3 className="section-sub-title mb-4">What People Said</h3>
                        </div>
                    </div>
                    {/*/ Title row end */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="quote-item quote-border mt-5">
                                <div className="quote-text-border">
                                    "The Maritime Education Center has transformed my career. The hands-on training and real-world insights were invaluable."
                                </div>
                                <div className="quote-item-footer">
                                    <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial1.png" alt="testimonial" />
                                    <div className="quote-item-info">
                                        <h3 className="quote-author">Gabriel Denis</h3>
                                        <span className="quote-subtext">Marine Engineer, Global Shipping Co.</span>
                                    </div>
                                </div>
                            </div>{/* Quote item end */}
                        </div>{/* End col md 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="quote-item quote-border mt-5">
                                <div className="quote-text-border">
                                    "The instructors are industry leaders, and the facilities are world-class. I gained skills that gave me a competitive edge."
                                </div>
                                <div className="quote-item-footer">
                                    <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial2.png" alt="testimonial" />
                                    <div className="quote-item-info">
                                        <h3 className="quote-author">Weldon Cash</h3>
                                        <span className="quote-subtext">Captain, Oceanic Ventures</span>
                                    </div>
                                </div>
                            </div>{/* Quote item end */}
                        </div>{/* End col md 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="quote-item quote-border mt-5">
                                <div className="quote-text-border">
                                    "This program prepared me for every challenge in the maritime industry. I recommend it to anyone aspiring to excel in this field."
                                </div>
                                <div className="quote-item-footer">
                                    <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial3.png" alt="testimonial" />
                                    <div className="quote-item-info">
                                        <h3 className="quote-author">Hyram Izzy</h3>
                                        <span className="quote-subtext">Director, AKT Maritime Group</span>
                                    </div>
                                </div>
                            </div>{/* Quote item end */}
                        </div>{/* End col md 4 */}
                    </div>
                    {/* Content row end */}
                </div>{/* Container end */}
            </section>{/* Main container end */}


        </>

    );
};