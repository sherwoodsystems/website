<script>
	import { onMount } from 'svelte';

	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';

	// import Swiper styles
	import 'swiper/css';

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
