<script lang="ts">
	import Uber from '$lib/components/logos/Uber.svelte';
	import Cadmus from '../../../lib/components/logos/Cadmus.svelte';
	import Facens from '../../../lib/components/logos/Facens.svelte';
	import Google from '../../../lib/components/logos/Google.svelte';
	import Lg from '../../../lib/components/logos/LG.svelte';
	import Micro1 from '../../../lib/components/logos/Micro1.svelte';

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

<div class="logos relative w-full h-32">
	<div class="wrapper flex items-center whitespace-nowrap w-full h-full overflow-hidden">
		<div
			class="slider flex items-center justify-center gap-24 sm:gap-6 sm:w-full h-full p-12 sm:p-6"
		>
			<div class="logo h-7">
				<Google className="text-light w-full h-full" mono={true} />
			</div>

			<div class="logo h-[22px]">
				<Micro1 className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
			</div>

			<div class="logo h-[22px]">
				<Uber className="text-light w-full h-full" />
			</div>

			<div class="logo h-[22px]">
				<Cadmus className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
			</div>

			<!-- <div class="logo h-7">
				<Lg className="text-light w-full h-full" mono={true} />
			</div> -->

			<div class="logo h-7">
				<Facens className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
			</div>
		</div>

		<!-- Carrousel duplication -->

		{#if innerWidth < 660}
			<div class="slider flex items-center justify-center gap-24 sm:gap-6 h-full p-12 sm:p-6">
				<div class="logo h-7">
					<Google className="text-light w-full h-full" mono={true} />
				</div>

				<div class="logo h-[22px]">
					<Micro1 className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
				</div>

				<div class="logo h-[22px]">
					<Uber className="text-light w-full h-full" />
				</div>

				<div class="logo h-[22px]">
					<Cadmus className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
				</div>

				<!-- <div class="logo h-7">
					<Lg className="text-light w-full h-full" mono={true} />
				</div> -->

				<div class="logo h-7">
					<Facens className="text-light w-full h-full" accentColor="var(--pfl-accent)" />
				</div>
			</div>
		{/if}
	</div>

	<div
		class="background absolute top-0 left-1/2 -translate-x-1/2 bg-black opacity-30 w-screen h-full z-0"
	></div>
</div>

<style lang="scss">
	.logos:hover .slider {
		animation-play-state: paused;
	}

	.slider {
		z-index: 1;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;

		min-width: 103px;
	}

	@media (max-width: 659px) {
		.slider {
			animation: slide 20s infinite linear;
		}

		.logo {
			flex: unset;
		}
	}

	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
