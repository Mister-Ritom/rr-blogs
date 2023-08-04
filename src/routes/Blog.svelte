<script lang="ts">
	export let post: any;
</script>

	<section class="blog">
		<li class="blog-item">
			<div class="blog-text">
				<h2>{post.title}</h2>
				<p>{post.paragraph}</p>
			</div>
		</li>
	</section>

<style>
	.blog {
		width: 20rem;
		height: 10.8rem;
		overflow: hidden;
		background-color: var(--primary);
		padding: 1rem;
		margin: 8px;
		border-radius: 16px;
	}
	.blog-item {
		margin: auto;
	}
	.blog-text {
		margin-top: auto;
		margin-bottom: auto;
	}
	.blog h2 {
		height: 3.3rem;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.blog p {
		text-overflow: ellipsis;
	}
</style>

