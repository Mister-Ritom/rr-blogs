
<svelte:head>
	<title>RR-Blogs</title>
	<meta name="description" content="Create blogs and earn money" />
</svelte:head>

<script lang="ts">
  import Blog from './Blog.svelte';

	import { auth, db } from '$lib/firebase';
	import { collectionStore } from 'sveltefire';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { userStore } from 'sveltefire';
	import { collection, limit, orderBy, query } from 'firebase/firestore';
	const user = userStore(auth);

	const blogQuery = query(collection(db,"blogs"),orderBy("createdOn"),limit(15))
	const posts = collectionStore(db, blogQuery);

	function signIn() {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth,provider)
	}

</script>

{#if $user}
    <p>Hi {$user.displayName}</p>
{:else}
    <button on:click={signIn}>Sign in with Google</button>
{/if}

<ul id="blogs">
	{#each $posts as post}
		<Blog post={post}></Blog>
	{/each}
</ul>

<style>
	#blogs{
		display: grid;
		grid-template-columns: auto auto auto;
		list-style-type: none;
	}
</style>
