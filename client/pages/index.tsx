import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Plan } from "../components/Plans";

export default function Home() {
	return (
		<>
			<Head>
				<title>Gym | Home</title>
			</Head>

			<NavBar />

			<section
				className="breadcrumb-section set-bg"
				style={{ backgroundImage: 'url("img/breadcrumb-bg.jpg")' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="breadcrumb-text">
								<h2></h2>
							</div>
						</div>
					</div>
				</div>
			</section>

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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
									facilisis.
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
								<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
									facilisis.
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
								<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
								<a href="#">Explore</a>
							</div>
						</div>
					</div>
				</div>
			</section>

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
						{PlansData.map(plan => (
							<Plan name={plan.name} price={plan.price} featureList={plan.featureList} />
						))}
					</div>
				</div>
			</section>

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

			<Footer />
		</>
	);
}

let PlansData = [
	{
		name: "Single class",
		price: "₹3000.0",
		featureList: [
			"Free riding",
			"Unlimited equipments",
			"Personal trainer",
			"Weight losing classes",
			"Month to mouth",
			"No time restriction",
		],
	},
	{
		name: " 12 Month Unlimited",
		price: "₹7000.0",
		featureList: [
			"Free riding",
			"Unlimited equipments",
			"Personal trainer",
			"Weight losing classes",
			"Month to mouth",
			"No time restriction",
		],
	},
	{
		name: "6 Month Unlimited",
		price: "₹5000.0",
		featureList: [
			"Free riding",
			"Unlimited equipments",
			"Personal trainer",
			"Weight losing classes",
			"Month to mouth",
			"No time restriction",
		],
	},
];
