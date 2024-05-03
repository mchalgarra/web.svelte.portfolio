<script lang="ts">
	import { SECTIONS } from '../../constants/sections.constant';
	import Logo from '../icons/Logo.svelte';
	import Drawer from './Drawer.svelte';

	let { activeSection = 'About' } = $props();

	let drawer = $state(false);
	let drawerMounted = $state(false);

	function toggleDrawer() {
		drawer = !drawer;
		drawerMounted = true;
	}
</script>

<div class="flex items-center justify-between px-6 md:px-10 header z-20">
	{#each SECTIONS as section, index}
		<button
			class:active={activeSection === section.name}
			class="section flex w-1/6 items-center justify-center h-fit py-3 text-white text-md text-light font-medium uppercase hover:text-accent hover:scale-105 transition-all"
		>
			{section.name}
		</button>

		{#if index === 2}
			<a href="/" class="hover:scale-105 transition-all">
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

{#if drawerMounted}
	<Drawer show={drawer} />
{/if}

<style lang="scss">
	@use 'sass:math';

	.header {
		gap: 1rem;

		width: 100%;
		height: 10rem;
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
		}

		a {
			width: 2rem;
		}

		button.section {
			display: none;
		}

		button.drawer {
			display: flex;
		}
	}
</style>
