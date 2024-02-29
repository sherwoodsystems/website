<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import Footer from '$lib/layout/Footer.svelte';
	import Hamburger from '$lib/buttons/Hamburger.svelte';
	import '@picocss/pico/css/pico.min.css';
	import Menu from '$lib/layout/Menu.svelte';
	import MobileMenu from '$lib/layout/MobileMenu.svelte';
	let mobileMenuOpen = false; // A Svelte reactive variable to control menu state
</script>

<div id="wrapper">
	<header class="container">
		<div id="big-menu">
			<Menu />
		</div>
		<div id="mobile-menu">
			<MobileMenu />
		</div>
	</header>

	<main class="container-fluid">
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style>
	#wrapper {
		height: 100dvh;
	}
	main {
		margin: 0;
		padding: 0;
		min-height: 85dvh;
	}
	nav {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	li a {
		color: #f2682a;
		font-weight: 500;
	}
	li a:hover {
		text-decoration: none;
		font-weight: bolder;
	}
	footer {
		background: black;
	}

	#big-menu {
		display: block;
	}
	#mobile-menu {
		display: none;
	}

	/* Responsive styles */
	@media (max-width: 768px) {
		#mobile-menu {
			display: block;
		}

		#big-menu {
			display: none;
		}
	}
</style>
