import React, { useState } from "react";
import { AdminAppShell } from "../../../components/AdminAppShell";
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Loader } from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

const useStyles = createStyles(theme => ({
	rowSelected: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
				: theme.colors[theme.primaryColor][0],
	},
}));

interface TableSelectionProps {
	data: { name: string; email: string; created_at: Date; query: string; id: string }[];
}

export function TableSelection({ data }: TableSelectionProps) {
	const { classes, cx } = useStyles();
	const [selection, setSelection] = useState(["1"]);
	const toggleRow = (id: string) =>
		setSelection(current => (current.includes(id) ? current.filter(item => item !== id) : [...current, id]));
	const toggleAll = () =>
		setSelection(current => (current.length === data.length ? [] : data.map(item => item.id)));

	const rows = data.map(item => {
		const selected = selection.includes(item.id);
		return (
			<tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
				<td>
					<Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
				</td>
				<td>
					<Group spacing="sm">
						<Text size="sm" weight={500}>
							{item.name}
						</Text>
					</Group>
				</td>
				<td>{item.email}</td>
				<td>{item.created_at.toLocaleString()}</td>
				<td>{item.query}</td>
			</tr>
		);
	});

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800 }} verticalSpacing="sm">
				<thead>
					<tr>
						<th style={{ width: 40 }}>
							<Checkbox
								onChange={toggleAll}
								checked={selection.length === data.length}
								indeterminate={selection.length > 0 && selection.length !== data.length}
								transitionDuration={0}
							/>
						</th>
						<th>Name</th>
						<th>Email</th>
						<th>Time</th>
						<th>Comment</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}

export default function App() {
	const { data } = useSWR(process.env.API_URL + "/api/query", fetcher);
	console.log(data);

	return (
		<AdminAppShell>
			<h1 style={{ textAlign: "center" }}>Queries</h1>
			{data ? <TableSelection data={data.data} /> : <Loader />}
		</AdminAppShell>
	);
}
