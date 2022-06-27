import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Plan } from "../components/Plans";
import { PlansData } from "../utils/plandata";

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
									If you are just starting out with an exercise program or you aren't seeing results with your
									current routine, a personal trainer might be your best option
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
									Head to a group fitness class on the days you’re not motivated to work out. With a teacher
									telling you what to do, the session is less work for you, while still being effective.
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
									If you want to get serious about bodybuilding, you’ll need to navigate your nutrition and
									training with military precision
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
									Strength Training Increases Muscle Mass and Potential Calorie Burn. While cardio is
									important for general health and weight management, it isn't the only type of exercise that
									can help you reduce body fat
								</p>
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
							<Plan plan={plan} />
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
