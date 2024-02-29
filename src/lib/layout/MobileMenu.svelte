<script>
	import Hamburger from '$lib/buttons/Hamburger.svelte';
	import '@picocss/pico/css/pico.min.css';
	export let mobileMenuOpen = false; // A Svelte reactive variable to control menu state
</script>

<header class="container">
	<nav>
		<div class="row">
			<div class="logo-container">
				<a href="/"><img src="/logo.png" class="logo" alt="Sherwood Logo" /></a>
			</div>
			<div class="hamburger-container">
				<Hamburger bind:isOpen={mobileMenuOpen} />
			</div>
		</div>
		<div class="menu-items">
			<ul class="mobile-menu {mobileMenuOpen ? 'open' : ''}">
				<li><a href="/production">Event Production</a></li>
				<li><a href="/installations">Installations</a></li>
				<li><a href="/contact">Contact Us</a></li>
			</ul>
		</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		width: 100px;
		height: auto;
	}

	.hamburger-container {
		cursor: pointer;
	}

	.menu-items {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.mobile-menu {
		display: none;
		font-size: 1.5rem;
		flex-direction: column;
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease-in-out;
	}

	.mobile-menu.open {
		display: flex;
		max-height: 300px; /* Adjust based on the content height */
	}

	.logo-container {
		float: left;
	}

	.hamburger-container {
		float: right;
	}
</style>
