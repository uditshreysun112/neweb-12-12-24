import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Home = () => {

    return (
        <>
            <div class="body-inner">
                <div className="banner-carousel banner-carousel-1 mb-0">
                    {/* Slide 1 */}
                    <div className="banner-carousel-item" style={{ backgroundImage: 'url(images/superyattch-bg.jpg)' }}>
                        <div className="slider-content">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12 text-center">
                                        <h2 className="slide-title" data-animation-in="slideInLeft">Empowering Maritime Leaders</h2>
                                        <h3 className="slide-sub-title" data-animation-in="slideInRight">Through Excellence in Education</h3>
                                        <p data-animation-in="slideInLeft" data-duration-in="1.2">
                                            <a href="programs.html" className="slider btn btn-primary">Our Programs</a>
                                            <a href="admissions.html" className="slider btn btn-primary border">Join Us</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="banner-carousel-item" style={{ backgroundImage: 'url(images/boat-3480914_1920.jpg)' }}>
                        <div className="slider-content text-left">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12">
                                        <h2 className="slide-title-box" data-animation-in="slideInDown">State-of-the-Art Training</h2>
                                        <h3 className="slide-title text-dark" data-animation-in="fadeIn">For Future Seafarers</h3>
                                        <h3 className="slide-sub-title" style={{ color: 'black' }} data-animation-in="slideInLeft">Your Career Begins
                                            Here</h3>
                                        <p data-animation-in="slideInRight">
                                            <a href="training.html" className="slider-2 btn btn-primary border">Explore Training</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="banner-carousel-item" style={{ backgroundImage: 'url(images/supplyship.jpg)' }}>
                        <div className="slider-content text-right">
                            <div className="container h-100">
                                <div className="row align-items-center h-100">
                                    <div className="col-md-12">
                                        <h2 className="slide-title" data-animation-in="slideInDown">Meet Our Instructors</h2>
                                        <h3 className="slide-sub-title" data-animation-in="fadeIn">Shaping the Future of Maritime Industry</h3>
                                        <p className="slider-description lead" data-animation-in="slideInRight">Join us to master the skills needed
                                            for success at sea and beyond.</p>
                                        <div data-animation-in="slideInLeft">
                                            <a href="contact.html" className="slider btn btn-primary" aria-label="contact-with-us">Contact Us</a>
                                            <a href="about.html" className="slider btn btn-primary border" aria-label="learn-more-about-us">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="call-to-action-box no-padding">
                    <div className="container">
                        <div className="action-style-box">
                            <div className="row align-items-center">
                                <div className="col-md-8 text-center text-md-left">
                                    <div className="call-to-action-text">
                                        <h3 className="action-title">We understand your needs on Marine Industry</h3>
                                    </div>
                                </div>{/* Col end */}
                                <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                                    <div className="call-to-action-btn">
                                        <a className="btn btn-dark" href="#">Request Quote</a>
                                    </div>
                                </div>{/* col end */}
                            </div>{/* row end */}
                        </div>{/* Action style box */}
                    </div>{/* Container end */}
                </section>

                <section id="ts-features" className="ts-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ts-intro">
                                    <h2 className="into-title">About Us</h2>
                                    <h3 className="into-sub-title">Empowering Maritime Excellence</h3>
                                    <p>As a leading Maritime Education and Training Center, we are committed to providing world-class training
                                        programs and facilities to shape the future of the maritime industry. We empower students with the
                                        skills and knowledge required for a successful career at sea and beyond.</p>
                                </div>{/* Intro box end */}
                                <div className="gap-20" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-trophy" />
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">Excellence in Training</h3>
                                            </div>
                                        </div>{/* Service 1 end */}
                                    </div>{/* col end */}
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-sliders-h" />
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">Building Global Partnerships</h3>
                                            </div>
                                        </div>{/* Service 2 end */}
                                    </div>{/* col end */}
                                </div>{/* Content row 1 end */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-thumbs-up" />
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">Commitment to Quality</h3>
                                            </div>
                                        </div>{/* Service 1 end */}
                                    </div>{/* col end */}
                                    <div className="col-md-6">
                                        <div className="ts-service-box">
                                            <span className="ts-service-icon">
                                                <i className="fas fa-users" />
                                            </span>
                                            <div className="ts-service-box-content">
                                                <h3 className="service-box-title">Team of Maritime Experts</h3>
                                            </div>
                                        </div>{/* Service 2 end */}
                                    </div>{/* col end */}
                                </div>{/* Content row 1 end */}
                            </div>{/* Col end */}
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <h3 className="into-sub-title">Our Values</h3>
                                <p>We are guided by values that ensure excellence, safety, and integrity in maritime education and training.
                                </p>
                                <div className="accordion accordion-group" id="our-values-accordion">
                                    <div className="card">
                                        <div className="card-header p-0 bg-transparent" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Safety
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                                            <div className="card-body">
                                                Safety is our utmost priority in all our training programs and operations, ensuring our students and
                                                staff are prepared for real-world challenges.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header p-0 bg-transparent" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Customer Service
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                                            <div className="card-body">
                                                We prioritize the needs of our students and partners, providing comprehensive support and customized
                                                training solutions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header p-0 bg-transparent" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Integrity
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                                            <div className="card-body">
                                                We uphold the highest ethical standards, ensuring transparency and fairness in all our interactions
                                                and services.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/ Accordion end */}
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </section>
                {/* Feature are end */}

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


                <section id="ts-service-area" className="ts-service-area pb-0">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h2 className="section-title">We Are Specialists In</h2>
                                <h3 className="section-sub-title">What We Do</h3>
                            </div>
                        </div>
                        {/*/ Title row end */}
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        {/* <div class=""><i id="icon" class="fa fa-ship" style="color: #f57813;"></i></div> */}
                                        <i className="fa fa-ship" style={{ color: '#f57813', fontSize: 30 }} />
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Maritime Navigation Training</a></h3>
                                        <p>Learn advanced navigation techniques, chart plotting, and route optimization to
                                            master the art of safe and efficient maritime travel.</p>
                                    </div>
                                </div>{/* Service 1 end */}
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <div className="icon flex-shrink-0"><i className="bi bi-globe" style={{ color: '#15a04a', fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Global Maritime Logistics</a></h3>
                                        <p>Understand the complexities of global trade, shipping logistics, and supply chain
                                            management to excel in the maritime industry.</p>
                                    </div>
                                </div>{/* Service 2 end */}
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <div className="icon flex-shrink-0"><i className="bi bi-compass" style={{ color: '#d90769', fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Marine Safety and Emergency Training</a></h3>
                                        <p>Gain critical skills in maritime safety, including emergency response, crisis
                                            management, and lifesaving procedures.</p>
                                    </div>
                                </div>{/* Service 3 end */}
                            </div>{/* Col end */}
                            <div className="col-lg-4 text-center">
                                <img loading="lazy" className="img-fluid" style={{ height: '80vh', width: '60vh' }} src="images/services/navy-man-21-removebg-preview.png" alt="service-avater-image" />
                            </div>{/* Col end */}
                            <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <div className="icon flex-shrink-0"><i className="bi bi-sunset " style={{ color: '#15bfbc', fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Sustainability in Maritime Operations</a></h3>
                                        <p>Learn about eco-friendly practices and technologies that help minimize
                                            environmental impact in the maritime sector.</p>
                                    </div>
                                </div>{/* Service 4 end */}
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <div className="icon flex-shrink-0"><i className="bi bi-people" style={{ color: '#f5cf13', fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Leadership and Crew Management</a></h3>
                                        <p>Develop essential leadership skills to effectively manage ship crews and foster a
                                            safe, productive onboard environment.</p>
                                    </div>
                                </div>{/* Service 5 end */}
                                <div className="ts-service-box d-flex">
                                    <div className="ts-service-box-img">
                                        <div className="icon flex-shrink-0"><i className="bi bi-gear" style={{ color: '#1335f5', fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <div className="ts-service-box-info">
                                        <h3 className="service-box-title"><a href="#">Marine Engineering and Technology</a></h3>
                                        <p>Dive into the world of marine engineering and learn about the latest technologies
                                            driving inMaritime Educationtion in the maritime industry.</p>
                                    </div>
                                </div>{/* Service 6 end */}
                            </div>{/* Col end */}
                        </div>{/* Content row end */}
                    </div>
                    {/*/ Container end */}
                </section>{/* Service end */}


                <section id="project-area" className="project-area solid-bg">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <h2 className="section-title">Boost Your Career</h2>
                                <h3 className="section-sub-title">OUR COURSES</h3>
                            </div>
                        </div>
                        {/*/ Title row end */}
                        <div className="row">
                            <div className="col-12">
                                <div className="shuffle-btn-group">
                                    <label className="active" htmlFor="all">
                                        <input type="radio" name="shuffle-filter" id="all" defaultValue="all" defaultChecked="checked" />Show All
                                    </label>
                                    <label htmlFor="commercial">
                                        <input type="radio" name="shuffle-filter" id="commercial" defaultValue="commercial" />Commercial
                                    </label>
                                    <label htmlFor="education">
                                        <input type="radio" name="shuffle-filter" id="education" defaultValue="education" />Education
                                    </label>
                                    <label htmlFor="government">
                                        <input type="radio" name="shuffle-filter" id="government" defaultValue="government" />Government
                                    </label>
                                    <label htmlFor="infrastructure">
                                        <input type="radio" name="shuffle-filter" id="infrastructure" defaultValue="infrastructure" />Infrastructure
                                    </label>
                                    <label htmlFor="residential">
                                        <input type="radio" name="shuffle-filter" id="residential" defaultValue="residential" />Residential
                                    </label>
                                    <label htmlFor="healthcare">
                                        <input type="radio" name="shuffle-filter" id="healthcare" defaultValue="healthcare" />Healthcare
                                    </label>
                                </div>{/* project filter end */}
                                <div className="row shuffle-wrapper">
                                    <div className="col-1 shuffle-sizer" />
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/BE.jpg" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250 }} src="images/projects/BE.jpg" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">Capital Teltway Building</a>
                                                    </h3>
                                                    <p className="project-cat">Commercial, Interiors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 1 end */}
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/BSC.jpg" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250 }} src="images/projects/BSC.jpg" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">Ghum Touch Hospital</a>
                                                    </h3>
                                                    <p className="project-cat">Healthcare</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 2 end */}
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/chef-5993951_1280.jpg" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250, width: '100%' }} src="images/projects/chef-5993951_1280.jpg" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">TNT East Facility</a>
                                                    </h3>
                                                    <p className="project-cat">Government</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 3 end */}
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/DNS.webp" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250 }} src="images/projects/DNS.webp" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">Narriot Headquarters</a>
                                                    </h3>
                                                    <p className="project-cat">Infrastructure</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 4 end */}
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/ETO.jpeg" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250 }} src="images/projects/ETO.jpeg" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">Kalas Metrorail</a>
                                                    </h3>
                                                    <p className="project-cat">Infrastructure</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 5 end */}
                                    <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;residential&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href="images/projects/GME.webp" aria-label="project-img">
                                                <img className="img-fluid" style={{ height: 250 }} src="images/projects/GME.webp" alt="project-img" />
                                                <span className="gallery-icon"><i className="fa fa-plus" /></span>
                                            </a>
                                            <div className="project-item-info">
                                                <div className="project-item-info-content">
                                                    <h3 className="project-item-title">
                                                        <a href="projects-single.html">Ancraft Avenue House</a>
                                                    </h3>
                                                    <p className="project-cat">Residential</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* shuffle item 6 end */}
                                </div>{/* shuffle end */}
                            </div>
                            <div className="col-12">
                                <div className="general-btn text-center">
                                    <a className="btn btn-primary" href="projects.html">View All Courses</a>
                                </div>
                            </div>
                        </div>{/* Content row end */}
                    </div>
                    {/*/ Container end */}
                </section>{/* Project area end */}


                <section className="subscribe no-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="subscribe-call-to-acton">
                                    <h3>Can We Help?</h3>
                                    <h4>(+9) 847-291-4353</h4>
                                </div>
                            </div>{/* Col end */}
                            <div className="col-md-8">
                                <div className="ts-newsletter row align-items-center">
                                    <div className="col-md-5 newsletter-introtext">
                                        <h4 className="text-white mb-0">Newsletter Sign-up</h4>
                                        <p className="text-white">Latest updates and news</p>
                                    </div>
                                    <div className="col-md-7 newsletter-form">
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="newsletter-email" className="content-hidden">Newsletter Email</label>
                                                <input type="email" name="email" id="newsletter-email" className="form-control form-control-lg" placeholder="Your your email and hit enter" autoComplete="off" />
                                            </div>
                                        </form>
                                    </div>
                                </div>{/* Newsletter end */}
                            </div>{/* Col end */}
                        </div>{/* Content row end */}
                    </div>
                    {/*/ Container end */}
                </section>
                {/*/ subscribe end */}


                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="column-title">Testimonials</h3>
                                <div id="testimonial-slide" className="testimonial-slide">
                                    <div className="item">
                                        <div className="quote-item">
                                            <span className="quote-text">
                                                Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last
                                                view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                                                subline of her own road.
                                            </span>
                                            <div className="quote-item-footer">
                                                <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial1.png" alt="testimonial" />
                                                <div className="quote-item-info">
                                                    <h3 className="quote-author">Gabriel Denis</h3>
                                                    <span className="quote-subtext">Chairman, OKT</span>
                                                </div>
                                            </div>
                                        </div>{/* Quote item end */}
                                    </div>
                                    {/*/ Item 1 end */}
                                    <div className="item">
                                        <div className="quote-item">
                                            <span className="quote-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                                                nisi aliquip consequat.
                                            </span>
                                            <div className="quote-item-footer">
                                                <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial2.png" alt="testimonial" />
                                                <div className="quote-item-info">
                                                    <h3 className="quote-author">Weldon Cash</h3>
                                                    <span className="quote-subtext">CFO, First Choice</span>
                                                </div>
                                            </div>
                                        </div>{/* Quote item end */}
                                    </div>
                                    {/*/ Item 2 end */}
                                    <div className="item">
                                        <div className="quote-item">
                                            <span className="quote-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                                                nisi ut commodo consequat.
                                            </span>
                                            <div className="quote-item-footer">
                                                <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial3.png" alt="testimonial" />
                                                <div className="quote-item-info">
                                                    <h3 className="quote-author">Minter Puchan</h3>
                                                    <span className="quote-subtext">Director, AKT</span>
                                                </div>
                                            </div>
                                        </div>{/* Quote item end */}
                                    </div>
                                    {/*/ Item 3 end */}
                                </div>
                                {/*/ Testimonial carousel end*/}
                            </div>{/* Col end */}
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <h3 className="column-title">Happy Clients</h3>
                                <div className="row all-clients">
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client1.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 1 end */}
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client2.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 2 end */}
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client3.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 3 end */}
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client4.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 4 end */}
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client5.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 5 end */}
                                    <div className="col-sm-4 col-6">
                                        <figure className="clients-logo">
                                            <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client6.png" alt="clients-logo" /></a>
                                        </figure>
                                    </div>{/* Client 6 end */}
                                </div>{/* Clients row end */}
                            </div>{/* Col end */}
                        </div>
                        {/*/ Content row end */}
                    </div>
                    {/*/ Container end */}
                </section>{/* Content end */}


                <section id="news" className="news">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h2 className="section-title">Maritime Education &amp; Training</h2>
                                <h3 className="section-sub-title">Latest News &amp; Updates</h3>
                            </div>
                        </div>
                        {/*/ Title row end */}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="latest-post">
                                    <div className="latest-post-media">
                                        <a href="news-single.html" className="latest-post-img">
                                            <img loading="lazy" className="img-fluid" style={{ height: 250 }} src="images/news/merchant-navy-officer.jpg" alt="Training Announcement" />
                                        </a>
                                    </div>
                                    <div className="post-body">
                                        <h4 className="post-title">
                                            <a href="news-single.html" className="d-inline-block">New International Maritime Training Course
                                                Announced</a>
                                        </h4>
                                        <div className="latest-post-meta">
                                            <span className="post-item-date">
                                                <i className="fa fa-clock-o" /> December 5, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>{/* Latest post end */}
                            </div>{/* 1st post col end */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="latest-post">
                                    <div className="latest-post-media">
                                        <a href="news-single.html" className="latest-post-img">
                                            <img loading="lazy" className="img-fluid" style={{ height: 250 }} src="images/news/Happy mariner- Main image.png" alt="Workshop" />
                                        </a>
                                    </div>
                                    <div className="post-body">
                                        <h4 className="post-title">
                                            <a href="news-single.html" className="d-inline-block">Global Workshop on Maritime Safety and Education</a>
                                        </h4>
                                        <div className="latest-post-meta">
                                            <span className="post-item-date">
                                                <i className="fa fa-clock-o" /> November 30, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>{/* Latest post end */}
                            </div>{/* 2nd post col end */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="latest-post">
                                    <div className="latest-post-media">
                                        <a href="news-single.html" className="latest-post-img">
                                            <img loading="lazy" className="img-fluid" style={{ height: 250 }} src="images/news/discussion-3-img.webp" alt="Conference" />
                                        </a>
                                    </div>
                                    <div className="post-body">
                                        <h4 className="post-title">
                                            <a href="news-single.html" className="d-inline-block">Annual Maritime Education Conference Highlights</a>
                                        </h4>
                                        <div className="latest-post-meta">
                                            <span className="post-item-date">
                                                <i className="fa fa-clock-o" /> November 25, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>{/* Latest post end */}
                            </div>{/* 3rd post col end */}
                        </div>
                        {/*/ Content row end */}
                        <div className="general-btn text-center mt-4">
                            <a className="btn btn-primary" href="news-left-sidebar.html">See All News</a>
                        </div>
                    </div>
                    {/*/ Container end */}
                </section>

            </div>

        </>
    );
};