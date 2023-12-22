<script>
	import FooterNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';
</script>

<footer>
	<div>
		<FooterNav />
	</div>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
