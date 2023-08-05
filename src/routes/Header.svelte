<script lang="ts">
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/firebase';
	import ProviderSignIn from "$lib/LoginWithGoogle.svelte"
	
	const user = userStore(auth);

	let dropDown: HTMLDivElement

	function signOut() {
		auth.signOut()
	}
	function showDropdown() {
		if(dropDown.classList.contains("hidden")){
			dropDown.classList.remove("hidden")
		}
		else {
			dropDown.classList.add("hidden")
		}
	}

</script>

<header>
	<nav>
		<ul>
			<li class="new-item" ><a href="/new">New</a></li>
			<li class="nav-item" ><a href="/">Home</a></li>		
			<li class="nav-item" ><a href="/blogs">Blogs</a></li>
		</ul>
		{#if $user}
		<button on:click={showDropdown} class="user-item">
			<img width="48px" height="48px" src={$user.photoURL} alt={`${$user.displayName}'s profile picture`}/>
			<p>Hi {$user.displayName}</p>
			<div bind:this={dropDown} class=" hidden user-dropdown">
				<ul>
					<li class="dropdown-item" ><button on:click={signOut}>Sign out</button></li>
					<li class="dropdown-item" ><a href="/settings">Settings</a></li>
				</ul>
			</div>
		</button>
		{:else}
			<ProviderSignIn/>
		{/if}
	</nav>
</header>

<style>

	nav {
		display: flex;
		width: auto;
	}

	nav ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
	}

	.user-item {
		all: unset;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		width: max-content;
		margin-right: 8px;
	}

	.user-dropdown {
		position: absolute;
		margin-top: 7cm;
		margin-right: 2cm;
		width: max-content;
		height: max-content;
		padding: 1rem;
		background-color: var(--nav-bg);
		border-radius: 1rem;
	}

	.user-dropdown ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		margin: auto;
		width: max-content;
	}

	.dropdown-item{
		width: max-content;
		margin-top: 8px;
		cursor: pointer;
		padding: 1rem;
		border-radius: 1rem;
		background-color: var(--nav-item-bg);
		margin-left: auto;
		margin-right: auto;
	}

	.dropdown-item:hover {
		background-color: var(--nav-bg);
	}

	.dropdown-item button {
		all: unset;
		font-size: medium;
	}

	.user-item img {
		margin-bottom: 2px;
		border-radius: 50%;
	}

	.new-item {
		background-color: var(--accent);
		margin-left: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		transition: 0.4s ease-in-out;
	}

	.new-item:hover {
		background-color: var(--secondary);
		transform: translate(0,-3px)
	}

	.nav-item {
		background-color: var(--nav-item-bg);
		margin-left: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		transition: 0.4s ease-in-out;
	}

	.nav-item:hover {
		transform: translate(0,-3px)
	}

	a {color: var(--text);}

</style>
