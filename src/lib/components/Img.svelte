<script>
	export let url;
	export let alt = '';
	export let caption;
</script>

<img src={url} {alt} />
<!-- <enhanced:img {url} {alt} /> -->

{#if caption}
	<div class="caption">{caption}</div>
{/if}
