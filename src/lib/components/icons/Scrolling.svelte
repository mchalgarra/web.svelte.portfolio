<script lang="ts">
	let { className = '' } = $props();
</script>

<svg
	class="overflow-visible {className}"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M19 15L12 21L5 15"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M19 9L12 15L5 9"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M19 3L12 9L5 3"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style lang="scss">
	path {
		animation: scrolldown 2s infinite;

		&:nth-child(2) {
			animation-delay: 0.25s;
		}

		&:nth-child(3) {
			animation-delay: 0.5s;
		}
	}

	@keyframes scrolldown {
		0% {
			opacity: 0;
			transform: translate(0, -8px);
		}
		50% {
			opacity: 1;
		}
		75% {
			opacity: 0;
			transform: translate(0, 8px);
		}
		100% {
			opacity: 0;
			transform: translate(0, 8px);
		}
	}
</style>
