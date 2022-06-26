import React, { useState } from "react";
import { RegisterFormDrawer } from "./RegisterForm";

export function Plan({ name, price, featureList }: any) {
	const [opened, setOpened] = useState(false);

	return (
		<div className="col-lg-4 col-md-8">
			<div className="ps-item">
				<h3>{name}</h3>
				<div className="pi-price">
					<h2>{price}</h2>
				</div>
				<ul>
					{featureList.map((feature: any) => (
						<li>{feature}</li>
					))}
				</ul>
				<a href="#" className="primary-btn pricing-btn" onClick={() => setOpened(true)}>
					Enroll now
				</a>
				<RegisterFormDrawer opened={opened} setOpened={setOpened} />

				<a href="#" className="thumb-icon">
					<i className="fa fa-picture-o"></i>
				</a>
			</div>
		</div>
	);
}
