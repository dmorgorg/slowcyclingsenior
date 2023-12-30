/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'slowcyclingsenior.ca';
export const siteDescription =
	'the ramblings of an opportunistic photographer, unrepentant geek, inveterate nomad, terminal cynic, opinionated curmudgeon and occasional (but invariably slow) cyclist';
export const siteURL = 'slowcyclingsenior.ca';
export const siteLink = 'https://github.com/dmorgorg/slowcyclingsenior';
export const siteAuthor = 'Dave Morgan';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	}
	// {
	// 	title: 'Contact',
	// 	route: '/contact'
	// }
];
