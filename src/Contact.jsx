import React from "react";

export const Contact = () => {
    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(images/banner/city-bg.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Contact</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>{/* Banner text end */}
            </div>
            {/* Banner area end */}

            <section id="main-container" className="main-container "  >
                <div className="container" >
                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className="section-title">Reaching our Office</h2>
                            <h3 className="section-sub-title">Find Our Location</h3>
                        </div>
                    </div>
                    {/*/ Title row end */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fas fa-map-marker-alt mr-0" />
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Visit Our Office</h4>
                                    <p>9051 Constra Incorporate, USA</p>
                                </div>
                            </div>
                        </div>{/* Col 1 end */}
                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fa fa-envelope mr-0" />
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Email Us</h4>
                                    <p>office@Constra.com</p>
                                </div>
                            </div>
                        </div>{/* Col 2 end */}
                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fa fa-phone-square mr-0" />
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Call Us</h4>
                                    <p>(+9) 847-291-4353</p>
                                </div>
                            </div>
                        </div>{/* Col 3 end */}
                    </div>{/* 1st row end */}
                    <div className="gap-60" />
                    <div className="google-map">
                        {/* <div id="map" className="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png" data-marker-name="Constra" /> */}
                    </div>
                    <div className="gap-40" />
                    <div className="row">
                        <div className="col-md-12 p-5" style={{ backgroundColor: "#212121" }}>
                            <h3 className="column-title text-light">We love to hear</h3>
                            {/* contact form works with formspree.io  */}
                            {/* contact form activation doc: https://docs.themefisher.com/constra/contact-form/ */}
                            <form id="contact-form" action="#" method="post" role="form">
                                <div className="error-container" />
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label style={{ color: "white" }}>Name</label>
                                            <input className="form-control form-control-name" name="name" id="name" placeholder type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label style={{ color: "white" }}>Email</label>
                                            <input className="form-control form-control-email" name="email" id="email" placeholder type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label style={{ color: "white" }} >Subject</label>
                                            <input className="form-control form-control-subject" name="subject" id="subject" placeholder required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={{ color: "white" }}>Message</label>
                                    <textarea className="form-control form-control-message" name="message" id="message" placeholder rows={10} required defaultValue={""} />
                                </div>
                                <div className="text-right"><br />
                                    <button className="btn btn-primary solid blank" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>{/* Content row */}
                </div>{/* Conatiner end */}
            </section>
            {/* Main container end */}

        </>
    );
};