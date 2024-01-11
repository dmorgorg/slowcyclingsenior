<script>
	export let src;
	export let alt = '';
	export let caption;
</script>

<img {src} {alt} />
<!-- <enhanced:img {src} {alt} /> -->

{#if caption}
	<div class="caption">{caption}</div>
{/if}
