<script lang="ts">
	import ScrollIcon from '../../../lib/components/icons/Scrolling.svelte';
	import MemphiDoubleChevron from '../../../lib/components/memphis/MemphiDoubleChevron.svelte';
</script>

<div
	class="relative min-h-screen h-screen w-full flex flex-col items-center justify-center overflow-visible home"
>
	<div
		class="absolute top-0 left-1/2 w-full h-20 md:h-[160px] max-w-[1240px] opacity-90 md:opacity-50 filter blur-3xl bg-shade z-0 -translate-x-1/2"
		style="border-radius: 50%"
	></div>

	<div
		class="absolute bottom-36 left-1/2 w-full h-20 md:h-[160px] max-w-[1240px] opacity-90 md:opacity-50 filter blur-3xl bg-shade z-0 -translate-x-1/2"
		style="border-radius: 50%"
	></div>

	<img
		src="temp_orb.png"
		alt="energy orb"
		class="size-[150vw] sm:size-[75vh] sm:-translate-y-8 mix-blend-lighten object-cover"
	/>

	<div class="flex flex-col items-center gap-3 absolute bottom-36 sm:bottom-32 md:bottom-44">
		<h1 class="text-100 uppercase text-center font-bold text-3xl sm:text-5xl md:text-6xl">
			Michell Algarra
		</h1>

		<h4 class="text-accent uppercase text-center font-semibold text-xl sm:text-2xl">
			Software Engineer
		</h4>
	</div>

	<button
		class="absolute bottom-6 sm:bottom-12 w-9 h-12"
		onclick={() => {
			window.scrollTo({ top: window.innerHeight + 128, behavior: 'smooth' });
		}}
	>
		<ScrollIcon className="w-full h-full text-primary opacity-50" />
	</button>
</div>

<style lang="scss">
	.home {
		background: radial-gradient(circle, var(--pfl-light) 0%, #18141f00 80%);
	}
</style>
