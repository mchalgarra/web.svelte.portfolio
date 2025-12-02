<script lang="ts">
	import { goto } from '$app/navigation';
	import { SECTIONS } from '../../constants/sections.constant';
	import type { ISection } from '../../interfaces/section.interface';
	import Logo from '../icons/Logo.svelte';
	import Drawer from './Drawer.svelte';
	import { CurrentSection } from './current-section.svelte';

	const currentSection = new CurrentSection();

	let drawer = $state(false);
	let drawerMounted = $state(false);

	let scrollY = $state(0);
	let innerHeight = $state(0);

	let _header: HTMLDivElement;
	let _bg: HTMLDivElement;

	function toggleDrawer() {
		drawer = !drawer;
		drawerMounted = true;
	}

	function handleLogoClick() {
		currentSection.name = 'About';
		drawer = false;
	}

	function setSection(section: ISection) {
		currentSection.name = section.name;
		goto(`#${section.name}`);
	}

	$effect(() => {
		if (drawer) {
			_header.style.backdropFilter = 'blur(0)';
			_bg.style.opacity = '0';
		} else {
			setTimeout(() => {
				if (!drawer) {
					let blur = window.scrollY / window.innerHeight;
					blur = Math.max(Math.min(blur * 8, 8), 0);

					let opacity = window.scrollY / window.innerHeight;
					opacity = Math.max(Math.min(opacity * 2, 0.8), 0);

					_header.style.backdropFilter = `blur(${blur}px)`;
					_bg.style.opacity = `${opacity}`;
				}
			}, 1000);
		}
	});
</script>

<svelte:window bind:innerHeight onscroll={() => (scrollY = window.scrollY)} />

<div
	bind:this={_header}
	class:collapsed={innerHeight && scrollY > innerHeight / 2 - 160}
	class="flex fixed top-0 items-center justify-center header z-20 w-full"
>
	<div
		bind:this={_bg}
		class="background absolute top-0 left-0 w-full h-full bg-primary z-[-1]"
	></div>

	<div class="flex items-center justify-between w-full h-full max-w-[1240px] px-6 md:px-10">
		{#each SECTIONS as section, index}
			<button
				class:active={currentSection.name === section.name}
				class="section flex w-1/6 items-center justify-center h-fit py-3 text-white text-md text-light font-medium uppercase hover:text-accent hover:scale-105 transition-all"
				onclick={() => setSection(section)}
			>
				{section.name}
			</button>

			{#if index === 2}
				<a
					href="/"
					class="flex items-center justify-center hover:scale-105 transition-all"
					onclick={handleLogoClick}
				>
					<div>
						<Logo />
					</div>
				</a>
			{/if}
		{/each}

		<button class:active={drawer} class="drawer" onclick={toggleDrawer}>
			{#each Array(3) as _}
				<div class="transition-all"></div>
			{/each}
		</button>
	</div>
</div>

{#if drawerMounted}
	<Drawer show={drawer} onclose={() => (drawer = false)} />
{/if}

<style lang="scss">
	@use 'sass:math';

	.header {
		gap: 1rem;

		width: 100%;
		height: 10rem;

		transition: height 0.2s ease;

		& > .background {
			opacity: 0;
		}

		@media (min-width: 660px) {
			&.collapsed {
				height: 5.5rem;

				& a {
					transform: scale(0.7);

					&:hover {
						transform: scale(0.75);
					}
				}
			}
		}

		@media (min-width: 790px) {
			&.collapsed {
				height: 6.25rem;
			}
		}
	}

	a {
		width: 6rem;

		cursor: pointer;

		& > div {
			width: 4.25rem;
			max-width: 100%;
		}
	}

	button.section {
		position: relative;

		cursor: pointer;

		&::after {
			content: '';

			position: absolute;
			bottom: 0;
			left: 50%;

			width: 2.25rem;
			height: 2px;

			border-radius: 1px;
			background-color: var(--pfl-accent);

			transform: translateX(-50%) scaleX(0);
			transform-origin: center center;

			transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
		}

		&:hover::after {
			transform: translateX(-50%) scaleX(0.5);
		}

		&.active {
			color: var(--pfl-accent);

			transform: scale(1.05);

			&::after {
				transform: translateX(-50%) scaleX(1);
			}
		}
	}

	button.drawer {
		--height: calc(2px * 3 + 0.375rem * 2);

		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.375rem;

		width: 1.5rem;
		height: 1.5rem;

		background-color: transparent;
		border: none;
		cursor: pointer;

		div {
			width: 100%;
			height: 2px;

			border-radius: 1px;
			background-color: var(--pfl-primary);

			transition-delay: 1s;

			&:first-child {
				transform-origin: right center;
			}

			&:nth-child(2) {
				transform-origin: right;
			}

			&:last-child {
				transform-origin: right center;
			}
		}

		&.active {
			& > div {
				width: calc(var(--height) * math.sqrt(2));

				background-color: var(--pfl-text-100);

				transition-delay: 0.05s;

				&:first-child {
					transform: rotate(-45deg);
					translate: 0 -1px;
				}

				&:nth-child(2) {
					transform: scale(0);
				}

				&:last-child {
					transform: rotate(45deg);
					translate: 0 1px;
				}
			}
		}
	}

	@media (max-width: 789px) {
		.header {
			height: 7.5rem;
		}

		a {
			width: 2.5rem;
		}

		button.section {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 659px) {
		.header {
			height: 5rem;

			& a {
				width: 2rem;
			}

			& button.section {
				display: none;
			}

			& button.drawer {
				display: flex;
			}
		}
	}
</style>
