<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import Logos from './components/Logos.svelte';
	import Experiences from './components/Experiences.svelte';

	onMount(() => {
		handleScroll();
	});

	function handleScroll() {
		const header = document.querySelector('.header') as HTMLDivElement;
		const bg = header.querySelector('.background') as HTMLDivElement;

		if (document.querySelector('.drawer.visible')) return;

		let blur = window.scrollY / window.innerHeight;
		blur = Math.max(Math.min(blur * 8, 8), 0);

		let opacity = window.scrollY / window.innerHeight;
		opacity = Math.max(Math.min(opacity * 2, 0.8), 0);

		header.style.backdropFilter = `blur(${blur}px)`;
		bg.style.opacity = `${opacity}`;

		if (window.scrollY > window.innerHeight / 2 - 160) {
			header.classList.add('collapsed');
		} else {
			header.classList.remove('collapsed');
		}
	}
</script>

<svelte:window onscroll={handleScroll} />

<div class="home-page relative min-h-screen w-full flex flex-col overflow-visible items-center">
	<Home />

	<Logos />

	<Experiences />

	<div class="min-h-screen h-screen w-full"></div>
</div>

<style lang="scss">
	.home-page::-webkit-scrollbar {
		width: 0;
	}
</style>
