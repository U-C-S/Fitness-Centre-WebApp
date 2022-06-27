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
				<link
					href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
				<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
				<link rel="stylesheet" href="css/flaticon.css" type="text/css" />
				<link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />

				<link rel="stylesheet" href="css/barfiller.css" type="text/css" />
				<link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
			</Head>
			<Script src="js/jquery-3.3.1.min.js"></Script>
			<Script src="js/bootstrap.min.js"></Script>
			<Script src="js/jquery.barfiller.js" defer></Script>
			<Script src="js/jquery.slicknav.js" defer></Script>
			<Script src="js/owl.carousel.min.js" defer></Script>

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
	);
}
