<script>
	export let data;
	const { uniqueCategories } = data;
	let sortedUniqueCategories = Object.values(uniqueCategories);
	console.log(sortedUniqueCategories.constructor === Array);
	sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	console.log(sortedUniqueCategories);
</script>

<div class="compressed-content">
	<ul role="navigation">
		{#each sortedUniqueCategories as category}
			<li>
				<span>
					<a href="/blog/category/{category.title}">
						{@html category.title}
						({category.count})</a
					>
				</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		li {
			display: inline;
			background-color: var(--lightishAccent);
			color: var(--heading);
			// border: 1px solid var(--darkishAccent);
			line-height: 1;
			padding: 0.35em;
			margin: 0.35rem;

			&:hover {
				color: white;
				background-color: var(--heading);
			}
		}

		span {
			white-space: nowrap;
			padding: 0;
		}

		a {
			color: inherit;
			font-size: medium;
			font-weight: 500;
			text-decoration: none;
			// padding: 0.25em 0.5em;
			// margin: 0.25em;
		}
	}
</style>
