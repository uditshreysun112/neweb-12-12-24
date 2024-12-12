import React from "react";

export const About = () => {
    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(images/banner/team-page-title-bg.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">About</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>{/* Banner text end */}
            </div>{/* Banner area end */}
            <div>
                <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="column-title">Who We Are</h3>
                                <p>Welcome to our Maritime Education &amp; Training Center, where we provide world-class training for individuals pursuing careers in the maritime industry. Our programs are designed to equip students with the knowledge and skills necessary to succeed in a rapidly evolving field.</p>
                                <blockquote>
                                    <p>Our mission is to deliver high-quality, industry-relevant maritime education, ensuring that every student becomes a skilled and competent professional ready to meet global standards.</p>
                                </blockquote>
                            </div>{/* Col end */}
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div id="page-slider" className="page-slider small-bg">
                                    <div className="item" style={{ backgroundImage: 'url(images/slider-pages/leadership-img.jpg)' }}>
                                        <div className="container">
                                            <div className="box-slider-content">
                                                <div className="box-slider-text">
                                                    <h2 className="box-slide-title">Leadership</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* Item 1 end */}
                                    <div className="item" style={{ backgroundImage: 'url(images/slider-pages/business6.jpg)' }}>
                                        <div className="container">
                                            <div className="box-slider-content">
                                                <div className="box-slider-text">
                                                    <h2 className="box-slide-title">Relationships</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* Item 1 end */}
                                    <div className="item" style={{ backgroundImage: 'url(images/slider-pages/performance-img.png)' }}>
                                        <div className="container">
                                            <div className="box-slider-content">
                                                <div className="box-slider-text">
                                                    <h2 className="box-slide-title">Performance</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* Item 1 end */}
                                </div>{/* Page slider end*/}
                            </div>{/* Col end */}
                        </div>{/* Content row end */}
                    </div>{/* Container end */}
                </section>{/* Main container end */}
                {/* Facts start */}
                <section id="facts" className="facts-area" style={{ backgroundColor: 'rgb(89, 90, 99)' }}>
                    <div className="container">
                        <div className="facts-wrapper">
                            <div className="row">
                                {/* Fact 1 */}
                                <div className="col-md-3 col-sm-6 ts-facts">
                                    <div className="ts-facts-img">
                                        <img loading="lazy" style={{ height: 100 }} src="images/icon-image/maritime-graduates-removebg-preview.png" alt="facts-img" />
                                    </div>
                                    <div className="ts-facts-content">
                                        <h2 className="ts-facts-num"><span className="counterUp" data-count={2000}>0</span></h2>
                                        <h3 className="ts-facts-title">Graduates Trained</h3>
                                    </div>
                                </div>{/* Col end */}
                                {/* Fact 2 */}
                                <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                                    <div className="ts-facts-img">
                                        <img loading="lazy" style={{ height: 100 }} src="images/icon-image/maritime-staff-removebg-preview.png" alt="facts-img" />
                                    </div>
                                    <div className="ts-facts-content">
                                        <h2 className="ts-facts-num"><span className="counterUp" data-count={150}>0</span></h2>
                                        <h3 className="ts-facts-title">Certified Trainers</h3>
                                    </div>
                                </div>{/* Col end */}
                                {/* Fact 3 */}
                                <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                    <div className="ts-facts-img">
                                        <img loading="lazy" style={{ height: 100 }} src="images/icon-image/maritime-courses.png" alt="facts-img" />
                                    </div>
                                    <div className="ts-facts-content">
                                        <h2 className="ts-facts-num"><span className="counterUp" data-count={50}>0</span></h2>
                                        <h3 className="ts-facts-title">Programs Offered</h3>
                                    </div>
                                </div>{/* Col end */}
                                {/* Fact 4 */}
                                <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                    <div className="ts-facts-img">
                                        <img loading="lazy" style={{ height: 100 }} src="images/icon-image/maritime-network-removebg-preview.png" alt="facts-img" />
                                    </div>
                                    <div className="ts-facts-content">
                                        <h2 className="ts-facts-num"><span className="counterUp" data-count={30}>0</span></h2>
                                        <h3 className="ts-facts-title">Partner Institutions</h3>
                                    </div>
                                </div>{/* Col end */}
                            </div> {/* Facts end */}
                        </div>
                        {/*/ Content row end */}
                    </div>
                    {/*/ Container end */}
                </section>
                {/* Facts end */}
                <section id="ts-team" className="ts-team">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <h2 className="section-title">Quality Service</h2>
                                <h3 className="section-sub-title">Professional Team</h3>
                            </div>
                        </div>{/*/ Title row end */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="team-slide" className="team-slide">
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team1.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Nats Stenman</h3>
                                                <p className="ts-designation">Chief Operating Officer</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 1 end */}
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team2.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Angela Lyouer</h3>
                                                <p className="ts-designation">Innovation Officer</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 2 end */}
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team3.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Mark Conter</h3>
                                                <p className="ts-designation">Safety Officer</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 3 end */}
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team4.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Ayesha Stewart</h3>
                                                <p className="ts-designation">Finance Officer</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 4 end */}
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team5.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Dave Clarkte</h3>
                                                <p className="ts-designation">Civil Engineer</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 5 end */}
                                    <div className="item">
                                        <div className="ts-team-wrapper">
                                            <div className="team-img-wrapper">
                                                <img loading="lazy" className="w-100" src="images/team/team6.jpg" alt="team-img" />
                                            </div>
                                            <div className="ts-team-content">
                                                <h3 className="ts-name">Elton Joe</h3>
                                                <p className="ts-designation">Site Supervisor</p>
                                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                                <div className="team-social-icons">
                                                    <a target="_blank" href="#"><i className="fab fa-facebook-f" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-google-plus" /></a>
                                                    <a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
                                                </div>{/*/ social-icons*/}
                                            </div>
                                        </div>{/*/ Team wrapper end */}
                                    </div>{/* Team 6 end */}
                                </div>{/* Team slide end */}
                            </div>
                        </div>{/*/ Content row end */}
                    </div>{/*/ Container end */}
                </section>{/*/ Team end */}
            </div>

        </>
    );
};