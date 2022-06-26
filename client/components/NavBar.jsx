import { Modal } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { LoginForm } from "./LoginForm";

export default function NavBar() {
	const [isOpen, setIsOpen] = React.useState(false);

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
										<Link href="/">
											<a>Home</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a>Contact</a>
										</Link>
									</li>
									<li>
										<Link href="/about">
											<a>About us</a>
										</Link>
									</li>
									<li>
										<a href="#" onClick={() => setIsOpen(true)}>
											Login
										</a>
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
							''
						</div>
					</div>
					<div className="canvas-open">
						<i className="fa fa-bars"></i>
					</div>
				</div>
				<Modal centered opened={isOpen} onClose={() => setIsOpen(false)}>
					<LoginForm />
				</Modal>
			</header>
		</>
	);
}
