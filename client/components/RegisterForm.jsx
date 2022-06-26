import React from "react";
import { Drawer, Button, Group } from "@mantine/core";
import { TextInput } from "@mantine/core";

import NavBar from "./NavBar";

export function Register() {
	return (
		<>
			<form action="/">
				<>
					<p>Please fill in this form to create an account.</p>

					<TextInput placeholder="Enter Full name" label="Name" required />

					<TextInput type="text" placeholder="Enter ph.number" name="mobile" label="Mobile Number" required />

					<TextInput type="text" placeholder="Enter Height" name="high" label="Height" required />

					<TextInput type="text" placeholder="Enter Age" name="Age" label="Age" required />

					<TextInput type="text" placeholder="Enter weight" name="weigh" label="Weight" required />

					<TextInput type="text" placeholder="Enter Email" name="email" label="email" required />

					<TextInput type="password" placeholder="Enter Password" name="psw" label="Password" required />

					<p>
						By creating an account you agree to our <a href="#">Terms & Privacy</a>.
					</p>

					<button type="submit" className="registerbtn">
						Register
					</button>
				</>
			</form>
		</>
	);
}

export function RegisterFormDrawer({ opened, setOpened }) {
	return (
		<Drawer
			opened={opened}
			onClose={() => setOpened(false)}
			title="Register"
			position="right"
			padding="xl"
			size="xl">
			<Register />
		</Drawer>
	);
}
