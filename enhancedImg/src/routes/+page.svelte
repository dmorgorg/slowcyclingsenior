<script>
	const pictures = import.meta.glob('./images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		query: { enhanced: true }
	});

	console.log(pictures);
</script>

<enhanced:img class="image" src="./images/2022-08-04-042944.jpg" alt="1" />

<enhanced:img
	src="./images/2022-08-04-044035.jpg?w=1280;640;400"
	sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
/>

<style>
	image {
		width: 100%;
		height: auto;
		/* width: auto;
		height: 100%; */
	}
</style>
