
<svelte:head>
	<title>RR-Blogs</title>
	<meta name="description" content="Create blogs and earn money" />
</svelte:head>

<script lang="ts">
  import Blog from '../lib/Blog.svelte';

	import { auth, db } from '$lib/firebase';
	import { collectionStore } from 'sveltefire';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { userStore } from 'sveltefire';
	import { collection, doc, limit, orderBy, query, setDoc } from 'firebase/firestore';
	const user = userStore(auth);
//TODO add following users
	const blogQuery = query(collection(db,"userBlogs","5EBBwarTvSRH96KOx48WYTyT4Lb2","blogs"),orderBy("createdOn"),limit(15))
	const posts = collectionStore(db, blogQuery);

	async function signIn() {
		const provider = new GoogleAuthProvider()
		const cred = await signInWithPopup(auth,provider)
		const user = cred.user
		const userDoc = doc(db,"users",user.uid)
		setDoc(userDoc,{
			uid:user.uid,
			name:user.displayName,
			email:user.email,
			profilePic:user.photoURL,
			createdOn:Date.now()
		})
	}

	function logOut() {
		auth.signOut()
	}

</script>

{#if $user}
	<img width="48px" height="48px" src={$user.photoURL} alt={`${$user.displayName}'s profile picture`}/>
    <p>Hi {$user.displayName}</p>
	<button on:click={logOut}>Log out</button>
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
		margin-left: auto;
		margin-right: auto;
	}

	@media(max-width:720px) {
		#blogs {
			display: flex;
			flex-direction: column;
		}
	}

</style>
