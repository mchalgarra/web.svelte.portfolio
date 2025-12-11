<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import Logos from './components/Logos.svelte';
	import Experiences from './components/Experiences.svelte';
	import MainSkills from './components/MainSkills.svelte';
	import Resume from './components/Resume.svelte';
	import Contact from './components/Contact.svelte';
	import Expertise from './components/Expertise.svelte';
	import Work from './components/Work.svelte';

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

	function handleMouseMove(event: MouseEvent) {
		const { clientX: x, clientY: y } = event;

		// Get memphis elements

		const memphisElements = document.querySelectorAll<HTMLElement>('.memphi:not(.ignore-movement)');
		if (memphisElements.length === 0) return;

		// Move memphis
		memphisElements.forEach((element) => {
			const el = element.querySelector('svg');
			if (!el) return;

			let dx = x / 100;
			let dy = y / 100;

			const isInverted = element.classList.contains('inverted');
			if (isInverted) {
				dx = -dx;
				dy = -dy;
			}

			el.style.transform = `translate(${dx}px, ${dy}px)`;
		});
	}
</script>

<svelte:window onscroll={handleScroll} />

<svelte:body onmousemove={handleMouseMove} />

<div class="home-page relative min-h-screen w-full flex flex-col overflow-visible items-center">
	<Home />

	<Logos />

	<Expertise />

	<Work />

	<MainSkills />

	<Experiences />

	<Contact />

	<Resume />
</div>

<style lang="scss">
	.home-page::-webkit-scrollbar {
		width: 0;
	}
</style>
