<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import HeroSlides from '$lib/layout/HeroSlides.svelte';

	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';

	// import Swiper styles
	import 'swiper/css';

	let photos = [
		{ largeURL: 'hero/1.jpg', thumbnailURL: '', width: 0, height: 0 }, // Add the correct thumbnail URL and dimensions if necessary
		{ largeURL: 'hero/2.jpg', thumbnailURL: '', width: 0, height: 0 },
		{ largeURL: 'hero/3.jpg', thumbnailURL: '', width: 0, height: 0 },
		{ largeURL: 'hero/4.jpg', thumbnailURL: '', width: 0, height: 0 },
		{ largeURL: 'hero/5.jpg', thumbnailURL: '', width: 0, height: 0 }
	];

	function navigateToProd() {
		goto('production/contact');
	}

	function navigateToInstallations() {
		goto('installations/contact');
	}
</script>

<HeroSlides {photos} />
<div class="container">
	<h1>Technical support for the event and entertainment industry</h1>

	<div class="grid">
		<article>
			<h3>Event Production</h3>
			<p>From corporate events to music festivals, we will make your live event a success.</p>

			<button onclick={navigateToProd}>Contact Production</button>
		</article>
		<article>
			<h3>Installations</h3>
			<p>
				Sherwood can provide the installation of fully integrated multimedia systems that can be
				operated by anyone
			</p>
			<button onclick={navigateToInstallations}>Contact Installations</button>
		</article>
	</div>
</div>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	button {
		width: 300px;
		background: #f2682a;
		border: none;
	}

	button:hover {
		background: #c33d10;
	}
</style>
