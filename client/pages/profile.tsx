import React, { useContext } from "react";
import { Avatar, Divider, Image, Paper, Title, Text, Loader } from "@mantine/core";
import useSWR from "swr";
import { userProfileFetcher } from "../utils/fetcher";
import { Plan } from "../components/Plans";
import { PlansData } from "../utils/plandata";

export default function Profile() {
	const { data } = useSWR(process.env.API_URL + "/api/user/", userProfileFetcher);

	if (!data) {
		return <Loader />;
	}

	return (
		<>
			{data.data.training_info ? (
				<></>
			) : (
				<div>
					<Title align="center" order={2} m={15}>
						--- You might need to buy a plan ---
					</Title>
					<Divider />

					<div style={{ margin: "20px auto", width: "75%", display: "flex", flexWrap: "wrap" }}>
						{PlansData.map(plan => (
							<Plan plan={plan} />
						))}
					</div>
					<Divider />
				</div>
			)}
			<Paper radius="md" p={5} withBorder shadow={"lg"} style={{ width: "400px", margin: "5px auto" }}>
				<Title align="center" order={2}>
					Your Profile
				</Title>
				<p>Name: {data.data.name}</p>
				<p>age: {data.data.age}</p>
				<p>height: {data.data.height}</p>
				<p>weight: {data.data.weight}</p>
				<p>Gender: {data.data.gender}</p>
				<p>Phone Number: {data.data.ph_num}</p>
				<Divider />
				{data.data.training_info ? <p>Your Trainer is: {data.data.training_info.trainer.name}</p> : <></>}
			</Paper>
		</>
	);
}
