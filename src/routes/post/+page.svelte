<script>
    import { page } from '$app/stores';
	import { db } from '$lib/firebase';
	import { docStore } from 'sveltefire';

    const url = $page.url;
    const id = url.searchParams.get("id")
    const userId = url.searchParams.get("userId")
    const post = docStore(db,`userBlogs/${userId}/blogs/${id}`)

</script>

<svelte:head>
    <title>{$post?.title??"RR-Blogs"}</title>
    <meta name="description" content={`A blog of RR-Blogs about ${$post?.title??""}`}>
</svelte:head>

{#if !id || !userId}
    <h1>No Blog found</h1>
{:else}

{#if $post}
<h1>{$post.title}</h1>
<p>{@html $post.paragraph}</p>
{/if}
{/if}