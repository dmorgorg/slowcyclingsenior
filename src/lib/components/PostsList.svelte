<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li class="card">
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h3>
						{post.title}
					</h3>
					<span class="date">&nbsp; ({post.date})</span>
				</a>
			</article>

			<p>{@html post.excerpt}</p>
		</li>
	{/each}
</ul>

<style>
	h3 {
		display: inline;
	}
	.date {
		font-size: 0.8em;
		vertical-align: text-bottom;
	}
	p {
		margin-top: 0.5em;
		margin-bottom: 0;
	}
	li {
		margin-bottom: 2em;
	}
	img {
		margin-top: 0;
	}
	/* .card {
		background-color: white;
	} */
</style>
