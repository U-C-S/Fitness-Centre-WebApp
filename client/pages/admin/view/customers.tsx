import React, { useState } from "react";
import { createStyles, Table, ScrollArea, Loader } from "@mantine/core";
import { AdminAppShell } from "../../../components/AdminAppShell";
import useSWR from "swr";
import { userProfileFetcher } from "../../../utils/fetcher";

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
		age: number | null;
		ph_num: number;
		gender: string | null;
		training_info: {
			trainer: {
				name: string;
			} | null;
			plan: number;
		} | null;
	}[];
}

export function TableScrollArea({ data }: TableScrollAreaProps) {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);

	const rows = data.map(row => (
		<tr key={row.ph_num}>
			<td>{row.name}</td>
			<td>{row.age}</td>
			<td>{row.gender}</td>
			<td>{row.ph_num}</td>
			<td>{row.training_info?.plan}</td>
			<td>{row.training_info?.trainer?.name}</td>
		</tr>
	));

	return (
		<ScrollArea sx={{ height: 300 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
			<Table sx={{ minWidth: 700 }}>
				<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Phone Number</th>
						<th>plan</th>
						<th>Trainer Name</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}

export default function App() {
	const { data } = useSWR(process.env.API_URL + "/api/user/all", userProfileFetcher);

	return (
		<AdminAppShell>
			<h1 style={{ textAlign: "center" }}>Customers List</h1>
			{data ? <TableScrollArea data={data.data} /> : <Loader />}
		</AdminAppShell>
	);
}
