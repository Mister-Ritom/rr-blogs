<script lang="ts">
	import User from "./User.svelte";

	export let post: any;

	function getParagraphText() {
		let str = post.paragraph.substring(0,180)
		if (post.paragraph.length>180){
			str+=" …"
		}
		return str
	}

</script>

	<a href={`post?id=${post.id}&userId=${post.createdBy}`} class="blog">
		<li class="blog-item">
			<div class="blog-text">
				<h2>{post.title}</h2>
				<p>{@html getParagraphText()}</p>
			</div>
			<User userId={post.createdBy}/>
		</li>
	</a>

<style>
	.blog {
		width: 20rem;
		overflow: hidden;
		background-color: var(--primary);
		padding: 1rem;
		margin: 8px;
		border-radius: 16px;
		transition: 0.6s ease-in-out;
		color: var(--text);
	}
	.blog:hover {
		background-color: var(--accent);
		color: white;
	}
	.blog-item {
		margin: auto;
	}
	.blog-text {
		margin-top: auto;
		margin-bottom: auto;
	}
	.blog:hover h2 {
		color: var(--primary);
	}
	h2 {
		text-overflow: ellipsis;
		overflow: hidden;
		padding: 0;
		margin: 0;
		color: rgb(97, 255, 229);
		transition: 0.6s ease-in-out;
	}
	p {
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 3px;
		margin-bottom: 8px;
	}
</style>

