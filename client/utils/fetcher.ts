export const fetcher = (...args: [string, any]) => fetch(...args).then(res => res.json());

export const userProfileFetcher = async (...args: [string, any]) => {
	const p = localStorage.getItem("ph_num");
	const jwt = localStorage.getItem("jwt");

	let x = await fetch(args[0], {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt}`,
		},
	});
	return await x.json();
};
