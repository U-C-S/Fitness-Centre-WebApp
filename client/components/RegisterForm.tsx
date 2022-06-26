import React from "react";
import { Button, Drawer, Group, NumberInput, Stack } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export function Register() {
	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			height: 0,
			weight: 0,
			age: 0,
			address: "",
			ph_num: null,
			email: "",
			password: "",
		},
	});

	function blah(val: typeof form.values) {
		console.log(val);
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
