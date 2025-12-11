<script lang="ts">
	import Tag from '$lib/components/shared/Tag.svelte';
	import Chevron from '../icons/Chevron.svelte';
	import Logo from '../icons/Logo.svelte';
	import MemphiDots from '../memphis/MemphiDots.svelte';
	import VanerVector from '../work-vectors/VanerVector.svelte';

	const tags = ['Ionic', 'Angular', 'Kotlin', 'TypeScript', 'NestJS', 'GCP'];
</script>

<div
	class="flex max-md:flex-col w-full max-md:w-[30rem] max-w-5xl max-md:max-w-full md:h-[30rem] rounded-2xl overflow-hidden bg-vaner"
>
	<div
		class="flex items-center justify-center relative w-full md:w-1/2 h-[30rem] max-xs:h-[20rem] z-0"
	>
		<VanerVector className="absolute -bottom-[8rem] -left-[2rem] w-[calc(100%+5rem)] h-fit z-0" />

		<MemphiDots
			className="max-lg:hidden ignore-movement bottom-[4rem] -right-36 w-44 text-accent opacity-70"
		/>

		<img src="work/vaner.png" alt="Vaner" class="w-full h-full scale-110 object-cover z-[1]" />
	</div>

	<div
		class="flex flex-col w-full md:w-1/2 gap-3 max-md:gap-4 p-4 sm:p-6 md:pt-12 z-[1] max-md:bg-accent"
	>
		<h2
			class="text-100 max-md:text-vaner text-2xl max-xs:text-xl font-bold font-display w-full m-0"
		>
			Vaner: boost your productivity
		</h2>

		<div class="flex flex-wrap gap-2 w-full">
			{#each tags as tag}
				<Tag
					color="var(--tag-color)"
					className="[--tag-color:var(--pfl-accent)] max-md:[--tag-color:var(--pfl-vaner)]"
					alternative
				>
					{tag}
				</Tag>
			{/each}
		</div>

		<p class="text-100 text-lg w-full max-lg:text-base max-md:text-inverted">
			Vaner is your ultimate partner for mastering productivity and achieving all your goals,
			designed with a personalized approach to meet your unique needs. This exclusive app combines
			three renowned productivity methods (Pomodoro, Ivy Lee, and GTD) into a single, ad-free
			platform.
		</p>

		<div class="flex items-center justify-between w-full mt-auto">
			<div class="flex items-center gap-2">
				<div class="size-6">
					<Logo white />
				</div>

				<b class="text-accent max-md:text-vaner">Personal</b>
			</div>

			<a
				href="https://vaner.xtendcode.com"
				target="_blank"
				class="text-accent max-md:text-vaner flex items-center gap-2 font-medium hover:translate-x-[0.25rem] transition-all text-right"
			>
				Check it out!
				<div class="size-4">
					<Chevron className="text-accent max-md:text-vaner" />
				</div>
			</a>
		</div>
	</div>
</div>
