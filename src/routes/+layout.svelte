<script lang="ts">
	import '../app.scss';
	import type { Snippet } from 'svelte';
	import Header from '../lib/components/layout/Header.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main class="bg-primary min-h-screen">
	<div class="content relative overflow-x-visible">
		<Header />

		{@render children()}
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;

		width: 100vw;
		min-height: 100vh;

		box-sizing: border-box;

		& {
			box-sizing: border-box;
		}

		& > .content {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 100%;
			max-width: 77.5rem;
		}
	}
</style>
