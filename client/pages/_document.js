import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		return (
			<Html>
				<Head>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
