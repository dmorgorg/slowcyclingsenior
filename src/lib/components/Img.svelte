<script>
	export let url;
	export let alt = '';
	export let caption;
</script>

<enhanced:img src={url} {alt} />

{#if caption}
	<div class="caption">{caption}</div>
{/if}
