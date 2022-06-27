import React, { useState } from "react";
import { RegisterFormDrawer } from "./RegisterForm";

export function Plan({ plan }: any) {
	const [opened, setOpened] = useState(false);

	return (
		<div className="col-lg-4 col-md-8">
			<div className="ps-item">
				<h3>{plan.name}</h3>
				<div className="pi-price">
					<h2>₹ {plan.price}</h2>
				</div>
				<ul>
					{plan.featureList.map((feature: any) => (
						<li>{feature}</li>
					))}
				</ul>
				<button className="primary-btn pricing-btn" onClick={() => setOpened(true)}>
					Enroll now
				</button>
				<RegisterFormDrawer opened={opened} setOpened={setOpened} selectedPlan={plan} />
			</div>
		</div>
	);
}
