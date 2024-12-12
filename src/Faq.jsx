import React from "react";

export const Faq = () => {
    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(images/news/faq-img.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Faq</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Faq</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>{/* Col end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>{/* Banner text end */}
            </div>
            {/* Banner area end */}

            <section id="main-container" className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="border-title border-left mar-t0">Maritime Education &amp; Training</h3>
                            <div className="accordion accordion-group accordion-classic" id="education-accordion">
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Why is maritime education essential for global trade?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#education-accordion">
                                        <div className="card-body">
                                            Maritime education provides specialized skills and knowledge essential for ensuring safe and efficient global trade operations. It prepares professionals to tackle challenges at sea and in port management.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are the key components of maritime training?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#education-accordion">
                                        <div className="card-body">
                                            Maritime training includes navigation, marine engineering, safety protocols, environmental protection, and leadership skills. It equips seafarers and port managers with practical and theoretical knowledge.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How does technology impact maritime education?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#education-accordion">
                                        <div className="card-body">
                                            Advanced technology, such as simulators and digital learning platforms, enhances maritime education by offering realistic training scenarios and flexible learning opportunities.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Accordion end */}
                            <div className="gap-40" />
                            <h3 className="border-title border-left">Safety &amp; Compliance</h3>
                            <div className="accordion accordion-group accordion-classic" id="safety-accordion">
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingFour">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                What are the key safety standards in the maritime industry?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#safety-accordion">
                                        <div className="card-body">
                                            Key safety standards include adherence to SOLAS (Safety of Life at Sea), pollution prevention protocols, and the International Safety Management (ISM) Code for ships and offshore structures.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                How are maritime laws and regulations enforced?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#safety-accordion">
                                        <div className="card-body">
                                            Maritime laws are enforced by national authorities and international bodies such as the International Maritime Organization (IMO). They ensure compliance through inspections, certifications, and monitoring.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-0 bg-transparent" id="headingSix">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Why is safety training critical in maritime careers?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#safety-accordion">
                                        <div className="card-body">
                                            Safety training is vital to minimize risks, protect lives, and prevent environmental damage. It ensures preparedness for emergencies, such as fire outbreaks, equipment failure, and adverse weather conditions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Accordion end */}
                        </div>{/* Col end */}
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="sidebar sidebar-right">
                                <div className="widget recent-posts">
                                    <h3 className="widget-title">Recent Posts</h3>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center">
                                            <div className="posts-thumb">
                                                <a href="#"><img loading="lazy" alt="news-image" src="images/news/faq-img.jpg" /></a>
                                            </div>
                                            <div className="post-info">
                                                <h4 className="entry-title">
                                                    <a href="#">The Evolution of Maritime Education</a>
                                                </h4>
                                            </div>
                                        </li>{/* 1st post end*/}
                                        <li className="d-flex align-items-center">
                                            <div className="posts-thumb">
                                                <a href="#"><img loading="lazy" alt="news-img" src="images/news/marine-life-2.jpg" /></a>
                                            </div>
                                            <div className="post-info">
                                                <h4 className="entry-title">
                                                    <a href="#">Adapting to Digital Trends in Maritime Training</a>
                                                </h4>
                                            </div>
                                        </li>{/* 2nd post end*/}
                                        <li className="d-flex align-items-center">
                                            <div className="posts-thumb">
                                                <a href="#"><img loading="lazy" alt="news-img" src="images/news/marine-life-1.jpg" /></a>
                                            </div>
                                            <div className="post-info">
                                                <h4 className="entry-title">
                                                    <a href="#">Top Maritime Safety Practices in 2024</a>
                                                </h4>
                                            </div>
                                        </li>{/* 3rd post end*/}
                                    </ul>
                                </div>{/* Recent post end */}
                            </div>{/* Sidebar end */}
                        </div>{/* Col end */}
                    </div>{/* Content row end */}
                </div>{/* Container end */}
            </section>

        </>
    );
};