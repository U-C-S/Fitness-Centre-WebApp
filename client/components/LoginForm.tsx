import React from "react";
import { useForm } from "@mantine/hooks";
import { TextInput, PasswordInput, Text, Paper, Group, PaperProps, Button, Anchor } from "@mantine/core";
import Router from "next/router";

export function LoginForm(props: PaperProps<"div">) {
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		// validationRules: {
		// 	email: val => /^\S+@\S+$/.test(val),
		// 	password: val => val.length >= 4,
		// },
	});

	const submitEvent = async (values: typeof form.values) => {
		console.log(values);

		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: values.email,
				name: values.name,
				password: values.password,
			}),
		};

		let res = await fetch(`${process.env.API_URL}/auth/login`, fetchOpts);
		let resData = await res.json();

		console.log(resData);
		if (resData.success) {
			localStorage.setItem("jwt", resData.data.token);
			localStorage.setItem("user", resData.data.username);
			Router.push(`/p/${values.name}`);
		}
	};

	return (
		<Paper radius="md" p="xl" withBorder {...props}>
			<Text size="lg" weight={500} align="center">
				Login
			</Text>

			<form onSubmit={form.onSubmit(submitEvent)}>
				<Group direction="column" grow>
					<TextInput
						required
						label="Email"
						placeholder="hello@films.com"
						value={form.values.email}
						onChange={event => form.setFieldValue("email", event.currentTarget.value)}
						error={form.errors.email && "Invalid email"}
					/>

					<PasswordInput
						required
						label="Password"
						placeholder="Your password"
						value={form.values.password}
						onChange={event => form.setFieldValue("password", event.currentTarget.value)}
						error={form.errors.password && "Password should include at least 8 characters"}
					/>
				</Group>

				<Group position="apart" mt="xl">
					<Anchor component="button" type="button" color="gray" size="xs">
						{"Don't have an account? Register"}
					</Anchor>
					<Button type="submit">Login</Button>
				</Group>
			</form>
		</Paper>
	);
}
