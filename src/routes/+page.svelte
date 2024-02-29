<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';

	// import Swiper styles
	import 'swiper/css';

	function navigateToProd() {
		goto('production/contact');
	}

	function navigateToInstallations() {
		goto('installations/contact');
	}

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Autoplay],
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		<div class="swiper-slide">
			<img src="hero/1.jpg" alt="Slide 1" />
		</div>
		<div class="swiper-slide">
			<img src="hero/2.jpg" alt="Slide 2" />
		</div>
		<div class="swiper-slide">
			<img src="hero/3.jpg" alt="Slide 3" />
		</div>
		<div class="swiper-slide">
			<img src="hero/4.jpg" alt="Slide 3" />
		</div>
	</div>
	<!-- If we need navigation buttons -->
	<div class="swiper-button-prev">prev</div>
	<div class="swiper-button-next">next</div>
</div>

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
			<p>Looking for a new sound system, projector, lighting, or anything? Let us know!</p>
			<button onclick={navigateToInstallations}>Contact Installations</button>
		</article>
	</div>
</div>

<style>
	.swiper {
		width: 100%;
		height: 700px; /* Adjust height as needed */
		overflow: hidden;
		margin-bottom: 1rem;
	}

	.swiper-slide {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		max-height: 100%;
		width: 100%;
		object-fit: cover;
	}

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
