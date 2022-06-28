import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<>
			<div className="gettouch-section">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="gt-text">
								<i className="fa fa-map-marker"></i>
								<p>
									C-Block, JP Nagar, Mysuru, <br />
									Karnataka 570008, India <br />
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

			<section className="footer-section">
				<div className="container">
					<div className="row" style={{ margin: "auto" }}>
						<div className="col-lg-4">
							<div className="fs-about">
								<div className="fa-logo">
									<a href="#">
										<img src="img/logo.png" alt="" />
									</a>
								</div>
								<p>
									A place where you can be fit and shape yourself.<br></br>
									Now or Never.
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
										<Link href={"/about"}>
											<a>About</a>
										</Link>
									</li>
									<li>
										<a href="#">Blog</a>
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
										<Link href={"/profile"}>
											<a>My account</a>
										</Link>
									</li>
									<li>
										<Link href={"/admin"}>
											<a>Admin</a>
										</Link>
									</li>
									<li>
										<Link href={"/contact"}>
											<a>Contact</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
