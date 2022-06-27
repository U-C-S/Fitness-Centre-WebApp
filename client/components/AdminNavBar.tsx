import React, { useState } from "react";
import { createStyles, Navbar, Group, Code } from "@mantine/core";
import { BellRinging, Logout, User, Train } from "tabler-icons-react";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");
	return {
		navbar: {
			backgroundColor: theme.colors[theme.primaryColor][2],
		},

		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${theme.colors[theme.primaryColor][7]}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: "flex",
			alignItems: "center",
			textDecoration: "none",
			fontSize: theme.fontSizes.sm,
			color: theme.black,
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			"&:hover": {
				backgroundColor: theme.colors[theme.primaryColor][5],
			},
		},

		linkIcon: {
			ref: icon,
			color: theme.black,
			opacity: 0.75,
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			"&, &:hover": {
				backgroundColor: theme.colors[theme.primaryColor][7],
			},
		},
	};
});

const data = [
	{ link: "/admin/view/customers", label: "Customers", icon: User },
	{ link: "/admin/view/trainers", label: "Trainers", icon: Train },
	{ link: "/admin/view/queries", label: "Queries", icon: BellRinging },
];

export function AdminNavbar() {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState("Billing");

	const links = data.map(item => (
		<Link href={item.link}>
			<a
				className={cx(classes.link, { [classes.linkActive]: item.label === active })}
				key={item.label}
				onClick={event => {
					setActive(item.label);
				}}>
				<item.icon className={classes.linkIcon} />
				<span>{item.label}</span>
			</a>
		</Link>
	));

	return (
		<Navbar height={"100vh"} width={{ sm: 230 }} p="md" className={classes.navbar}>
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<img src="/img/logo.png" alt="" />
				</Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<a href="#" className={classes.link} onClick={event => event.preventDefault()}>
					<Logout className={classes.linkIcon} />
					<span>Logout</span>
				</a>
			</Navbar.Section>
		</Navbar>
	);
}
