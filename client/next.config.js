const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "http://localhost:3100",
	},
};

module.exports = nextConfig;
