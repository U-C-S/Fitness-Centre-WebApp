import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Gym Template" />
        <meta name="keywords" content="Gym, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gym | Template</title>

        <link
          href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link
          rel="stylesheet"
          href="css/font-awesome.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="css/flaticon.css" type="text/css" />
        <link
          rel="stylesheet"
          href="css/owl.carousel.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="css/barfiller.css" type="text/css" />
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="css/style.css" type="text/css" />

        <script src="js/jquery-3.3.1.min.js" defer></script>
        <script src="js/bootstrap.min.js" defer></script>
        <script src="js/jquery.magnific-popup.min.js" defer></script>
        <script src="js/masonry.pkgd.min.js" defer></script>
        <script src="js/jquery.barfiller.js" defer></script>
        <script src="js/jquery.slicknav.js" defer></script>
        <script src="js/owl.carousel.min.js" defer></script>
        <script src="js/main.js" defer></script>
      </Head>

      {/* <!-- Page Preloder --> */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close"></i>
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search"></i>
        </div>
        <nav className="canvas-menu mobile-menu">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./about-us.html">About Us</a>
            </li>
            <li>
              <a href="./class-details.html">Classes</a>
            </li>
            <li>
              <a href="./services.html">Services</a>
            </li>
            <li>
              <a href="./team.html">Our Team</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <a href="./about-us.html">About us</a>
                </li>
                <li>
                  <a href="./class-timetable.html">Classes timetable</a>
                </li>
                <li>
                  <a href="./bmi-calculator.html">Bmi calculate</a>
                </li>
                <li>
                  <a href="./team.html">Our team</a>
                </li>
                <li>
                  <a href="./gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="./blog.html">Our blog</a>
                </li>
                <li>
                  <a href="./404.html">404</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="canvas-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-play"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      {/* <!-- Offcanvas Menu Section End -->

    <!-- Header Section Begin --> */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="./classes.html">Classes</a>
                  </li>
                  <li className="active">
                    <a href="./services.html">Services</a>
                  </li>
                  <li>
                    <a href="./team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="./class-timetable.html">Classes timetable</a>
                      </li>
                      <li>
                        <a href="./bmi-calculator.html">Bmi calculate</a>
                      </li>
                      <li>
                        <a href="./team.html">Our team</a>
                      </li>
                      <li>
                        <a href="./gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="./blog.html">Our blog</a>
                      </li>
                      <li>
                        <a href="./404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search"></i>
                </div>
                <div className="to-social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header End -->

    <!-- Breadcrumb Section Begin --> */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Services</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End -->

    <!-- Services Section Begin --> */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>What we do?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 order-lg-1 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-2 col-md-6 p-0">
              <div className="ss-text">
                <h4>Personal training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut dolore facilisis.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-4 col-md-6 p-0">
              <div className="ss-text">
                <h4>Group fitness classes</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-8 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-7 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Body building</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut dolore facilisis.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-6 col-md-6 p-0">
              <div className="ss-pic">
                <img src="img/services/services-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-5 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4>Strength training</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.
                </p>
                <a href="#">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End -->

    <!-- Banner Section Begin --> */}
      <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text service-banner">
                <h2>Exercise until the body obeys.</h2>
                <div className="bt-tips">
                  Where health, beauty and fitness meet.
                </div>
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End -->

    <!-- Pricing Section Begin --> */}
      <section className="pricing-section service-pricing spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Plan</span>
                <h2>Choose your pricing plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>Class drop-in</h3>
                <div className="pi-price">
                  <h2>$ 39.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>12 Month unlimited</h3>
                <div className="pi-price">
                  <h2>$ 99.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>6 Month unlimited</h3>
                <div className="pi-price">
                  <h2>$ 59.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Enroll now
                </a>
                <a href="#" className="thumb-icon">
                  <i className="fa fa-picture-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing Section End -->

    <!-- Get In Touch Section Begin --> */}
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-map-marker"></i>
                <p>
                  333 Middle Winchendon Rd, Rindge,
                  <br /> NH 03461
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-mobile"></i>
                <ul>
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text email">
                <i className="fa fa-envelope"></i>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Get In Touch Section End -->

    <!-- Footer Section Begin --> */}
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua
                  endisse ultrices gravida lorem.
                </p>
                <div className="fa-social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa  fa-envelope-o"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Tips & Guides</h4>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div className="fw-recent">
                  <h6>
                    <a href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
}
