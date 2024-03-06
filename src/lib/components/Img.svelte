<script>
	export let src;
	export let alt = '';
	export let caption = '';
</script>

{#if alt && caption}
	<figure>
		<img {src} {alt} />
		<figcaption class="caption">{caption}</figcaption>
	</figure>
{:else if alt}
	<figure>
		<img {src} {alt} />
	</figure>
{/if}
