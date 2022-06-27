import React from "react";
import { Button, Drawer, Group, NumberInput, Radio, RadioGroup, Stack } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Router from "next/router";

export function Register() {
	const form = useForm({
		initialValues: {
			name: "Sup",
			height: 170,
			weight: 65,
			age: 24,
			gender: "F",
			ph_num: 987641230,
			password: "123456",
		},
	});

	async function blah(values: typeof form.values) {
		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		};

		let res = await fetch(`${process.env.API_URL}/auth/register`, fetchOpts);
		let resData = await res.json();

		console.log(resData);
		if (resData.success) {
			localStorage.setItem("jwt", resData.data.token);
			localStorage.setItem("user", resData.data.username);
			Router.push(`/profile/${values.ph_num}`);
		}
	}

	return (
		<>
			<>
				<p>Please fill in this form to create an account.</p>
				<form onSubmit={form.onSubmit(blah)}>
					<Stack>
						<TextInput
							placeholder="Enter your full name"
							required
							value={form.values.name}
							onChange={event => form.setFieldValue("name", event.currentTarget.value)}
						/>

						<Group>
							<NumberInput
								placeholder="Enter Height"
								name="high"
								required
								style={{ width: "150px" }}
								value={form.values.height}
								onChange={event => form.setFieldValue("height", event as number)}
							/>
							<NumberInput
								placeholder="Enter weight"
								name="weigh"
								required
								style={{ width: "150px" }}
								value={form.values.weight}
								onChange={event => form.setFieldValue("weight", event as number)}
							/>
							<NumberInput
								placeholder="Enter Age"
								name="Age"
								required
								value={form.values.age}
								onChange={event => form.setFieldValue("age", event as number)}
							/>
						</Group>

						<RadioGroup
							value={form.values.gender}
							onChange={e => form.setFieldValue("gender", e)}
							label="Select your Gender"
							required>
							<Radio value="M" label="Male" />
							<Radio value="F" label="Female" />
							<Radio value="X" label="I don't want to disclose" />
						</RadioGroup>

						<NumberInput
							placeholder="Enter phone number (important)"
							required
							value={form.values.ph_num}
							onChange={event => form.setFieldValue("ph_num", event as number)}
						/>

						<TextInput
							type="password"
							placeholder="Enter Password"
							name="psw"
							required
							value={form.values.password}
							onChange={event => form.setFieldValue("password", event.currentTarget.value)}
						/>
						<p>
							By creating an account you agree to our <a href="#">Terms & Privacy</a>.
						</p>
						<Button type="submit">Register</Button>
					</Stack>
				</form>
			</>
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
