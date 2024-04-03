export const load = async ({ url, fetch }) => {
	const res = await fetch(`${url.origin}/api/posts.json`);
	let posts = await res.json();

	let uniqueCategories = {};

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			// if category exists, increment count
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1;
			} else {
				// if category does not exist, add it
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title > b.title);

	return {
		sortedUniqueCategories: sortedUniqueCategories,
		uniqueCategories: uniqueCategories
	};
};
