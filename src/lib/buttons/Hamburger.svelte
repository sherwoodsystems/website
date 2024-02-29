<script>
	export let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div id="nav-icon3" class:open={isOpen} on:click={toggleMenu} role="menu" tabindex="0">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>

<style>
	#nav-icon3 {
		width: 60px;
		height: 45px;
		position: relative;
		margin: 50px auto;
		transform: rotate(0deg);
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 9px;
		width: 100%;
		background: #d3531a;
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
	}

	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 18px;
	}

	#nav-icon3 span:nth-child(4) {
		top: 36px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		transform: rotate(45deg);
	}

	#nav-icon3.open span:nth-child(3) {
		transform: rotate(-45deg);
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
