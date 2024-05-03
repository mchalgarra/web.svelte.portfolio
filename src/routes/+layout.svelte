<script lang="ts">
	import '../app.scss';
	import type { Snippet } from 'svelte';
	import Header from '../lib/components/layout/Header.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main class="bg-primary">
	<div class="content overflow-x-hidden">
		<Header></Header>

		{@render children()}
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;

		width: 100vw;
		height: 100vh;

		box-sizing: border-box;

		& {
			box-sizing: border-box;
		}

		& > .content {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 100%;
			height: 100%;
			max-width: 77.5rem;
		}
	}
</style>
