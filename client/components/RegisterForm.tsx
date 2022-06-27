import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	Center,
	Divider,
	Drawer,
	Group,
	Loader,
	NumberInput,
	Paper,
	Radio,
	RadioGroup,
	Stack,
	Stepper,
	Text,
} from "@mantine/core";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { LoginForm } from "./LoginForm";

export function RegisterForm({ registerEventHandler }: any) {
	const form = useForm({
		initialValues: {
			name: "Sup",
			height: 170,
			weight: 65,
			age: 24,
			gender: "F",
			ph_num: 987641230,
			// plan: selectedPlan,
			password: "123456",
		},
	});

	return (
		<form onSubmit={form.onSubmit(registerEventHandler)}>
			<Stack m={5}>
				<TextInput
					label="Name"
					placeholder="Enter your full name"
					required
					value={form.values.name}
					onChange={event => form.setFieldValue("name", event.currentTarget.value)}
				/>

				<Group position="center">
					<NumberInput
						label="Height"
						placeholder="Enter Height"
						name="high"
						required
						style={{ width: "100px" }}
						value={form.values.height}
						onChange={event => form.setFieldValue("height", event as number)}
					/>
					<NumberInput
						label="Weight"
						placeholder="Enter weight"
						name="weigh"
						required
						style={{ width: "100px" }}
						value={form.values.weight}
						onChange={event => form.setFieldValue("weight", event as number)}
					/>
					<NumberInput
						label="Age"
						placeholder="Enter Age"
						name="Age"
						required
						style={{ width: "100px" }}
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
					label="Phone Number"
					placeholder="Enter phone number (important)"
					required
					value={form.values.ph_num}
					onChange={event => form.setFieldValue("ph_num", event as number)}
				/>

				<TextInput
					label="Password"
					type="password"
					placeholder="Enter Password"
					name="psw"
					required
					value={form.values.password}
					onChange={event => form.setFieldValue("password", event.currentTarget.value)}
				/>
				<Button type="submit">Register</Button>
			</Stack>
		</form>
	);
}

function DoneStep() {
	const [info, setInfo] = useState<any | null>(null);

	useEffect(() => {
		let x = JSON.parse(localStorage.getItem("trainingData") as string);
		setInfo(x);
	}, []);

	return (
		<Paper withBorder p={5} m={5}>
			<Text align="center">You have successfully registered.</Text>
			{info ? (
				<>
					<Text align="center" m={10}>
						Your Trainer is:
					</Text>
					<Card withBorder radius="md" style={{ width: "250px", margin: "auto" }}>
						<Text align="center">Name: {info.trainer.name}</Text>
						<Text align="center">who has experience level of {info.trainer.explevel}</Text>
					</Card>
				</>
			) : (
				<Loader />
			)}
		</Paper>
	);
}

export function Register({ selectedPlan }: any) {
	const [active, setActive] = useState(0);
	const [openlogin, setLogin] = useState(false);
	const nextStep = () => setActive(current => (current < 3 ? current + 1 : current));
	// const prevStep = () => setActive(current => (current > 0 ? current - 1 : current));

	const authWrapperFn = (type: "login" | "register") => {
		return async function registerEventHandler(values: any) {
			let fetchOpts = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			};

			let res = await fetch(`${process.env.API_URL}/auth/${type}`, fetchOpts);
			let resData = await res.json();

			console.log(resData);
			if (resData.success) {
				localStorage.setItem("jwt", resData.data.token);
				localStorage.setItem("ph_num", resData.data.ph_num);
				nextStep();
			}
		};
	};

	const BuyPlan = async () => {
		let res = await fetch(`${process.env.API_URL}/api/user/buyplan`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
			body: JSON.stringify({
				plan: selectedPlan.id,
			}),
		});
		let resData = await res.json();
		if (res.status === 200) {
			localStorage.setItem("trainingData", JSON.stringify(resData.data));
			nextStep();
		} else {
			alert("Something went wrong");
		}
	};

	const RegistrationDone = () => {
		Router.push(`/profile/${localStorage.getItem("ph_num")}`);
	};

	return (
		<>
			<>
				<Stepper active={active} breakpoint="sm">
					<Stepper.Step label="First step" description="Create an account">
						<Text p={5} align="center">
							Step 1: Create an account
						</Text>

						<Paper p={10} withBorder style={{ backgroundColor: "hsl(20, 1%, 21%)" }}>
							<Group m={5} position="center">
								<Text align="center">Already have a Account ??</Text>
								<Button onClick={() => setLogin(true)}>Login</Button>
							</Group>
							<Divider style={{ margin: "15px 0" }} label="or Register to continue" labelPosition="center" />
							{openlogin ? (
								<LoginForm externalSubmitEvent={authWrapperFn("login")} />
							) : (
								<RegisterForm registerEventHandler={authWrapperFn("register")} />
							)}
						</Paper>
					</Stepper.Step>
					<Stepper.Step label="Second step" description="Payment">
						<Text p={5} align="center">
							Step 2: Make Payment
						</Text>
						<Paper p={10} withBorder style={{ backgroundColor: "hsl(20, 1%, 21%)", margin: "30px 0" }}>
							<Stack m={5}>
								<Text>You have selected the "{selectedPlan.name}" plan.</Text>
								<Text>The price is Rs.{selectedPlan.price}/-</Text>
								<Button onClick={() => BuyPlan()}>Pay</Button>
							</Stack>
						</Paper>
					</Stepper.Step>
					<Stepper.Step label="Final step" description="Done">
						<DoneStep />
						<Button style={{ width: "100%" }} onClick={() => RegistrationDone()}>
							Done
						</Button>
					</Stepper.Step>
					<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
				</Stepper>
			</>
		</>
	);
}

export function RegisterFormDrawer({ opened, setOpened, selectedPlan }: any) {
	return (
		<Drawer
			opened={opened}
			onClose={() => setOpened(false)}
			title="Buy a Plan"
			position="right"
			padding="xl"
			size={600}>
			<Register selectedPlan={selectedPlan} />
		</Drawer>
	);
}
