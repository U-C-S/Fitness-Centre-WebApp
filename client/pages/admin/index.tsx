import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { LoginForm } from "../../components/LoginForm";

const Home: NextPage = () => {
	return (
		<div
			style={{
				backgroundSize: "cover",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}>
			<Head>
				<title>Project Farmers</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<img
				src="https://wallpapercave.com/wp/wp3018790.jpg"
				style={{ height: "100%", objectFit: "fill", width: "100%" }}
			/>

			<LoginForm
				admin
				style={{
					position: "absolute",
					background: "hsla(50, 10%, 10%, 0.7)",
					borderRadius: "6px",
					boxShadow: "0 5px 30px rgba(0, 0, 0, 0.4)",
					backdropFilter: "blur(10px)",
					border: "2px solid hsla(0, 0%, 0%, 0.6)",
				}}
			/>
		</div>
	);
};

export default Home;
