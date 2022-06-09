import React from "react";
import Head from "next/head";

export default function main() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
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

        <script src="/js/jquery-3.3.1.min.js" defer></script>
        <script src="/js/bootstrap.min.js" defer></script>
        <script src="/js/jquery.magnific-popup.min.js" defer></script>
        <script src="js/masonry.pkgd.min.js" defer></script>
        <script src="js/jquery.barfiller.js" defer></script>
        <script src="js/jquery.slicknav.js" defer></script>
        <script src="js/owl.carousel.min.js" defer></script>
        <script src="js/main.js" defer></script>
      </Head>
      <>
        <div id="preloder">
          <div class="loader"></div>
        </div>

        <div class="offcanvas-menu-overlay"></div>
        <div class="offcanvas-menu-wrapper">
          <div class="canvas-close">
            <i class="fa fa-close"></i>
          </div>
          <div class="canvas-search search-switch">
            <i class="fa fa-search"></i>
          </div>
          <nav class="canvas-menu mobile-menu">
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
              <li>
                <a href="./services.html">Services</a>
              </li>
              <li>
                <a href="./team.html">Our Team</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul class="dropdown">
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
          <div class="canvas-social">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube-play"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <header class="header-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3">
                <div class="logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <nav class="nav-menu">
                  <ul>
                    <li class="active">
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
                      <ul class="dropdown">
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
              <div class="col-lg-3">
                <div class="top-option">
                  <div class="to-search search-switch">
                    <i class="fa fa-search"></i>
                  </div>
                  <div class="to-social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="canvas-open">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </header>

        <section class="hero-section">
          <div class="hs-slider owl-carousel">
            <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 offset-lg-6">
                    <div class="hi-text">
                      <span>Shape your body</span>
                      <h1>
                        Be <strong>strong</strong> traning hard
                      </h1>
                      <a href="#" class="primary-btn">
                        Get info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 offset-lg-6">
                    <div class="hi-text">
                      <span>Shape your body</span>
                      <h1>
                        Be <strong>strong</strong> traning hard
                      </h1>
                      <a href="#" class="primary-btn">
                        Get info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="choseus-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title">
                  <span>Why chose us?</span>
                  <h2>PUSH YOUR LIMITS FORWARD</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                  <span class="flaticon-034-stationary-bike"></span>
                  <h4>Modern equipment</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut dolore facilisis.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                  <span class="flaticon-033-juice"></span>
                  <h4>Healthy nutrition plan</h4>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                  <span class="flaticon-002-dumbell"></span>
                  <h4>Proffesponal training plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut dolore facilisis.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                  <span class="flaticon-014-heart-beat"></span>
                  <h4>Unique to your needs</h4>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
