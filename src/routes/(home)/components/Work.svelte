<script lang="ts">
	import CloudQuiz from '../../../lib/components/work-cards/CloudQuiz.svelte';
	import Generic from '../../../lib/components/work-cards/Generic.svelte';
	import SatNogs from '../../../lib/components/work-cards/SatNogs.svelte';
	import Vaner from '../../../lib/components/work-cards/Vaner.svelte';
	import BGLine from '../../../lib/components/work-vectors/BGLine.svelte';
	import { ASTEROIDS, BEEFOR, PAPERBOOK, PORTFOLIO } from '../constants/work.constant';
</script>

<div
	id="Work"
	class="relative flex flex-col items-center gap-16 max-sm:gap-8 pt-24 sm:pt-48 pb-24 max-xs:pb-48 w-full"
>
	<h1 class="text-100 text-6xl max-sm:text-4xl font-bold text-center m-0 z-[1]">Work</h1>

	<div class="flex flex-col items-center gap-16 max-md:gap-12 sm:mt-8 px-6 w-full z-[1]">
		<Vaner />

		<div class="flex justify-center items-center gap-16 w-full max-md:flex-col max-md:gap-12">
			<Generic data={PORTFOLIO} />
			<Generic data={ASTEROIDS} />
		</div>

		<SatNogs />

		<div class="flex justify-center items-center gap-16 w-full max-md:flex-col max-md:gap-12">
			<Generic data={BEEFOR} />
			<Generic data={PAPERBOOK} />
		</div>

		<CloudQuiz />
	</div>

	<BGLine
		className="xl:hidden absolute top-[20rem] -left-80 min-w-full h-[85%] z-0 text-accent z-0 opacity-50"
	/>
</div>
