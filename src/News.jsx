import React from "react";

export const News = () => {
    return (
        <>
<div id="banner-area" className="banner-area" style={{backgroundImage: 'url(images/banner/news-img-12.jpg)'}}>
  <div className="banner-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-heading">
            <h1 className="banner-title">News</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">News</a></li>
                <li className="breadcrumb-item active" aria-current="page">News Right sidebar</li>
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
      <div className="col-lg-8 mb-5 mb-lg-0">
        <div className="post">
          <div className="post-media post-image">
            <img loading="lazy" src="images/news/chemical_tanker_ship.png" className="img-fluid" alt="chemical tanker ship" />
          </div>
          <div className="post-body">
            <div className="entry-header">
              <div className="post-meta">
                <span className="post-author">
                  <i className="far fa-user" /><a href="#"> Admin</a>
                </span>
                <span className="post-cat">
                  <i className="far fa-folder-open" /><a href="#"> News</a>
                </span>
                <span className="post-meta-date"><i className="far fa-calendar" /> March 10, 2024</span>
                <span className="post-comment"><i className="far fa-comment" /> 05<a href="#" className="comments-link"> Comments</a></span>
              </div>
              <h2 className="entry-title">
                <a href="news-single.html">Breakthrough in Sustainable Fuel for Tanker Ships</a>
              </h2>
            </div>{/* header end */}
            <div className="entry-content">
              <p>Maritime industries take a major step towards reducing emissions with the adoption of green ammonia as fuel for chemical tankers. Experts discuss the challenges and opportunities in this groundbreaking shift...</p>
            </div>
            <div className="post-footer">
              <a href="news-single.html" className="btn btn-primary">Continue Reading</a>
            </div>
          </div>{/* post-body end */}
        </div>{/* 1st post end */}
        <div className="post">
          <div className="post-media post-image">
            <img loading="lazy" src="images/news/roroship.webp" className="img-fluid" alt="RoRo ship" />
          </div>
          <div className="post-body">
            <div className="entry-header">
              <div className="post-meta">
                <span className="post-author">
                  <i className="far fa-user" /><a href="#"> Admin</a>
                </span>
                <span className="post-cat">
                  <i className="far fa-folder-open" /><a href="#"> News</a>
                </span>
                <span className="post-meta-date"><i className="far fa-calendar" /> March 8, 2024</span>
                <span className="post-comment"><i className="far fa-comment" /> 07<a href="#" className="comments-link"> Comments</a></span>
              </div>
              <h2 className="entry-title">
                <a href="news-single.html">RoRo Ships: A Growing Trend in Global Trade</a>
              </h2>
            </div>{/* header end */}
            <div className="entry-content">
              <p>Roll-on/Roll-off (RoRo) ships are revolutionizing the transport of vehicles and machinery. Industry experts highlight how these vessels are becoming indispensable in modern logistics...</p>
            </div>
            <div className="post-footer">
              <a href="news-single.html" className="btn btn-primary">Continue Reading</a>
            </div>
          </div>{/* post-body end */}
        </div>{/* 2nd post end */}
        <div className="post">
          <div className="post-media post-image">
            <img loading="lazy" src="images/news/cargo-ship.jpg" className="img-fluid" alt="cargo ship" />
          </div>
          <div className="post-body">
            <div className="entry-header">
              <div className="post-meta">
                <span className="post-author">
                  <i className="far fa-user" /><a href="#"> Admin</a>
                </span>
                <span className="post-cat">
                  <i className="far fa-folder-open" /><a href="#"> News</a>
                </span>
                <span className="post-meta-date"><i className="far fa-calendar" /> March 5, 2024</span>
                <span className="post-comment"><i className="far fa-comment" /> 12<a href="#" className="comments-link"> Comments</a></span>
              </div>
              <h2 className="entry-title">
                <a href="news-single.html">AI Integration in Cargo Ship Navigation</a>
              </h2>
            </div>{/* header end */}
            <div className="entry-content">
              <p>Artificial intelligence is transforming how cargo ships operate, offering solutions for fuel optimization, route planning, and enhanced safety measures in unpredictable seas...</p>
            </div>
            <div className="post-footer">
              <a href="news-single.html" className="btn btn-primary">Continue Reading</a>
            </div>
          </div>{/* post-body end */}
        </div>{/* 3rd post end */}
        <nav className="paging" aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left" /></a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a></li>
          </ul>
        </nav>
      </div>{/* Content Col end */}
      <div className="col-lg-4">
        <div className="sidebar sidebar-right">
          <div className="widget recent-posts">
            <h3 className="widget-title">Recent Posts</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <div className="posts-thumb">
                  <a href="#"><img loading="lazy" alt="img" src="images/news/chemical_tanker_ship.png" /></a>
                </div>
                <div className="post-info">
                  <h4 className="entry-title">
                    <a href="#">Breakthrough in Sustainable Fuel for Tanker Ships</a>
                  </h4>
                </div>
              </li>{/* 1st post end*/}
              <li className="d-flex align-items-center">
                <div className="posts-thumb">
                  <a href="#"><img loading="lazy" alt="img" src="images/news/roroship.webp" /></a>
                </div>
                <div className="post-info">
                  <h4 className="entry-title">
                    <a href="#">RoRo Ships: A Growing Trend in Global Trade</a>
                  </h4>
                </div>
              </li>{/* 2nd post end*/}
              <li className="d-flex align-items-center">
                <div className="posts-thumb">
                  <a href="#"><img loading="lazy" alt="img" src="images/news/cargo-ship.jpg" /></a>
                </div>
                <div className="post-info">
                  <h4 className="entry-title">
                    <a href="#">AI Integration in Cargo Ship Navigation</a>
                  </h4>
                </div>
              </li>{/* 3rd post end*/}
            </ul>
          </div>{/* Recent post end */}
          <div className="widget">
            <h3 className="widget-title">Categories</h3>
            <ul className="arrow nav nav-tabs">
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Logistics</a></li>
              <li><a href="#">Innovation</a></li>
              <li><a href="#">Policy</a></li>
            </ul>
          </div>{/* Categories end */}
          <div className="widget">
            <h3 className="widget-title">Archives</h3>
            <ul className="arrow nav nav-tabs">
              <li><a href="#">March 2024</a></li>
              <li><a href="#">February 2024</a></li>
              <li><a href="#">January 2024</a></li>
              <li><a href="#">December 2023</a></li>
              <li><a href="#">November 2023</a></li>
            </ul>
          </div>{/* Archives end */}
          <div className="widget widget-tags">
            <h3 className="widget-title">Tags</h3>
            <ul className="list-unstyled">
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">AI</a></li>
              <li><a href="#">Navigation</a></li>
              <li><a href="#">Innovation</a></li>
              <li><a href="#">Fuel</a></li>
              <li><a href="#">Logistics</a></li>
              <li><a href="#">Policy</a></li>
            </ul>
          </div>{/* Tags end */}
        </div>{/* Sidebar end */}
      </div>{/* Sidebar Col end */}
    </div>{/* Main row end */}
  </div>{/* Container end */}
</section>
{/* Main container end */}


        </>
    );
};