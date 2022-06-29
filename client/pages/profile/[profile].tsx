import React, { useContext } from "react";
import { Avatar, Divider, Image, Paper, Title, Text, Loader } from "@mantine/core";
import useSWR from "swr";

const userProfileFetcher = async (...args: [string, any]) => {
	const p = localStorage.getItem("ph_num");
	const jwt = localStorage.getItem("jwt");

	let x = await fetch(args[0], {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt}`,
		},
	});
	return await x.json();
};

export default function Profile() {
	const { data } = useSWR(process.env.API_URL + "/api/user/", userProfileFetcher);

	if (!data) {
		return <Loader />;
	}

	return (
		<Paper radius="md" p={0} withBorder shadow={"lg"} style={{ width: "500px", margin: "0 auto" }}>
			<Avatar
				size={150}
				radius={"xl"}
				style={{ margin: "auto" }}
				src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
				alt="it's me"
			/>

			<Divider my="sm" />
			<p>Name: {data.data.name}</p>
			<p>age: {data.data.age}</p>
			<p>height: {data.data.height}</p>
			<p>weight: {data.data.weight}</p>
			<p>Gender: {data.data.gender}</p>
			<p>Phone Number: {data.data.ph_num}</p>
		</Paper>
	);
}
