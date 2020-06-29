import Moon from "moon";
import home from "./view/home"

Moon.use({
	data: Moon.data.driver,
	http: Moon.http.driver,
	view: Moon.view.driver("#root")
});

Moon.run(() => {
	const postCount = 1

	return({
		http: [{
			method: "GET",
			url: `https://jsonplaceholder.typicode.com/posts/${postCount}`,
			headers: {
				"Content-type": "application/json"
			},
			onLoad: ({ http }) => {
				const data = {...JSON.parse(http.body), postCount}

				return {
					view: <home data=data />
				};
			},
		}]
	})}
);
