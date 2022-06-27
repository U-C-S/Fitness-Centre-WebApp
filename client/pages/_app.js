import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import Script from "next/script";

export default function App(props) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<meta charSet="UTF-8" />
				<meta name="description" content="Gym Template" />
				<meta name="keywords" content="Gym, unica, creative, html" />
				<link rel="stylesheet" href="css/style.css" type="text/css" />
				<link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
					crossorigin="anonymous"
				/>

				<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
				<link rel="stylesheet" href="css/flaticon.css" type="text/css" />
			</Head>
			<>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
					crossorigin="anonymous"></Script>

				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme: "dark",
						primaryColor: "orange",
						primaryShade: 6,
					}}>
					<Component {...pageProps} />
				</MantineProvider>
			</>
		</>
	);
}
