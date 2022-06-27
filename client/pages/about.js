import Head from "next/head";
import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
export default function about() {
	return (
		<>
			<Navbar />

			<section className="choseus-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<span>Why chose us?</span>
								<h2>PUSH YOUR LIMITS FORWARD</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="cs-item">
								<span className="flaticon-034-stationary-bike"></span>
								<h4>Modern equipment</h4>
								<p>
									A training bench is an adjustable platform used for performing weight training exercises.
									You should be able to adjust the backrest, so you can move it from a flat position to an
									incline. You'll find a range of benches online, but look for a well-constructed and easily
									adjustable bench.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="cs-item">
								<span className="flaticon-033-juice"></span>
								<h4>Healthy nutrition plan</h4>
								<p>
									Eating a variety of foods from the 5 major food groups provides a range of nutrients to the
									body, promotes good health and can help reduce the risk of disease - as well as keeping your
									diet interesting with different flavours and textures.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="cs-item">
								<span className="flaticon-002-dumbell"></span>
								<h4>Professional training plan</h4>
								<p>
									Looking for the best place to start working towards a leaner, solid, and stronger body? This
									thorough workout routine is specifically designed to get you there!
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="cs-item">
								<span className="flaticon-014-heart-beat"></span>
								<h4>Unique to your needs</h4>
								<p>
									“To keep the body in good health is a duty… otherwise we shall not be able to keep our mind
									strong and clear.” “When it comes to eating right and exercising, there is no 'I'll start
									tomorrow'.” “It never gets easier, you just get better.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="aboutus-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6 p-0">
							<div className="about-video set-bg" data-setbg="">
								<img style={{ height: "100%", width: "100%" }} src="img/register.webp" alt="" />
							</div>
						</div>
						<div className="col-lg-6 p-0">
							<div className="about-text">
								<div className="section-title">
									<span>About Us</span>
									<h2>What we have done</h2>
								</div>
								<div className="at-desc">
									<p></p>
								</div>
								<div className="about-bar">
									<div className="ab-item">
										<p>Body building</p>
										<div id="bar1" className="barfiller">
											<span className="fill" data-percentage="80"></span>
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
										</div>
									</div>
									<div className="ab-item">
										<p>Training</p>
										<div id="bar2" className="barfiller">
											<span className="fill" data-percentage="85"></span>
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
										</div>
									</div>
									<div className="ab-item">
										<p>Fitness</p>
										<div id="bar3" className="barfiller">
											<span className="fill" data-percentage="75"></span>
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
										</div>
										<div>
											<p>
												Our operating hours are: <br />
												Monday to Saturday, 6.00 am to 12.00 am. <br />
												Sunday 6:00 am to <br />
												10:00 pm. Be Strong! <br />
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="testimonial-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<span>Testimonial</span>
								<h2>Our cilent say</h2>
							</div>
						</div>
					</div>
					<div className="ts_slider owl-carousel">
						<div className="ts_item">
							<div className="row">
								<div className="col-lg-12 text-center">
									<div className="ti_pic">
										<img src="img/testimonial/testimonial-1.jpg" alt="" />
									</div>
									<div className="ti_text">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
											incididunt
											<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
											commodo
											<br /> viverra maecenas accumsan lacus vel facilisis.
										</p>
										<h5>Marshmello Gomez</h5>
										<div className="tt-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ts_item">
							<div className="row">
								<div className="col-lg-12 text-center">
									<div className="ti_pic">
										<img src="img/testimonial/testimonial-2.jpg" alt="" />
									</div>
									<div className="ti_text">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
											incididunt
											<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
											commodo
											<br /> viverra maecenas accumsan lacus vel facilisis.
										</p>
										<h5>Marshmello Gomez</h5>
										<div className="tt-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
