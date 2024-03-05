<script>
	import { onMount } from 'svelte';

	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';

	// import Swiper styles
	import 'swiper/css';

	// Declare the photos prop
	export let photos = [];

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Autoplay],
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			autoplay: {
				delay: 4500,
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
	<div class="swiper-wrapper">
		<!-- Use #each to loop through photos -->
		{#each photos as photo (photo.largeURL)}
			<div class="swiper-slide">
				<img src={photo.largeURL} alt="Slideshow photo" />
			</div>
		{/each}
	</div>

	<div class="swiper-button-prev">prev</div>
	<div class="swiper-button-next">next</div>
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

	@media (max-width: 768px) {
		.swiper {
			height: 300px; /* Reduce height for mobile */
		}
	}
</style>
