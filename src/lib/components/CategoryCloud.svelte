<script>
	export let data;
	const { uniqueCategories } = data;
	// let sortedUniqueCategories = Object.values(uniqueCategories);
	// sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => a.title < b.title);
	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title < b.title);
	// console.log(uniqueCategories.constructor === Array);
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
			padding: 0 0.5rem;
			background-color: var(--lightishAccent);
			border: 1px solid black;
			line-height: 2;

			margin: 0.25rem;
		}

		span {
			white-space: nowrap;
		}

		a {
			color: var(--heading);
			font-size: medium;
			font-weight: 500;
			text-decoration: none;
			padding: 0;

			&:hover {
				color: var(--accent);
			}
		}
	}
</style>
