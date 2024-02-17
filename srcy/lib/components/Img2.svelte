<script>
	import { fade } from 'svelte/transition';
	export let src = '';
	export let alt = '';
	export let caption = '';
	let galleryActive = false;
	let imagesArray = [];
	let altsArray = [];
	let currentSlideIndex = 0;

	function hasDuplicates(array) {
		return new Set(array).size !== array.length;
	}

	const next = () => {
		console.log(currentSlideIndex + ', ' + imagesArray.length);
		currentSlideIndex++;
		if (currentSlideIndex >= imagesArray.length) {
			currentSlideIndex = 0;
		}
	};

	function gallery(e) {
		// convert collection to array of filenames
		imagesArray = Array.from(document.images).map((i) => i.src);
		altsArray = Array.from(document.images).map((i) => i.alt);
		// if imagesArray has duplicates, assume cover image is duplicated in post and remove cover image
		if (hasDuplicates(imagesArray)) {
			imagesArray = imagesArray.slice(1);
		}

		if (imagesArray.length < altsArray.length) {
			// after removing duplicates, altsArray will be longer than imagesArray if cover image is duplicated in post
			// remove first element of altsArray to match length of imagesArray
			altsArray = altsArray.slice(1);
		}

		currentSlideIndex = imagesArray.findIndex((element) => element.includes(src));
		galleryActive = true;
	}
</script>

<img {src} {alt} on:click={gallery} on:keypress={gallery} />
{#if caption}
	<div class="caption">{caption}</div>
{/if}
{#if galleryActive}
	{#each [imagesArray[currentSlideIndex]] as src (currentSlideIndex)}
		<img
			class="gallery"
			transition:fade
			src={imagesArray[currentSlideIndex]}
			alt={altsArray[currentSlideIndex]}
		/>
	{/each}
	<button on:click={next}>Next!</button>
{/if}

<style lang="scss">
	button {
		position: absolute;
		z-index: 100;
	}
	img {
		width: 100%;
		height: auto;

		margin: 0 auto;

		&.gallery {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 100;
			// max-height: 80%;
			max-width: 100%;
		}
	}
</style>
