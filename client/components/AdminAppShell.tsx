import { AppShell, Navbar, Header } from "@mantine/core";
import { AdminNavbar } from "./AdminNavBar";

export function AdminAppShell({ children }: { children: React.ReactNode }) {
	return (
		<AppShell
			padding="md"
			navbar={<AdminNavbar />}
			styles={theme => ({
				main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
			})}>
			{children}
		</AppShell>
	);
}
