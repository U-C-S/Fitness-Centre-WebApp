import React from "react";
import { useForm } from "@mantine/hooks";
import { PasswordInput, Text, Paper, Group, PaperProps, Button, Anchor, TextInput } from "@mantine/core";
import Router from "next/router";

interface adad extends PaperProps<"div"> {
	admin?: boolean;
	externalSubmitEvent?: (values: { ph_num: string; password: string }) => Promise<void>;
}

export function LoginForm(props: adad) {
	const form = useForm({
		initialValues: {
			ph_num: "",
			password: "",
		},
	});

	const submitEvent = async (values: typeof form.values) => {
		console.log(values);

		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				ph_num: values.ph_num,
				password: values.password,
			}),
		};
		let url = props.admin ? `${process.env.API_URL}/auth/adminlogin` : `${process.env.API_URL}/auth/login`;
		let res = await fetch(url, fetchOpts);
		let resData = await res.json();

		console.log(resData);
		if (res.status === 200) {
			localStorage.setItem("jwt", resData.data.token);
			localStorage.setItem("user", resData.data.ph_num);

			if (props.admin == false || props.admin == undefined) {
				Router.push(`/profile`);
			} else {
				Router.push(`/admin/view/customers`);
			}
		} else {
			alert(resData.message);
		}
	};

	return (
		<Paper radius="md" p="xl" withBorder {...props}>
			<Text size="lg" weight={500} align="center">
				Login
			</Text>

			<form onSubmit={form.onSubmit(props.externalSubmitEvent ? props.externalSubmitEvent : submitEvent)}>
				<Group direction="column" grow>
					<TextInput
						required
						label="Phone Number"
						placeholder="Enter it !!"
						value={form.values.ph_num}
						onChange={event => form.setFieldValue("ph_num", event.currentTarget.value)}
					/>

					<PasswordInput
						required
						label="Password"
						placeholder="Your password"
						value={form.values.password}
						onChange={event => form.setFieldValue("password", event.currentTarget.value)}
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
