<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import '$lib/assets/scss/global.scss';
	import Banner from '$lib/components/Banner.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	// import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	export let data;

	const transitionIn = { delay: 550, duration: 550 };
	const transitionOut = { duration: 500 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		// preloadCode(...navRoutes);
	});
</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="wrapper">
	<Header />
	<div class="layout" class:open={$isMenuOpen}>
		<main>
			<Banner />
			{#key data.path}
				<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
					<slot />
				</main>
			{/key}
		</main>
		<Footer />

		<!-- <InjectSpeedInsights /> -->
	</div>
</div>
