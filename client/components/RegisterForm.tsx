import React from "react";
import { Button, Drawer, Group, NumberInput, Stack } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Router from "next/router";

export function Register() {
	const form = useForm({
		initialValues: {
			fname: "Mad",
			lname: "Man",
			height: 170,
			weight: 70,
			age: 50,
			address: "here",
			ph_num: 987641230,
			email: "hello@gmail.com",
			password: "123456",
		},
	});

	async function blah(values: typeof form.values) {
		console.log(values);

		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		};

		let res = await fetch(`${process.env.API_URL}/auth/login`, fetchOpts);
		let resData = await res.json();

		console.log(resData);
		if (resData.success) {
			localStorage.setItem("jwt", resData.data.token);
			localStorage.setItem("user", resData.data.username);
			Router.push(`/p/${values.ph_num}`);
		}
	}

	return (
		<>
			<form onSubmit={form.onSubmit(blah)}>
				<>
					<p>Please fill in this form to create an account.</p>
					<Stack>
						<TextInput placeholder="Enter First name" required />
						<TextInput placeholder="Enter Last name" required />

						<Group>
							<NumberInput placeholder="Enter Height" name="high" required style={{ width: "150px" }} />
							<NumberInput placeholder="Enter weight" name="weigh" required style={{ width: "150px" }} />
							<NumberInput placeholder="Enter Age" name="Age" required />
						</Group>

						<TextInput placeholder="Enter ph.number" required />
						<TextInput placeholder="Enter Email" name="email" required />

						<TextInput type="password" placeholder="Enter Password" name="psw" required />
					</Stack>

					<p>
						By creating an account you agree to our <a href="#">Terms & Privacy</a>.
					</p>

					<Button type="submit" className="registerbtn">
						Register
					</Button>
				</>
			</form>
		</>
	);
}

export function RegisterFormDrawer({ opened, setOpened }: any) {
	return (
		<Drawer
			opened={opened}
			onClose={() => setOpened(false)}
			title="Register"
			position="right"
			padding="xl"
			size={600}>
			<Register />
		</Drawer>
	);
}
