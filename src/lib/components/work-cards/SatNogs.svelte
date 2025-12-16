<script lang="ts">
	import Tag from '$lib/components/shared/Tag.svelte';
	import Chevron from '../icons/Chevron.svelte';
	import Google from '../logos/Google.svelte';
	import SatNogsVector from '../work-vectors/SatNogsVector.svelte';

	const tags = ['Flutter', 'Bash', 'KML', 'Dart'];
</script>

<div
	class="flex max-md:flex-col md:flex-row-reverse w-full max-md:w-[30rem] max-w-5xl max-md:max-w-full md:h-[30rem] rounded-2xl overflow-hidden bg-satnogs"
>
	<div
		class="flex items-center justify-center relative w-full md:w-1/2 h-[30rem] max-xs:h-[20rem] z-0"
	>
		<SatNogsVector
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] z-0"
		/>

		<img
			src="work/satnogs.png"
			alt="SatNogs"
			class="w-4/5 h-4/5 object-contain z-[1] overflow-visible"
		/>
	</div>

	<div class="flex flex-col w-full md:w-1/2 gap-3 max-md:gap-4 p-4 sm:p-6 md:pt-12 z-[1]">
		<h2 class="text-inverted text-2xl max-xs:text-xl font-bold font-display w-full m-0">
			SatNOGS Visualization Tool
		</h2>

		<div class="flex flex-wrap gap-2 w-full">
			{#each tags as tag}
				<Tag color="var(--pfl-satnogs-2)" alternative>
					{tag}
				</Tag>
			{/each}
		</div>

		<p class="text-inverted text-lg w-full max-lg:text-base">
			SatNOGS is a gateway to satellites data! With over <b class="text-satnogs2">10000</b> downloads
			(when it was available on the Google Play Store), SatNOGS is your go-to mobile app for accessing
			comprehensive satellite and ground station data, all sourced directly from the SatNOGS API and
			database. Born out of the Google Summer of Code 2022 program, this app is your key to unlocking
			the world of satellite exploration.
		</p>

		<div class="flex items-center justify-between w-full mt-auto">
			<Google mono className="text-satnogs2 h-5 w-fit" />

			<a
				href="https://summerofcode.withgoogle.com/archive/2022/projects/8TUw3N9s"
				target="_blank"
				class="text-satnogs2 flex items-center gap-2 font-medium hover:translate-x-[0.25rem] transition-all text-right"
			>
				Check it out!
				<div class="size-4">
					<Chevron className="text-satnogs2" />
				</div>
			</a>
		</div>
	</div>
</div>
