<script>
	import { goto } from '$app/navigation';
	import PhotoSwipe from '$lib/PhotoSwipe.svelte';

	const images = [
		{
			largeURL: 'production/1.jpg',
			thumbnailURL: 'production/thumbnails/1_tn.jpg',
			width: 3000,
			height: 1996
		},
		{
			largeURL: 'production/2.jpg',
			thumbnailURL: 'production/thumbnails/2_tn.jpg',
			width: 4032,
			height: 3024
		},
		{
			largeURL: 'production/3.jpg',
			thumbnailURL: 'production/thumbnails/3_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/4.jpg',
			thumbnailURL: 'production/thumbnails/4_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/5.jpg',
			thumbnailURL: 'production/thumbnails/5_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/6.jpg',
			thumbnailURL: 'production/thumbnails/6_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/7.jpg',
			thumbnailURL: 'production/thumbnails/7_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/8.jpg',
			thumbnailURL: 'production/thumbnails/8_tn.jpg',
			width: 2048,
			height: 1365
		},
		{
			largeURL: 'production/9.jpg',
			thumbnailURL: 'production/thumbnails/9_tn.jpg',
			width: 2048,
			height: 1365
		}
	];

	function getQuote() {
		goto('/production/contact');
	}
</script>

<div class="container">
	<img class="hero" src="/UWConvocation.jpeg" alt="UW Convocation" />
	<h1>Event Production</h1>
	<p>
		At Sherwood, we provide a comprehensive event production solution. Specializing in audio,
		lighting, video, staging, and rigging, our team ensures that we bring your vision to life
		seamlessly.
	</p>
	<div id="button-feature" style="display:flex;flex-direction: column;align-items: center;">
		<button on:click={getQuote}>Get a Quote</button>
	</div>
	<h2>Live Performances</h2>
	<p>
		With extensive experience in live event production, we understand the unique dynamics of live
		performances. We support a diverse array of live performances, catering to a wide range of
		artistic expressions. From electrifying music festivals that pulsate with energy to captivating
		theatrical productions that transport audiences to other worlds, we are dedicated to bringing
		visions to life on stage.
	</p>
	<PhotoSwipe galleryID="my-test-gallery" {images} />

	<h2>Conferences and Corporate AV</h2>
	<p>
		In the realm of event production, Sherwood stands as a beacon of versatility, adeptly supporting
		a spectrum of conferences and corporate gatherings. From the intricacies of small-scale
		boardroom assemblies to the grandeur of large-scale industry symposiums, we have the resources
		to suit the unique essence of each event.
	</p>
	<PhotoSwipe galleryID="my-test-gallery" {images} />
	<h3>Virtual Events</h3>
	<p>
		We pride ourselves on seamlessly transitioning into the digital realm to support virtual and
		streaming events. With expertise honed through years of live event coordination, we bring the
		same level of professionalism and creativity to the online space. We have the infrastructure to
		support virtual conferences, hybrid meetings, webinars, and more. We offer comprehensive
		solutions tailored to our clients' needs, ensuring smooth execution and engaging experiences for
		attendees worldwide.
	</p>
	<PhotoSwipe galleryID="my-test-gallery" {images} />
</div>

<style>
	.hero {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 600px;
	}

	h1 {
		padding-top: 1rem;
	}

	button {
		background-color: #f2682a;
		min-width: 300px;
		color: white;
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 5px;
		margin-top: 1rem;
		display: inline-block;
		border: none;
	}

	button:hover {
		background-color: #d3531a;
	}

	.clean {
		text-decoration: none;
		color: inherit;
	}

	blockquote {
		font-style: italic;
		overflow: hidden;
		position: relative;
		line-height: 1.45em;
		margin: 20px 0;
	}

	article p {
		display: inline;
		color: inherit;
	}

	.featured {
		display: flex;
		flex-direction: row;
		transition: transform 0.3s ease;
	}

	.featured:hover {
		transform: translate(2px, -3px);
	}

	.article-img {
		object-fit: cover;
		flex: 0 0 auto;
		width: 150px;
		margin-right: 1rem;
	}
</style>
