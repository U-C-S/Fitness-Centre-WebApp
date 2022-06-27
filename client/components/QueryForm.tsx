import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

export function QueryForm() {
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			query: "",
		},
	});

	const sendQuery = async (values: typeof form.values) => {
		console.log(values);

		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: values.name,
				email: values.email,
				query: values.query,
			}),
		};

		let res = await fetch(`${process.env.API_URL}/api/query`, fetchOpts);
		let resData = await res.json();

		if (res.status === 201) {
			alert(resData.message);
		}
	};

	return (
		<div className="leave-comment">
			<form onSubmit={form.onSubmit(sendQuery)}>
				<TextInput
					required
					label="Name"
					placeholder="Type your name"
					value={form.values.name}
					onChange={event => form.setFieldValue("name", event.currentTarget.value)}
				/>
				<TextInput
					required
					label="Email"
					placeholder="Type your email or phone number"
					value={form.values.email}
					onChange={event => form.setFieldValue("email", event.currentTarget.value)}
				/>
				<Textarea
					required
					label="Comment"
					placeholder="Enter your queries and comments here...."
					value={form.values.query}
					onChange={event => form.setFieldValue("query", event.currentTarget.value)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
}
