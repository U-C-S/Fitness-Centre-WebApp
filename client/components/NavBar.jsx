import React from "react";

export default function NavBar() {
	return (
		<>
			<div className="offcanvas-menu-overlay" />
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
							<a href="/">Home</a>
						</li>
						<li>
							<a href="./contact">Contact</a>
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
										<a href="./">Home</a>
									</li>
									<li>
										<a href="./contact">Contact</a>
									</li>
									<li>
										<a href="./about">About us</a>
									</li>
									<li>
										<a href="#">Login</a>
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
			{/* <!-- Header End --> */}
		</>
	);
}
