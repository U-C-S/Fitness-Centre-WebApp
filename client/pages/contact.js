import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { QueryForm } from "../components/QueryForm";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact | GYM</title>
			</Head>

			<NavBar />

			<section
				className="breadcrumb-section set-bg"
				style={{ backgroundImage: 'url("img/breadcrumb-bg.jpg")' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="breadcrumb-text">
								<h2>Contact Us</h2>
								<div className="bt-option">
									<a href="/">Home</a>
									<span>Contact us</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Breadcrumb Section End -->

    <!-- Contact Section Begin --> */}
			<section className="contact-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="section-title contact-title">
								<h2>GET IN TOUCH</h2>
							</div>
							<div className="contact-widget">
								<div className="cw-text">
									<i className="fa fa-map-marker"></i>
									<p>
										C-Block, JP Nagar, Mysuru, <br />
										Karnataka 570008, India <br />
									</p>
								</div>
								<div className="cw-text">
									<i className="fa fa-mobile"></i>
									<p>
										125-711-8111 <br /> 25-668-886
									</p>
								</div>
								<div className="cw-text email">
									<i className="fa fa-envelope"></i>
									<p>Support.gymcenter@gmail.com</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<QueryForm />
						</div>
					</div>
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.44715984896!2d76.56564906167095!3d12.310636832205374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sbd!4v1656231032561!5m2!1sen!2sbd"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
