<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>

		<ul>
			<ul class="new-item" ><a href="/new">New</a></ul>
			<ul class="nav-item" ><a href="/">Home</a></ul>		
			<ul class="nav-item" ><a href="/">Blogs</a></ul>
		</ul>

	</nav>
</header>

<style>

	nav {
		display: flex;
		width: max-content;
	}

	nav ul {
		display: flex;
		align-items: center;
		justify-content: center;
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
		background-color: var(--primary);
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
