import React, { useState } from "react";
import { AdminAppShell } from "../../../components/AdminAppShell";

import {
	Button,
	createStyles,
	Group,
	Loader,
	NumberInput,
	Paper,
	Radio,
	RadioGroup,
	ScrollArea,
	Stack,
	Table,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import useSWR from "swr";
import { fetcher, userProfileFetcher } from "../../../utils/fetcher";

export function QueryForm() {
	const form = useForm({
		initialValues: {
			name: "",
			gender: "M",
			ph_num: 0,
			explevel: 1,
		},
	});

	const sendQuery = async (values: typeof form.values) => {
		let fetchOpts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		};

		let res = await fetch(`${process.env.API_URL}/api/trainer`, fetchOpts);
		let resData = await res.json();

		if (res.status === 201) {
			alert(resData.message);
		}
	};

	return (
		<form onSubmit={form.onSubmit(sendQuery)} style={{ margin: "0px 20px" }}>
			<Stack>
				<TextInput
					required
					label="Name"
					placeholder="Type the name"
					value={form.values.name}
					onChange={event => form.setFieldValue("name", event.currentTarget.value)}
				/>
				<RadioGroup
					value={form.values.gender}
					onChange={e => form.setFieldValue("gender", e)}
					label="Select your Gender"
					required>
					<Radio value="M" label="Male" />
					<Radio value="F" label="Female" />
					<Radio value="X" label="Hidden" />
				</RadioGroup>
				<Group>
					<NumberInput
						style={{ width: "230px" }}
						label="Phone Number"
						placeholder="Enter phone number (important)"
						required
						value={form.values.ph_num}
						max={9999999999}
						min={1000000000}
						onChange={event => form.setFieldValue("ph_num", event as number)}
					/>
					<NumberInput
						style={{ width: "90px" }}
						label="Exp Level"
						placeholder="Exp level of trainer"
						required
						value={form.values.explevel}
						max={5}
						min={1}
						onChange={event => form.setFieldValue("explevel", event as number)}
					/>
				</Group>
				<Button type="submit">Submit</Button>
			</Stack>
		</form>
	);
}

const useStyles = createStyles(theme => ({
	header: {
		position: "sticky",
		top: 0,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease",

		"&::after": {
			content: '""',
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2]}`,
		},
	},

	scrolled: {
		boxShadow: theme.shadows.sm,
	},
}));

interface TableScrollAreaProps {
	data: {
		id: number;
		name: string;
		ph_num: number;
		gender: string | null;
		explevel: number | null;
		no_of_customers: number | null;
	}[];
}

export function TableScrollArea({ data }: TableScrollAreaProps) {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);

	const rows = data.map(row => (
		<tr key={row.id}>
			<td>{row.name}</td>
			<td>{row.gender}</td>
			<td>{row.ph_num}</td>
			<td>{row.explevel}</td>
			<td>{row.no_of_customers}</td>
		</tr>
	));

	return (
		<ScrollArea sx={{ height: 300 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
			<Table sx={{ minWidth: 700 }}>
				<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
					<tr>
						<th>Name</th>
						<th>Gender</th>
						<th>Phone Number</th>
						<th>Exp Level</th>
						<th>Exp Level</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}

export default function App() {
	const { data } = useSWR(`${process.env.API_URL}/api/trainer`, userProfileFetcher);

	return (
		<AdminAppShell>
			<Paper withBorder p={5} style={{ margin: "10px auto", width: "400px" }}>
				<Title order={2} align="center">
					Add Trainer
				</Title>
				<QueryForm />
			</Paper>
			{data ? <TableScrollArea data={data.data} /> : <Loader />}
		</AdminAppShell>
	);
}
