import React from "react";

export const Projects = () => {
    return(
        <>

            <div id="banner-area" className="banner-area" style={{backgroundImage: 'url(images/superyattch-bg.jpg)'}}>
            <div className="banner-text">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="banner-heading">
                        <h1 className="banner-title">Project</h1>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Project</a></li>
                            <li className="breadcrumb-item active" aria-current="page">All Projects</li>
                        </ol>
                        </nav>
                    </div>
                    </div>{/* Col end */}
                </div>{/* Row end */}
                </div>{/* Container end */}
            </div>{/* Banner text end */}
            </div>
            {/* Banner area end */}

            <section id="project-area" className="project-area solid-bg">
            <div className="container">
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
                            <img className="img-fluid" style={{height: 250}} src="images/projects/BE.jpg" alt="project-img" />
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
                            <img className="img-fluid" style={{height: 250}} src="images/projects/BSC.jpg" alt="project-img" />
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
                            <img className="img-fluid" style={{height: 250, width: '100%'}} src="images/projects/chef-5993951_1280.jpg" alt="project-img" />
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
                            <img className="img-fluid" style={{height: 250}} src="images/projects/DNS.webp" alt="project-img" />
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
                            <img className="img-fluid" style={{height: 250}} src="images/projects/ETO.jpeg" alt="project-img" />
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
                            <img className="img-fluid" style={{height: 250}} src="images/projects/GME.webp" alt="project-img" />
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
            </section>
            {/* Project area end */}

        </>
    );
};