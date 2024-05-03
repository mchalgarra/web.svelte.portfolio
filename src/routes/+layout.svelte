<script lang="ts">
	import '../app.scss';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main class="bg-primary">
	{@render children()}
</main>

<style lang="scss">
	main {
		width: 100vw;
		height: 100vh;

		box-sizing: border-box;

		& {
			box-sizing: border-box;
		}
	}
</style>
