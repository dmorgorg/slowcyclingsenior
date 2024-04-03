// simpy counts all posts and returns the total number

import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () => {
	const posts = import.meta.glob(`$lib/posts/*/*.md`);

	return json(Object.keys(posts).length);
};
